"use client";

import { animate, useInView } from "framer-motion";
import {
  Ambulance,
  Baby,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  HeartPulse,
  ShieldCheck,
  Star,
  Tent,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { stats, testimonials } from "@/lib/data";

const statsIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Ambulance,
  BedDouble,
  Baby,
  HeartPulse,
  Tent,
  ShieldCheck,
  FileCheck,
};

function Counter({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const num = Number(value);
  const isNumeric = !Number.isNaN(num) && String(num) === value;

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const controls = animate(0, num, {
      duration: 2,
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return controls.stop;
  }, [isInView, isNumeric, num]);

  const Icon = statsIconMap[icon];

  return (
    <div ref={ref} className="text-center">
      {Icon && <Icon className="mx-auto mb-2 h-8 w-8 text-primary" />}
      <div className="stat-value font-display font-bold">
        {isNumeric ? count : value}
      </div>
      <div className="mt-1 text-body-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function CounterSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-rhythm">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7 lg:gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
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
  );
}

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const _t = testimonials[active];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-rhythm">
        <div className="mx-auto max-w-5xl px-0 sm:px-4">
          <div className="text-center mb-12">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              PATIENT STORIES
            </span>
            <h2 className="text-h1 text-foreground">What Our Patients Say</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto mt-4">
              Hear from our patients about their experience at Mombasa Breeze
              Hospital.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="w-full flex-shrink-0 px-4">
                    <Card className="p-8 md:p-12 card-coastline bg-card border border-border/50">
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={`star-${t.name}-${i}`}
                            className="h-5 w-5 fill-secondary text-secondary"
                          />
                        ))}
                      </div>
                      <blockquote className="text-center text-body md:text-body-lg italic text-muted-foreground mb-6">
                        &ldquo;{t.content}&rdquo;
                      </blockquote>
                      <div className="text-center">
                        <p className="font-semibold text-foreground text-body">
                          {t.name}
                        </p>
                        <p className="text-body-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))
                }
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {testimonials.map((t) => (
                  <button
                    key={`dot-${t.name}`}
                    type="button"
                    className={`h-2 w-2 rounded-full transition-colors ${
                      t.name === testimonials[active].name
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setActive(testimonials.indexOf(t))}
                    aria-label={`Go to testimonial by ${t.name}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))
                }
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
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
      </div>
    </section>
  );
}
