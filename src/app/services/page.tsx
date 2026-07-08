import type { LucideIcon } from "lucide-react";
import {
  Ambulance,
  ArrowRight,
  Baby,
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
import { services, siteConfig } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Ambulance,
  HeartPulse,
  Child: Baby,
  Microscope,
  Pill,
  Scan,
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

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 300, x: "8%", y: "5%" },
            { size: 220, x: "78%", y: "10%" },
            { size: 150, x: "70%", y: "70%" },
            { size: 200, x: "15%", y: "80%" },
            { size: 130, x: "85%", y: "45%" },
          ].map((s, i) => (
            <div
              key={s.size + s.x}
              className="absolute rounded-full bg-white/[0.04] animate-float"
              style={{
                width: s.size,
                height: s.size,
                left: s.x,
                top: s.y,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4.5 + i * 0.6}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              {services.length} SPECIALIZED DEPARTMENTS
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-xl">
              Comprehensive healthcare services tailored to your needs —
              delivered with compassion and expertise under one roof.
            </p>
          </div>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0 h-6" />
      </section>

      {/* ── Service Categories ── */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] || Stethoscope;
        const equipment = serviceEquipment[service.title] || [];
        return (
          <section
            key={service.title}
            className={`py-20 md:py-28 ${index % 2 === 0 ? "" : "bg-muted/50"}`}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={index % 2 !== 0 ? "lg:order-last" : ""}>
                  <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 rounded-2xl p-10 md:p-12 text-white text-center shadow-xl shadow-primary/15">
                    <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      {Icon && <Icon className="h-10 w-10" />}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
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
                          <CircleCheck className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
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
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/appointments">
                    <Button
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 cursor-pointer font-semibold"
                    >
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Quick Nav ── */}
      <section className="py-16 bg-gradient-to-b from-white to-muted/30">
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
              const Icon = iconMap[service.icon] || Stethoscope;
              return (
                <Link
                  key={service.title}
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium"
                >
                  {Icon && (
                    <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  )}
                  {service.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 260, x: "5%", y: "10%" },
            { size: 180, x: "82%", y: "65%" },
            { size: 140, x: "50%", y: "90%" },
          ].map((s, i) => (
            <div
              key={s.size + s.x}
              className="absolute rounded-full bg-white/[0.04] animate-float"
              style={{
                width: s.size,
                height: s.size,
                left: s.x,
                top: s.y,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${4 + i * 0.8}s`,
              }}
            />
          ))}
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
              className="bg-white text-primary hover:bg-blue-50 cursor-pointer font-semibold shadow-lg shadow-black/10"
            >
              Book Appointment
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
