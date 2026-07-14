import Link from "next/link";
import {
  CounterSection,
  TestimonialsCarousel,
} from "@/components/sections/home-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  insurancePartners,
  services,
  siteConfig,
  stats,
  whyChooseUs,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Ambulance: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 14H3" />
      <path d="M3 6h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  BedDouble: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8h9" />
      <path d="M18 8h2" />
    </svg>
  ),
  Baby: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M12 9h.01" />
      <path d="M12 15h.01" />
      <path d="M12 5C17 5 17 17 12 17S7 17 7 12 7 5 12 5" />
      <path d="M9.5 9.5c.8 0 1.5-.7 1.5-1.5S10.3 6.5 9.5 6.5" />
      <path d="M14.5 9.5c.8 0 1.5-.7 1.5-1.5S15.3 6.5 14.5 6.5" />
    </svg>
  ),
  HeartPulse: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22s8-6 8-10v-5" />
      <path d="M8 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4" />
      <path d="M18 6a6 6 0 0 0-12 0" />
      <path d="M10 2v2" />
      <path d="M14 2v2" />
    </svg>
  ),
  Tent: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3.5 21h17" />
      <path d="M20.84 4.61a2 2 0 0 1 0 3.79L10.38 21.4a2 2 0 0 1-3.2 0L3.16 8.4a2 2 0 0 1 0-3.79" />
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  FileCheck: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="11" y1="13" y2="18" />
      <line x1="16" x2="11" y1="17" y2="22" />
    </svg>
  ),
  UserCheck: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="17 11 19 13 22 10" />
    </svg>
  ),
  Microscope: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M6 18h12" />
      <path d="M10 18V6a2 2 0 0 1 4 0v12" />
      <path d="M4 10h16" />
      <path d="M9 14h6" />
      <path d="M12 4v2" />
      <path d="M12 20v-2" />
    </svg>
  ),
  Clock: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Heart: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.02a5.5 5.5 0 0 0-11 0c0 1.81 1.51 3.56 3 5.02" />
      <path d="M5 14c-1.49-1.46-3-3.21-3-5.02a5.5 5.5 0 0 1 11 0c0 1.81-1.51 3.56-3 5.02" />
    </svg>
  ),
  Child: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 5c-2.5 0-4.5 2-4.5 4.5S9.5 14 12 14s4.5-2 4.5-4.5S14.5 5 12 5" />
      <path d="M12 2v20" />
      <path d="M2 12h20" />
    </svg>
  ),
  Pill: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10.5 20.5 10 21" />
      <path d="M13.5 20.5 14 21" />
      <path d="M21 15H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Z" />
      <path d="M7 9v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2" />
      <path d="M17 9v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2" />
    </svg>
  ),
  Scan: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
      <path d="M10 12v8" />
      <path d="M14 12v8" />
    </svg>
  ),
  Scalpel: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="20" y1="4" y2="4" />
      <line x1="18" x2="18" y1="2" y2="6" />
    </svg>
  ),
  Stethoscope: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0" />
      <circle cx="20" cy="15" r="1" />
    </svg>
  ),
  HeartHandshake: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.02a5.5 5.5 0 0 0-11 0c0 1.81 1.51 3.56 3 5.02" />
      <path d="M5 14c-1.49-1.46-3-3.21-3-5.02a5.5 5.5 0 0 1 11 0c0 1.81-1.51 3.56-3 5.02" />
      <path d="M12 16h.01" />
      <path d="M8 19h8" />
    </svg>
  ),
  Accessibility: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="M18 19V4a2 2 0 0 0-2-2" />
      <path d="M4 11.5 6 17" />
      <path d="M10 6.5v8.5" />
      <path d="M14 17v-8.5" />
      <path d="M18 11.5 16 17" />
    </svg>
  ),
  BadgeCheck: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <polyline points="9 11 12 14 22 4" />
    </svg>
  ),
  MapPin: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  BadgeDollarSign: ({ className }) => (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero: Coastline Pulse as Thesis ── */}
      <section className="page-surface relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--secondary)/0.14),transparent_30%),radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_28%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/hero-coastline.svg')] bg-cover bg-center opacity-[0.1]"
        />

        {/* Coastline animated draw — the signature element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-full max-w-6xl h-auto opacity-80"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              stroke: "hsl(var(--color-coastline-subtle))",
              strokeWidth: 1.25,
              fill: "none",
            }}
            aria-hidden="true"
          >
            <path
              className="coastline-path--draw animate-coastline-draw"
              d="M0,60 C150,85 300,35 450,60 C600,85 750,35 900,60 C1050,85 1200,60 1200,60"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Subtle ambient pulse */}
        <div className="absolute inset-0 opacity-[0.06] animate-coastline-pulse">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              stroke: "hsl(var(--color-primary))",
              strokeWidth: 0.5,
              fill: "none",
            }}
            aria-hidden="true"
          >
            <path
              d="M0,60 C150,85 300,35 450,60 C600,85 750,35 900,60 C1050,85 1200,60 1200,60"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="relative container-rhythm py-20 md:py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:gap-16">
            <div className="max-w-3xl">
              {/* Earmark badge */}
              <span
                className="badge-earmark badge-earmark--primary mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Level 4 Hospital · Mombasa Saba Saba
              </span>

              {/* Headline — Syne Display, the thesis */}
              <h1
                className="text-display text-foreground text-balance mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Quality Healthcare with Compassion
              </h1>

              {/* Supporting copy */}
              <p
                className="text-body text-muted-foreground max-w-2xl mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Mombasa Breeze Hospital is a Level 4 private hospital on Ronald
                Ngala Road, serving Mombasa and the Coast region with 24/7
                emergency care, 53 inpatient beds, and eight specialized
                departments — all under one roof.
              </p>

              {/* Coastline divider */}
              <div
                className="coastline-divider mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 1200 60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="coastline-path coastline-path--thick"
                    d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
                  />
                </svg>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col gap-4 sm:flex-row sm:flex-wrap animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <Link href="/appointments">
                  <Button
                    size="lg"
                    className="btn-coastline w-full rounded-full px-6 sm:w-auto"
                  >
                    Book Appointment
                  </Button>
                </Link>
                <a
                  href="tel:+254798164953"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto emergency-pulse"
                  aria-label="Call emergency: +254 798 164 953"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-4 w-4 text-coral-reef"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Emergency: +254 798 164 953
                </a>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
                >
                  Find Us
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <Card className="border-border/60 bg-card/92 p-6 shadow-[0_24px_70px_-40px_rgba(9,35,37,0.45)] backdrop-blur-sm md:p-8">
              <CardContent className="p-0">
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-border/60 pb-5">
                  <div>
                    <span className="badge-earmark badge-earmark--muted mb-3 inline-block">
                      Quick facts
                    </span>
                    <h2 className="text-h2 text-foreground">What to expect</h2>
                  </div>
                  <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    24/7
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.slice(0, 4).map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/70 bg-background/70 p-4"
                    >
                      <p className="text-2xl font-display font-semibold tracking-tight text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 rounded-2xl border border-border/60 bg-muted/35 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">
                      Address
                    </span>
                    <span className="text-right text-sm text-muted-foreground">
                      {siteConfig.location.address}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">
                      Emergency
                    </span>
                    <a
                      href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
                    >
                      {siteConfig.phone.emergency}
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-foreground">
                      Hours
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {siteConfig.operatingHours}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom coastline wave */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            style={{
              stroke: "hsl(var(--color-coastline-subtle))",
              strokeWidth: 1,
              fill: "none",
            }}
            aria-hidden="true"
          >
            <path
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── Stats Counter Section ── */}
      <section className="py-16 md:py-24 bg-muted">
        <CounterSection />
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-rhythm bg-background">
        <div className="container-rhythm">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              WHY CHOOSE US
            </span>
            <h2 className="text-h1 text-foreground">Care That Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, _i) => {
              const Icon = iconMap[item.icon] || iconMap.UserCheck;
              return (
                <Card
                  key={item.title}
                  variant="elevated"
                  className={cn("p-6 h-full transition-all duration-300")}
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="icon-wrapper icon-wrapper--primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-h3 text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Coastline divider between sections */}
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

      {/* ── Services Overview ── */}
      <section className="section-rhythm bg-muted">
        <div className="container-rhythm">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              OUR SERVICES
            </span>
            <h2 className="text-h1 text-foreground">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-body text-muted-foreground mt-4">
              Specialized care across eight medical departments, all under one
              roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || iconMap.Stethoscope;
              return (
                <Link
                  key={service.title}
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Card
                    variant="interactive"
                    className={cn("p-6 h-full transition-all duration-300")}
                  >
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="icon-wrapper icon-wrapper--secondary mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-h3 text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-body-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                        {service.description.slice(0, 120)}...
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm font-medium text-primary">
                          Learn More
                        </span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              View All Services
              <svg
                aria-hidden="true"
                focusable="false"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
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

      {/* ── Testimonials ── */}
      <section className="section-rhythm bg-background">
        <TestimonialsCarousel />
      </section>

      {/* ── Insurance Partners ── */}
      <section className="section-rhythm bg-background">
        <div className="container-rhythm">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              TRUSTED PARTNERS
            </span>
            <h2 className="text-h1 text-foreground">Insurance Partners</h2>
            <p className="text-body text-muted-foreground mt-4">
              We accept all major insurance providers including SHA for
              accessible healthcare.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {insurancePartners.map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 text-sm font-medium text-muted-foreground/70 border border-border rounded-lg bg-card transition-colors hover:text-foreground hover:border-primary/50"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="section-rhythm relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            style={{
              stroke: "hsl(var(--color-primary-foreground))",
              strokeWidth: 1,
              fill: "none",
            }}
            aria-hidden="true"
          >
            <path
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative container-rhythm text-center">
          <div className="max-w-2xl mx-auto">
            <span
              className="badge-earmark badge-earmark--secondary mb-4 inline-block"
              style={{
                borderColor: "hsl(var(--color-primary-foreground) / 0.3)",
                backgroundColor: "hsl(var(--color-primary-foreground) / 0.1)",
                color: "hsl(var(--color-primary-foreground))",
              }}
            >
              READY TO BEGIN
            </span>
            <h2 className="text-h1 text-primary-foreground mb-4">
              Ready to Book an Appointment?
            </h2>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Schedule your visit today and experience compassionate care from
              our dedicated medical team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointments">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary btn-coastline"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
