"use client";

import { motion } from "framer-motion";
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
          "border-b border-border/60 transition-all duration-300",
          scrolled
            ? "bg-background/92 shadow-[0_18px_35px_-28px_rgba(9,35,37,0.45)] backdrop-blur-xl"
            : "bg-background/76 backdrop-blur-md",
        )}
      >
        <div className="container-rhythm flex h-16 items-center gap-3 py-3 sm:gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Mombasa Breeze Hospital Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-sm font-bold tracking-wide shadow-sm shadow-primary/20">
              MB
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold tracking-[0.24em] text-foreground">
                MOMBASA BREEZE
              </span>
              <span className="text-[10px] font-medium tracking-[0.34em] text-muted-foreground/70">
                HOSPITAL
              </span>
            </div>
          </Link>

          <nav
            className="mx-auto hidden items-center gap-1 lg:flex"
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
                    "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                    "hover:bg-primary/10 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
              className={cn(
                "hidden items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary transition-colors hover:bg-secondary/15 lg:inline-flex",
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

            <Link
              href="/appointments"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "hidden rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90 lg:inline-flex",
              )}
            >
              Book Appointment
            </Link>

            <Sheet>
              <SheetTrigger
                className={cn(
                  "lg:hidden inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/80 transition-colors hover:bg-muted",
                  scrolled && "bg-background shadow-sm",
                )}
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm border-border/60 bg-background p-0"
              >
                <div className="flex flex-col gap-6 p-5 sm:p-6">
                  <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-sm font-bold tracking-wide shadow-sm shadow-primary/20">
                      MB
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-bold tracking-[0.24em] text-foreground">
                        MOMBASA BREEZE
                      </span>
                      <span className="text-[10px] font-medium tracking-[0.34em] text-muted-foreground/70">
                        HOSPITAL
                      </span>
                    </div>
                  </Link>

                  <a
                    href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-2 text-xs font-semibold text-secondary transition-colors hover:bg-secondary/15"
                    aria-label={`Call emergency: ${siteConfig.phone.emergency}`}
                  >
                    <Phone className="size-3.5" aria-hidden="true" />
                    {siteConfig.phone.emergency}
                  </a>

                  <nav
                    className="flex flex-col gap-1"
                    aria-label="Mobile navigation"
                  >
                    {navigation.map((link) => (
                      <SheetClose key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <SheetClose>
                    <Link
                      href="/appointments"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90",
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
