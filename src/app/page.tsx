import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Ambulance,
  BadgeCheck,
  BadgeDollarSign,
  Clock,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import {
  CounterSection,
  HeroDecorations,
  ScrollReveal,
  StaggerGrid,
  StaggerItem,
  TestimonialsCarousel,
} from "@/components/sections/home-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  insurancePartners,
  services,
  siteConfig,
  whyChooseUs,
} from "@/lib/data";

const wcuIconMap: Record<string, LucideIcon> = {
  UserCheck,
  Microscope,
  Clock,
  BadgeDollarSign,
  HeartHandshake,
  Accessibility,
  BadgeCheck,
  MapPin,
};

const svcIconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Ambulance,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  Scalpel: Syringe,
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-dvh flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white overflow-hidden pt-16">
        <HeroDecorations />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              24/7 Healthcare Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Your Trusted Healthcare Partner in Mombasa
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-xl">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointments">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-blue-50 cursor-pointer font-semibold"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/emergency">
                <Button
                  size="lg"
                  className="bg-rose text-white hover:bg-rose/90 cursor-pointer font-semibold animate-pulse-urgent"
                >
                  Emergency: {siteConfig.phone.emergency}
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10 cursor-pointer font-semibold"
                >
                  Find Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0 h-6" />
      </section>

      {/* ── Quick Stats ── */}
      <CounterSection />

      {/* ── Why Choose Us ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              WHY CHOOSE US
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Care That Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional healthcare services to
              our community with compassion and expertise.
            </p>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = wcuIconMap[item.icon];
              return (
                <StaggerItem key={item.title}>
                  <Card className="p-6 h-full card-hover border-t-4 border-t-primary/10">
                    {Icon && <Icon className="h-10 w-10 text-primary mb-4" />}
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Featured Services ── */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Healthcare
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet your needs.
            </p>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = svcIconMap[service.icon] || Stethoscope;
              return (
                <StaggerItem key={service.title}>
                  <Card className="p-6 flex flex-col h-full card-hover">
                    {Icon && <Icon className="h-10 w-10 text-primary mb-4" />}
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription className="flex-1 mb-4">
                      {service.description}
                    </CardDescription>
                    <Link
                      href={`/services/${slugify(service.title)}`}
                      className="text-primary font-medium text-sm hover:underline mt-auto inline-flex items-center gap-1 group"
                    >
                      Learn More{" "}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsCarousel />

      {/* ── Insurance Partners ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              INSURANCE & PAYMENTS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Insurance Partners
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with a wide range of insurance providers to make
              healthcare accessible.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {insurancePartners.map((partner) => (
              <div
                key={partner}
                className="p-4 rounded-xl bg-muted/50 text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book an Appointment?
            </h2>
            <p className="text-blue-100/90 mb-8 max-w-xl mx-auto">
              Schedule your visit today and experience quality healthcare with
              compassion.
            </p>
            <Link href="/appointments">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 cursor-pointer font-semibold shadow-lg shadow-black/10"
              >
                Book Appointment
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
