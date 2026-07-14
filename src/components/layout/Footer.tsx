"use client";

import {
  Camera,
  Clock,
  Hash,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Play,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { CoastlinePulse } from "@/components/ui/coastline-pulse";
import { navigation, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-primary-foreground"
      style={{ backgroundColor: "hsl(var(--mangrove-charcoal))" }}
    >
      {/* Coastline divider at top */}
      <CoastlinePulse
        color="hsl(var(--color-coastline-muted))"
        strokeWidth={1.5}
        className="w-full h-4 md:h-6 -mt-px"
        fill="none"
      />

      <div className="container-rhythm">
        <div className="section-rhythm grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label="Mombasa Breeze Hospital - Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-foreground text-xs font-bold tracking-wide text-primary shadow-sm shadow-primary-foreground/20">
                MB
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold tracking-[0.24em] text-primary-foreground">
                  MOMBASA BREEZE
                </span>
                <span className="text-[10px] font-medium tracking-[0.34em] text-primary-foreground/70">
                  HOSPITAL
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/72">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: MessageSquare,
                  href: siteConfig.social.facebook,
                  label: "Facebook",
                },
                {
                  icon: Hash,
                  href: siteConfig.social.twitter,
                  label: "Twitter",
                },
                {
                  icon: Camera,
                  href: siteConfig.social.instagram,
                  label: "Instagram",
                },
                {
                  icon: Play,
                  href: siteConfig.social.youtube,
                  label: "YouTube",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/15",
                    "bg-primary-foreground/10 text-primary-foreground/70",
                    "transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground",
                  )}
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-1 space-y-4" aria-label="Quick Links">
            <h3
              id="quick-links-heading"
              className="text-sm font-semibold tracking-wider uppercase text-primary-foreground"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/72 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address
            className="lg:col-span-1 space-y-6 not-italic"
            aria-label="Contact Information"
          >
            <h3 className="text-sm font-semibold tracking-wider uppercase text-primary-foreground">
              Contact
            </h3>

            <div className="flex items-start gap-3">
              <MapPin
                className="size-4 mt-0.5 flex-shrink-0 text-primary-foreground/80"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-primary-foreground">
                  {siteConfig.location.address}
                </p>
                <p className="text-sm text-primary-foreground/72">
                  {siteConfig.location.landmark}
                </p>
                <p className="text-sm text-primary-foreground/72">
                  {siteConfig.location.city}, {siteConfig.location.county}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone
                className="size-4 mt-0.5 flex-shrink-0 text-primary-foreground/80"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-primary-foreground">
                  <a
                    href={`tel:${siteConfig.phone.reception.replace(/\s/g, "")}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {siteConfig.phone.reception}
                  </a>
                </p>
                <p className="text-sm text-primary-foreground/72">
                  <a
                    href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Emergency: {siteConfig.phone.emergency}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail
                className="size-4 mt-0.5 flex-shrink-0 text-primary-foreground/80"
                aria-hidden="true"
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-primary-foreground/72 hover:text-primary-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                className="size-4 mt-0.5 flex-shrink-0 text-primary-foreground/80"
                aria-hidden="true"
              />
              <p className="text-sm text-primary-foreground/72">
                {siteConfig.operatingHours}
              </p>
            </div>
          </address>

          <section
            className="lg:col-span-1 space-y-6"
            aria-labelledby="emergency-heading"
          >
            <h3
              id="emergency-heading"
              className="text-sm font-semibold tracking-wider uppercase text-primary-foreground"
            >
              Emergency
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg",
                  "bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground",
                  "shadow-sm shadow-secondary/30 transition-all",
                  "hover:bg-secondary/90 hover:shadow-secondary/40",
                )}
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>{siteConfig.phone.emergency}</span>
              </a>

              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider uppercase text-primary-foreground/60">
                  24/7 Emergency Care
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-coral-reef animate-pulse-coral" />
                    <span className="relative block h-full w-full rounded-full bg-coral-reef" />
                  </span>
                  <span className="text-sm text-primary-foreground/72">
                    Always Available
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/30 space-y-2">
                <div className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1">
                  <ShieldCheck
                    className="size-3 text-primary-foreground"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold tracking-wider text-primary-foreground">
                      KMPDC Registered
                    </span>
                    <span className="text-xs text-primary-foreground/72">
                      {siteConfig.kmpdcRegistration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1">
                  <Heart className="size-3 text-secondary" aria-hidden="true" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold tracking-wider text-secondary">
                      SHA Approved
                    </span>
                    <span className="text-xs text-primary-foreground/72">
                      Social Health Authority
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="border-t border-border/30">
          <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <p className="text-sm text-primary-foreground/72">
              &copy; {currentYear} Mombasa Breeze Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/72">
              <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground">
                Level 4 Hospital
              </span>
              <span className="hidden sm:inline">|</span>
              <span>KMPDC Registered & SHA Approved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
