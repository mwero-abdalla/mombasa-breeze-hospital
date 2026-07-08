"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import {
  Ambulance,
  Baby,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  FileCheck,
  HeartPulse,
  type LucideIcon,
  ShieldCheck,
  Star,
  Tent,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { stats, testimonials } from "@/lib/data";

const statsIconMap: Record<string, LucideIcon> = {
  Ambulance,
  BedDouble,
  Baby,
  HeartPulse,
  Tent,
  ShieldCheck,
  FileCheck,
};

export function HeroDecorations() {
  const shapes = [
    { size: 320, x: "5%", y: "10%", delay: 0 },
    { size: 200, x: "80%", y: "15%", delay: 1.2 },
    { size: 160, x: "70%", y: "65%", delay: 0.6 },
    { size: 260, x: "15%", y: "75%", delay: 1.8 },
    { size: 120, x: "85%", y: "50%", delay: 0.3 },
    { size: 180, x: "40%", y: "85%", delay: 2.4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s) => (
        <motion.div
          key={`${s.x}-${s.y}`}
          className="absolute rounded-full bg-white/[0.04]"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
          }}
          animate={{
            y: [0, -24, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 5 + s.delay * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 opacity-[0.06]"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 64' fill='%23FFFFFF'%3E%3Cpath d='M0,32 C360,64 720,0 1080,32 C1260,48 1350,40 1440,32 L1440,64 L0,64 Z'/%3E%3C/svg%3E\") repeat-x bottom",
          backgroundSize: "1440px 64px",
        }}
      />
    </div>
  );
}

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
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const num = Number(value);
  const isNumeric = !Number.isNaN(num) && String(num) === value;

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const controls = animate(0, num, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return controls.stop;
  }, [isInView, isNumeric, num]);

  const Icon = statsIconMap[icon];

  return (
    <div ref={ref} className="text-center">
      {Icon && <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />}
      <div className="text-3xl font-bold text-primary">
        {isNumeric ? count : value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function CounterSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-ocean-light/50 to-white relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
  }),
};

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-light/30 to-white pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our patients about their experience at Mombasa Breeze
            Hospital.
          </p>
        </motion.div>

        <Card className="p-8 md:p-12 relative overflow-hidden border-teal-100/50 shadow-lg shadow-teal-500/5">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`${t.name}-${i}`}
                    className={`h-5 w-5 ${
                      i < t.rating
                        ? "fill-gold text-gold"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-center text-lg md:text-xl italic text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              <div className="text-center">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
