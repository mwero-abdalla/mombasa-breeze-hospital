"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05 + 0.1,
      duration: 0.3,
      ease: "easeOut" as const,
    },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.5]);
  const boxShadow = useTransform(scrollY, [0, 100], [0, 4]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.header
        className={cn(
          "border-b transition-[border-color,background-color,box-shadow] duration-300",
          "bg-background/95 backdrop-blur-sm border-border/50 shadow-sm",
        )}
        style={{
          backgroundColor: backgroundOpacity,
          backdropFilter: `blur(${backdropBlur}px)`,
          borderColor: `hsl(var(--border) / ${borderOpacity})`,
          boxShadow: `0 1px ${boxShadow}px 0 rgb(0 0 0 / 0.05)`,
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Left: Monogram + Name */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Mombasa Breeze Hospital Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-bold tracking-wide shadow-sm shadow-primary/20">
              MB
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold tracking-wider text-foreground">
                MOMBASA BREEZE
              </span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground/60">
                HOSPITAL
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav
            className="mx-auto hidden items-center gap-1 lg:flex"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                    "hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right: Emergency Pill + CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Emergency Pill - Desktop */}
            <motion.a
              href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
              className={cn(
                "hidden items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 lg:inline-flex",
              )}
              animate={{
                opacity: [1, 0.7, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                },
              }}
              aria-label={`Call emergency: ${siteConfig.phone.emergency}`}
            >
              <Phone className="size-3" aria-hidden="true" />
              <span>{siteConfig.phone.emergency}</span>
            </motion.a>

            {/* Book Appointment CTA - Desktop */}
            <Link
              href="/appointments"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "hidden lg:inline-flex",
              )}
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger>
                <button
                  className={cn(
                    "lg:hidden inline-flex items-center justify-center rounded-lg size-8 hover:bg-muted transition-colors",
                    scrolled && "bg-muted/50",
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <div className="flex flex-col gap-6 p-4">
                  {/* Mobile Logo */}
                  <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground text-sm font-bold tracking-wide shadow-sm shadow-primary/20">
                      MB
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-bold tracking-wider text-foreground">
                        MOMBASA BREEZE
                      </span>
                      <span className="text-[10px] font-medium tracking-widest text-muted-foreground/60">
                        HOSPITAL
                      </span>
                    </div>
                  </Link>

                  {/* Mobile Emergency Pill */}
                  <a
                    href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
                    aria-label={`Call emergency: ${siteConfig.phone.emergency}`}
                  >
                    <Phone className="size-3.5" aria-hidden="true" />
                    {siteConfig.phone.emergency}
                  </a>

                  {/* Mobile Navigation */}
                  <nav
                    className="flex flex-col gap-1"
                    role="navigation"
                    aria-label="Mobile navigation"
                  >
                    {navigation.map((link) => (
                      <SheetClose key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Mobile Book Appointment CTA */}
                  <SheetClose>
                    <Link
                      href="/appointments"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full",
                      )}
                    >
                      Book Appointment
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </header>
  );
}
