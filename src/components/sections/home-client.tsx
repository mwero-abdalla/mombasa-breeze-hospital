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
import { Card, CardContent } from "@/components/ui/card";
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
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {isNumeric ? count : value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function CounterSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-rhythm">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-16 md:py-24">
      <div className="container-rhythm">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
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
                    <Card className="p-8 md:p-12 card-floating">
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-center text-lg md:text-xl italic text-muted-foreground mb-6">
                        &ldquo;{t.content}&rdquo;
                      </blockquote>
                      <div className="text-center">
                        <p className="font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === active ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))
                }
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
