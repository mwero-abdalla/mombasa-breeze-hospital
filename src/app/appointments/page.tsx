"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CoastlinePulse } from "@/components/ui/coastline-pulse";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { departments, doctors, siteConfig } from "@/lib/data";

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

const iconClasses = "h-4 w-4 shrink-0 text-primary";
const selectClass =
  "h-9 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-1.5 text-sm transition-colors outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2364748B%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.22%208.22a.75.75%200%200%201%201.06%200L10%2011.94l3.72-3.72a.75.75%200%201%201%201.06%201.06l-4.25%204.25a.75.75%200%200%201-1.06%200L5.22%209.28a.75.75%200%200%201%200-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-8";

const fieldErrorClass = "text-xs text-destructive mt-1 flex items-center gap-1";

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

  function handleReset() {
    setSubmitted(false);
    setFormData(initialState);
    setErrors({});
    setTouched(new Set());
  }

  const selectedDepartment = departments.find(
    (d) => d.value === formData.department,
  );
  const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
  const selectedTimeSlot = timeSlots.find(
    (s) => s.value === formData.preferredTime,
  );

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <Badge variant="secondary" className="mb-5">
            {siteConfig.name} - Appointments
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Schedule your visit with ease. We&apos;ll confirm your appointment
            promptly.
          </p>
          <div className="mt-8 flex justify-center">
            <CoastlinePulse color="white" className="w-64 max-h-4" animated />
          </div>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0 h-6" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="text-center py-12 border-t-4 border-t-accent overflow-hidden">
                  <CardHeader>
                    <motion.div
                      className="flex justify-center mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="rounded-full bg-accent/15 p-4">
                        <CheckCircle className="h-14 w-14 text-accent" />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <CardTitle className="text-2xl mb-2">
                        Appointment Booked!
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <motion.p
                      className="text-muted-foreground max-w-sm mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Your appointment request has been submitted successfully.
                      We will contact you to confirm your visit.
                    </motion.p>
                    <motion.div
                      className="bg-primary/10 rounded-xl p-5 text-left space-y-3 text-sm border border-primary/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {[
                        { label: "Name", value: formData.fullName },
                        { label: "Phone", value: formData.phone },
                        { label: "Email", value: formData.email },
                        { label: "Date", value: formData.preferredDate },
                        {
                          label: "Time",
                          value:
                            selectedTimeSlot?.label ?? formData.preferredTime,
                        },
                        {
                          label: "Department",
                          value:
                            selectedDepartment?.label ?? formData.department,
                        },
                        {
                          label: "Doctor",
                          value: selectedDoctor?.name ?? formData.doctor,
                        },
                        { label: "Reason", value: formData.reason },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between gap-4"
                        >
                          <span className="font-medium text-muted-foreground shrink-0">
                            {item.label}
                          </span>
                          <span className="text-foreground text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        variant="outline"
                        onClick={handleReset}
                        className="cursor-pointer gap-2"
                      >
                        <ChevronRight className="h-4 w-4" />
                        Book Another Appointment
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="border-t-4 border-t-primary overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Book an Appointment
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Fill in the details below and we&apos;ll get back to you
                      to confirm your visit.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      noValidate
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <Label
                            htmlFor="fullName"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <User className={iconClasses} />
                            Full Name <span className="text-rose">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={!!errors.fullName}
                            className="h-9"
                          />
                          {errors.fullName && (
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="phone"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <Phone className={iconClasses} />
                            Phone <span className="text-rose">*</span>
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+254 7XX XXX XXX"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={!!errors.phone}
                            className="h-9"
                          />
                          {errors.phone && (
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <Mail className={iconClasses} />
                            Email <span className="text-rose">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={!!errors.email}
                            className="h-9"
                          />
                          {errors.email && (
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="preferredDate"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <Calendar className={iconClasses} />
                            Preferred Date <span className="text-rose">*</span>
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
                            className="h-9"
                          />
                          {errors.preferredDate && (
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.preferredDate}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="preferredTime"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <Clock className={iconClasses} />
                            Preferred Time <span className="text-rose">*</span>
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
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.preferredTime}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="department"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <Calendar className={iconClasses} />
                            Department <span className="text-rose">*</span>
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
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.department}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <Label
                            htmlFor="doctor"
                            className="text-sm font-medium flex items-center gap-2"
                          >
                            <User className={iconClasses} />
                            Doctor <span className="text-rose">*</span>
                          </Label>
                          <select
                            id="doctor"
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={selectClass}
                            aria-invalid={!!errors.doctor}
                            disabled={!formData.department}
                          >
                            <option value="">
                              {formData.department
                                ? "Select a doctor"
                                : "Select a department first"}
                            </option>
                            {doctorsForDepartment.map((doc) => (
                              <option key={doc.name} value={doc.name}>
                                {doc.name} &mdash; {doc.specialty}
                              </option>
                            ))}
                          </select>
                          {errors.doctor && (
                            <p className={fieldErrorClass}>
                              <span className="sr-only">Error: </span>
                              {errors.doctor}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="reason"
                          className="text-sm font-medium flex items-center gap-2"
                        >
                          <MessageSquare className={iconClasses} />
                          Reason for Visit <span className="text-rose">*</span>
                        </Label>
                        <Textarea
                          id="reason"
                          name="reason"
                          placeholder="Briefly describe your symptoms or reason for visiting (minimum 10 characters)"
                          value={formData.reason}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={!!errors.reason}
                          rows={3}
                          className="min-h-[80px]"
                        />
                        {errors.reason && (
                          <p className={fieldErrorClass}>
                            <span className="sr-only">Error: </span>
                            {errors.reason}
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full cursor-pointer bg-primary hover:bg-primary-hover"
                        >
                          <Calendar className="h-4 w-4" />
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
