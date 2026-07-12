import {
  Ambulance,
  Baby,
  ChevronRight,
  ChevronRight as ChevronRightIcon,
  CircleCheck,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CoastlinePulse } from "@/components/ui/coastline-pulse";
import { services, siteConfig } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Ambulance,
  HeartPulse,
  Baby,
  Microscope,
  Pill,
  Scan,
  Syringe,
  Child: Baby,
  Scalpel: Syringe,
};

const serviceEquipment: Record<string, string[]> = {
  "General Consultation": [
    "ECG",
    "Stethoscope",
    "Blood Pressure Monitor",
    "Glucometer",
    "Thermometer",
    "Spirometer",
  ],
  "Emergency Medicine": [
    "Defibrillator",
    "Ventilator",
    "ECG Machine",
    "Patient Monitor",
    "Infusion Pump",
    "Trauma Kit",
  ],
  "Maternity Services": [
    "Fetal Monitor",
    "Ultrasound",
    "Incubator",
    "Phototherapy Unit",
    "Delivery Set",
    "Resuscitation Kit",
  ],
  Pediatrics: [
    "Pediatric Stethoscope",
    "Nebulizer",
    "Growth Chart",
    "Thermometer",
    "Vaccination Kit",
    "Pulse Oximeter",
  ],
  "Laboratory Services": [
    "Hematology Analyzer",
    "Biochemistry Analyzer",
    "Microscope",
    "Centrifuge",
    "Culture Incubator",
    "Coagulation Analyzer",
  ],
  "Pharmacy Services": [
    "Temperature-Controlled Storage",
    "Dispensing System",
    "IV Preparation Unit",
    "Automated Inventory",
    "Compounding Equipment",
  ],
  "Radiology & Imaging": [
    "Digital X-Ray",
    "Ultrasound Scanner",
    "CT Scanner",
    "MRI Scanner",
    "Mammography Unit",
    "Fluoroscopy System",
  ],
  "Minor Surgery": [
    "Surgical Instruments",
    "Sterilization Unit",
    "Operating Table",
    "Anesthesia Machine",
    "Surgical Lights",
    "Suction Apparatus",
  ],
};

const quickNavIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Stethoscope,
  Ambulance,
  HeartPulse,
  Baby,
  Microscope,
  Pill,
  Scan,
  Syringe,
  Child: Baby,
  Scalpel: Syringe,
};

const quickNavIconsMap: Record<string, string> = {
  "General Consultation": "Stethoscope",
  "Emergency Medicine": "Ambulance",
  "Maternity Services": "HeartPulse",
  Pediatrics: "Child",
  "Laboratory Services": "Microscope",
  "Pharmacy Services": "Pill",
  "Radiology & Imaging": "Scan",
  "Minor Surgery": "Scalpel",
};

const gradientBgClasses = [
  "from-blue-500 via-blue-600 to-teal-600",
  "from-emerald-500 via-teal-600 to-cyan-600",
  "from-rose-500 via-pink-500 to-red-500",
  "from-amber-500 via-orange-500 to-red-500",
  "from-violet-500 via-purple-600 to-indigo-600",
  "from-cyan-500 via-sky-500 to-blue-500",
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-teal-500 via-emerald-500 to-green-500",
];

const gradientBgClassesLight = [
  "from-blue-50 via-blue-100 to-teal-50",
  "from-emerald-50 via-teal-50 to-cyan-50",
  "from-rose-50 via-pink-50 to-red-50",
  "from-amber-50 via-orange-50 to-red-50",
  "from-violet-50 via-purple-50 to-indigo-50",
  "from-cyan-50 via-sky-50 to-blue-50",
  "from-indigo-50 via-purple-50 to-pink-50",
  "from-teal-50 via-emerald-50 to-green-50",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CoastlinePulse
            className="absolute bottom-0 left-0 right-0 h-8 w-full"
            color="white"
            strokeWidth={1.5}
            style={{ opacity: 0.15 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,transparent_70%)] from-white/5 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-4 border-white/20 text-white/90 bg-white/10"
            >
              {services.length} SPECIALIZED DEPARTMENTS
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-xl">
              Comprehensive healthcare services tailored to your needs —
              delivered with compassion and expertise under one roof.
            </p>
            <CoastlinePulse
              className="w-full max-w-xs h-4"
              color="white"
              strokeWidth={2}
              style={{ opacity: 0.4 }}
            />
          </div>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <section className="py-16 bg-white border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              QUICK NAVIGATION
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Jump to a Service
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => {
              const Icon =
                quickNavIcons[quickNavIconsMap[service.title]] || Stethoscope;
              const slug = service.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={service.title}
                  href={`/services/${slug}`}
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium"
                >
                  <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  {service.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] || Stethoscope;
        const equipment = serviceEquipment[service.title] || [];
        const bgClass = index % 2 === 0 ? "bg-white" : "bg-muted/50";
        const gradientBg = gradientBgClasses[index % gradientBgClasses.length];
        const gradientBgLight =
          gradientBgClassesLight[index % gradientBgClassesLight.length];
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.title}
            id={service.title.toLowerCase().replace(/\s+/g, "-")}
            className={`py-20 md:py-28 ${bgClass}`}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image/Icon Side */}
                <div className={!isEven ? "lg:order-2" : ""} aria-hidden="true">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradientBg} opacity-20 blur-2xl`}
                    />
                    <div
                      className={`relative rounded-3xl bg-gradient-to-br ${gradientBgLight} p-1`}
                    >
                      <div className="relative rounded-2xl bg-background p-8 md:p-12 flex items-center justify-center h-full min-h-[300px]">
                        <div className="text-center">
                          <div
                            className={`inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${gradientBg} mb-6`}
                          >
                            <Icon className="h-12 w-12 md:h-16 md:w-16 text-white" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={isEven ? "lg:order-2" : ""}>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-primary flex items-center gap-2">
                      <span className="w-6 h-px bg-primary/30" />
                      Key Benefits
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit.text}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <CircleCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {benefit.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {equipment.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.15em] text-primary flex items-center gap-2">
                        <span className="w-6 h-px bg-primary/30" />
                        Equipment & Treatments
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {equipment.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="gap-1.5"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/appointments">
                    <Button
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 cursor-pointer font-semibold gap-2"
                    >
                      {service.cta}
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CoastlinePulse
            className="absolute bottom-0 left-0 right-0 h-8 w-full"
            color="white"
            strokeWidth={1.5}
            style={{ opacity: 0.15 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,transparent_70%)] from-white/5 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-white/20 text-white/80 bg-white/10"
          >
            BOOK NOW
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book an Appointment?
          </h2>
          <p className="text-blue-100/90 mb-8 max-w-xl mx-auto">
            Schedule your visit today and experience quality healthcare with
            compassion at {siteConfig.name}.
          </p>
          <Link href="/appointments">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 cursor-pointer font-semibold shadow-lg shadow-black/10 gap-2"
            >
              Book Appointment
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
