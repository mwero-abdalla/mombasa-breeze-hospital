import Link from "next/link";
import { siteConfig, navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock, Heart, MessageSquare, Hash, Camera, Play } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-ocean text-deep-ocean-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-rhythm grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Mombasa Breeze Hospital - Home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-warm-sand text-xs font-bold tracking-wide text-deep-ocean shadow-sm shadow-warm-sand/20">
                MB
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold tracking-wider text-card-foreground">
                  MOMBASA BREEZE
                </span>
                <span className="text-[10px] font-medium tracking-widest text-muted-foreground/60">
                  HOSPITAL
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { icon: MessageSquare, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Hash, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: Camera, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Play, href: siteConfig.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-card/50 border border-border/50 text-muted-foreground/70 transition-colors hover:bg-warm-sand/20 hover:text-warm-sand"
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-card-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-warm-sand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-card-foreground">
              Contact
            </h3>
            <address className="mt-4 space-y-4 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-warm-sand/80" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {siteConfig.location.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location.landmark}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location.city}, {siteConfig.location.county}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 flex-shrink-0 text-warm-sand/80" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    <a href={`tel:${siteConfig.phone.reception.replace(/\s/g, "")}`} className="hover:text-warm-sand transition-colors">
                      {siteConfig.phone.reception}
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <a href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`} className="hover:text-warm-sand transition-colors">
                      Emergency: {siteConfig.phone.emergency}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 flex-shrink-0 text-warm-sand/80" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-warm-sand transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-4 mt-0.5 flex-shrink-0 text-warm-sand/80" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">{siteConfig.operatingHours}</p>
              </div>
            </address>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-card-foreground">
              Emergency
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-coral-pulse px-4 py-3 text-sm font-semibold text-coral-pulse-foreground shadow-sm shadow-coral-pulse/30 transition-all hover:bg-coral-pulse/90 hover:shadow-coral-pulse/40"
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>{siteConfig.phone.emergency}</span>
              </a>
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/60">
                  24/7 Emergency Care
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-coral-pulse animate-pulse-coral" />
                    <span className="relative block h-full w-full rounded-full bg-coral-pulse" />
                  </span>
                  <span className="text-sm text-muted-foreground">Always Available</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border/30 space-y-2">
                <div className="flex items-center gap-2 rounded-full border border-warm-sand/30 bg-warm-sand/10 px-3 py-1">
                  <span className="text-[10px] font-semibold tracking-wider text-warm-sand">
                    KMPDC
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {siteConfig.kmpdcRegistration}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-warm-sand/30 bg-warm-sand/10 px-3 py-1">
                  <Heart className="size-3 text-coral-pulse" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-wider text-coral-pulse">
                    SHA Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30">
          <div className="py-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Mombasa Breeze Hospital. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full border border-warm-sand/30 bg-warm-sand/10 text-warm-sand text-xs font-medium">
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