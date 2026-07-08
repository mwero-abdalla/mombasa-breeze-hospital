import {
  Camera,
  Clock,
  Hash,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
} from "lucide-react";
import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-white">
      {/* Wave Divider */}
      <div className="absolute inset-x-0 -top-px h-8 overflow-hidden text-primary/15">
        <svg
          viewBox="0 0 1200 32"
          className="h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,16 Q150,32 300,16 T600,16 T900,16 T1200,16 L1200,32 L0,32 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold tracking-wide text-white shadow-sm shadow-primary/20">
                MB
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold tracking-wider text-white">
                  MOMBASA BREEZE
                </span>
                <span className="text-[10px] font-medium tracking-widest text-white/50">
                  HOSPITAL
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-2.5">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-primary/20 hover:text-primary"
                aria-label="Facebook"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-primary/20 hover:text-primary"
                aria-label="Twitter"
              >
                <Hash className="size-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-primary/20 hover:text-primary"
                aria-label="Instagram"
              >
                <Camera className="size-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-primary/20 hover:text-primary"
                aria-label="YouTube"
              >
                <Play className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-white/60">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-white/60">
              CONTACT
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm text-gray-400">
                  {siteConfig.location.address}, {siteConfig.location.city}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5 text-sm">
                  <a
                    href={`tel:${siteConfig.phone.reception.replace(/\s/g, "")}`}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {siteConfig.phone.reception} (Reception)
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.ambulance.replace(/\s/g, "")}`}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {siteConfig.phone.ambulance} (Ambulance)
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                  {siteConfig.emailAlt && (
                    <a
                      href={`mailto:${siteConfig.emailAlt}`}
                      className="text-gray-400 transition-colors hover:text-primary"
                    >
                      {siteConfig.emailAlt}
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm text-gray-400">
                  {siteConfig.operatingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Emergency Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-white/60">
              EMERGENCY
            </h3>
            <div className="rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/10 to-red-600/5 p-4">
              <div className="mb-1.5 flex items-center gap-2">
                <Heart className="size-4 text-red-400" />
                <span className="text-xs font-bold tracking-wider text-red-300">
                  24/7 EMERGENCY
                </span>
              </div>
              <a
                href={`tel:${siteConfig.phone.emergency.replace(/\s/g, "")}`}
                className="block text-xl font-bold tracking-tight text-white transition-colors hover:text-red-300"
              >
                {siteConfig.phone.emergency}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary/90">
                KMPDC Registered
              </span>
              {siteConfig.shaApproved && (
                <span className="inline-flex items-center gap-1 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-300">
                  SHA Approved
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>KMPDC: {siteConfig.kmpdcRegistration}</span>
            {siteConfig.shaApproved && (
              <>
                <span className="text-white/10">|</span>
                <span className="text-green-400">SHA Approved</span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
