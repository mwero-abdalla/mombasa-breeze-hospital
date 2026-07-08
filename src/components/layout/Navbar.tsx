"use client";

import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
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
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className={cn(
          "border-b transition-[border-color] duration-300",
          scrolled ? "border-border/50" : "border-transparent",
        )}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.98)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.04)"
            : "0 0 0 0 transparent",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold tracking-wide text-primary-foreground shadow-sm shadow-primary/20">
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

          {/* Desktop Navigation */}
          <nav className="mx-auto hidden items-center gap-1 lg:flex">
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
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Emergency Contact Pill */}
            <motion.a
              href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
              className="hidden items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 lg:inline-flex"
              animate={{ opacity: [1, 0.75, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Phone className="size-3" />
              <span>{siteConfig.phone.emergency}</span>
            </motion.a>

            {/* Book Appointment CTA */}
            <Link
              href="/appointments"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "hidden lg:inline-flex",
              )}
            >
              Book Appointment
            </Link>

            {/* Mobile Menu (Sheet) */}
            <Sheet>
              <SheetTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 p-4">
                  {/* Sheet Logo */}
                  <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold tracking-wide text-primary-foreground shadow-sm shadow-primary/20">
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

                  {/* Emergency Contact in Sheet */}
                  <a
                    href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-primary"
                  >
                    <Phone className="size-4" />
                    {siteConfig.phone.emergency}
                  </a>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-1">
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

                  {/* Mobile CTA */}
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
      </motion.div>
    </header>
  );
}
