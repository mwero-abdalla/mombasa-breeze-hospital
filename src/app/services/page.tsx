import {
  Ambulance,
  Baby,
  ChevronRight,
  CircleCheck,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-5">
          <CoastlinePulse
            className="absolute bottom-0 left-0 right-0 h-8 w-full"
            color="hsl(var(--color-primary-foreground))"
            strokeWidth={1.5}
          />
        </div>
        <div className="relative container-rhythm py-24 md:py-36">
          <div className="max-w-2xl">
            <span
              className="badge-earmark badge-earmark--secondary mb-4 inline-block"
              style={{
                borderColor: "hsl(var(--color-primary-foreground) / 0.3)",
                backgroundColor: "hsl(var(--color-primary-foreground) / 0.1)",
                color: "hsl(var(--color-primary-foreground))",
              }}
            >
              {services.length} SPECIALIZED DEPARTMENTS
            </span>
            <h1 className="text-display text-primary-foreground mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-xl">
              Comprehensive healthcare services tailored to your needs —
              delivered with compassion and expertise under one roof.
            </p>
            <CoastlinePulse
              className="w-full max-w-xs h-4"
              color="hsl(var(--color-primary-foreground))"
              strokeWidth={2}
              style={{ opacity: 0.4 }}
            />
          </div>
        </div>
        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path coastline-path--accent"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="container-rhythm">
          <div className="text-center mb-10">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              QUICK NAVIGATION
            </span>
            <h2 className="text-h2 text-foreground mb-2">Jump to a Service</h2>
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
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium"
                >
                  <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  {service.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] || Stethoscope;
        const equipment = serviceEquipment[service.title] || [];
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.title}
            id={service.title.toLowerCase().replace(/\s+/g, "-")}
            className={`section-rhythm ${isEven ? "bg-background" : "bg-muted"}`}
          >
            <div className="container-rhythm">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image/Icon Side */}
                <div className={!isEven ? "lg:order-2" : ""} aria-hidden="true">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-2xl" />
                    <div className="relative rounded-3xl bg-primary/5 p-1">
                      <div className="relative rounded-2xl bg-background p-8 md:p-12 flex items-center justify-center h-full min-h-[300px]">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-primary/10 mb-6">
                            <Icon className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                          </div>
                          <h3 className="text-h2 text-foreground">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={isEven ? "lg:order-2" : ""}>
                  <p className="text-body text-muted-foreground mb-8 leading-relaxed">
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
                          <span className="text-muted-foreground text-body-sm">
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
                          <span
                            key={item}
                            className="px-3 py-1.5 text-xs font-medium text-primary/80 bg-primary/5 rounded-lg border border-primary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/appointments">
                    <Button
                      size="lg"
                      variant="default"
                      className="btn-coastline gap-2"
                    >
                      {service.cta}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Coastline divider between services */}
            <div
              className="container-rhythm coastline-divider"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="coastline-path"
                  d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
                />
              </svg>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="section-rhythm relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-5">
          <CoastlinePulse
            className="absolute bottom-0 left-0 right-0 h-8 w-full"
            color="hsl(var(--color-primary-foreground))"
            strokeWidth={1.5}
          />
        </div>
        <div className="relative container-rhythm text-center">
          <div className="max-w-3xl mx-auto">
            <span
              className="badge-earmark badge-earmark--secondary mb-4 inline-block"
              style={{
                borderColor: "hsl(var(--color-primary-foreground) / 0.3)",
                backgroundColor: "hsl(var(--color-primary-foreground) / 0.1)",
                color: "hsl(var(--color-primary-foreground))",
              }}
            >
              BOOK NOW
            </span>
            <h2 className="text-h1 text-primary-foreground mb-4">
              Ready to Book an Appointment?
            </h2>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule your visit today and experience quality healthcare with
              compassion at {siteConfig.name}.
            </p>
            <Link href="/appointments">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary cursor-pointer font-semibold btn-coastline gap-2"
              >
                Book Appointment
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
