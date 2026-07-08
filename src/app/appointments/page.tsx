"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { departments, doctors } from "@/lib/data";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  department: string;
  doctor: string;
  reason: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  department?: string;
  doctor?: string;
  reason?: string;
}

const timeSlots = [
  { label: "Morning (8:00 AM - 12:00 PM)", value: "morning" },
  { label: "Afternoon (12:00 PM - 4:00 PM)", value: "afternoon" },
  { label: "Evening (4:00 PM - 8:00 PM)", value: "evening" },
];

const initialState: FormData = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  department: "",
  doctor: "",
  reason: "",
};

export default function AppointmentsPage() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const doctorsForDepartment = useMemo(
    () =>
      formData.department
        ? doctors.filter(
            (d) =>
              d.specialty.toLowerCase() ===
              departments
                .find((dep) => dep.value === formData.department)
                ?.label?.toLowerCase(),
          )
        : doctors,
    [formData.department],
  );

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched.has(name)) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setTouched((prev) => new Set(prev).add(name));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function validateField(name: string, value: string): string | undefined {
    switch (name) {
      case "fullName":
        return value.trim() ? undefined : "Full name is required";
      case "phone":
        return value.trim()
          ? /^[\d\s+\-()]{7,15}$/.test(value)
            ? undefined
            : "Enter a valid phone number"
          : "Phone number is required";
      case "email":
        return value.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? undefined
            : "Enter a valid email address"
          : "Email is required";
      case "preferredDate":
        return value ? undefined : "Preferred date is required";
      case "preferredTime":
        return value ? undefined : "Preferred time is required";
      case "department":
        return value ? undefined : "Please select a department";
      case "doctor":
        return value ? undefined : "Please select a doctor";
      case "reason":
        return value.trim()
          ? value.trim().length >= 10
            ? undefined
            : "Please provide at least 10 characters"
          : "Reason for visit is required";
      default:
        return undefined;
    }
  }

  function validateAll(): FormErrors {
    const newErrors: FormErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key, value as string);
      if (error) newErrors[key as keyof FormErrors] = error;
    }
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validateAll();
    setErrors(newErrors);
    setTouched(new Set(Object.keys(formData)));
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  const selectClass =
    "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80";

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Schedule your visit with ease
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center py-12">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      Appointment Booked!
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Your appointment request has been submitted successfully.
                      We will contact you to confirm your visit.
                    </p>
                    <div className="bg-muted rounded-lg p-4 text-left space-y-2 text-sm">
                      <p>
                        <strong>Name:</strong> {formData.fullName}
                      </p>
                      <p>
                        <strong>Phone:</strong> {formData.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Date:</strong> {formData.preferredDate}
                      </p>
                      <p>
                        <strong>Time:</strong>{" "}
                        {timeSlots.find(
                          (s) => s.value === formData.preferredTime,
                        )?.label ?? formData.preferredTime}
                      </p>
                      <p>
                        <strong>Department:</strong>{" "}
                        {departments.find(
                          (d) => d.value === formData.department,
                        )?.label ?? formData.department}
                      </p>
                      <p>
                        <strong>Doctor:</strong>{" "}
                        {doctors.find((d) => d.name === formData.doctor)
                          ?.name ?? formData.doctor}
                      </p>
                      <p>
                        <strong>Reason:</strong> {formData.reason}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData(initialState);
                        setErrors({});
                        setTouched(new Set());
                      }}
                      className="cursor-pointer"
                    >
                      Book Another Appointment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Book an Appointment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      noValidate
                    >
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          <User className="h-4 w-4 inline mr-1" />
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-destructive">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          <Phone className="h-4 w-4 inline mr-1" />
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          <Mail className="h-4 w-4 inline mr-1" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Preferred Date
                        </Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          min={today}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.preferredDate}
                        />
                        {errors.preferredDate && (
                          <p className="text-sm text-destructive">
                            {errors.preferredDate}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Preferred Time
                        </Label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={selectClass}
                          aria-invalid={!!errors.preferredTime}
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {slot.label}
                            </option>
                          ))}
                        </select>
                        {errors.preferredTime && (
                          <p className="text-sm text-destructive">
                            {errors.preferredTime}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="department">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Department
                        </Label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={selectClass}
                          aria-invalid={!!errors.department}
                        >
                          <option value="">Select a department</option>
                          {departments.map((dep) => (
                            <option key={dep.value} value={dep.value}>
                              {dep.label}
                            </option>
                          ))}
                        </select>
                        {errors.department && (
                          <p className="text-sm text-destructive">
                            {errors.department}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="doctor">
                          <User className="h-4 w-4 inline mr-1" />
                          Doctor
                        </Label>
                        <select
                          id="doctor"
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={selectClass}
                          aria-invalid={!!errors.doctor}
                        >
                          <option value="">Select a doctor</option>
                          {doctorsForDepartment.map((doc) => (
                            <option key={doc.name} value={doc.name}>
                              {doc.name} &mdash; {doc.specialty}
                            </option>
                          ))}
                        </select>
                        {errors.doctor && (
                          <p className="text-sm text-destructive">
                            {errors.doctor}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="reason">
                          <MessageSquare className="h-4 w-4 inline mr-1" />
                          Reason for Visit
                        </Label>
                        <Textarea
                          id="reason"
                          name="reason"
                          placeholder="Briefly describe your reason for visiting"
                          value={formData.reason}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.reason}
                          rows={3}
                        />
                        {errors.reason && (
                          <p className="text-sm text-destructive">
                            {errors.reason}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2 pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full cursor-pointer"
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
