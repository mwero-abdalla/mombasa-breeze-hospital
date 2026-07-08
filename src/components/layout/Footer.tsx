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
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-2 text-xl font-bold">{siteConfig.name}</h3>
            <p className="mb-4 text-gray-400">{siteConfig.tagline}</p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <Hash className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-gray-400">
                  {siteConfig.location.address}, {siteConfig.location.city},{" "}
                  {siteConfig.location.county}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                <a
                  href={`tel:${siteConfig.phone.reception}`}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {siteConfig.phone.reception}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-gray-400">
                  {siteConfig.operatingHours}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Emergency Care</h3>
            <div className="rounded-lg border border-red-500/30 bg-red-600/20 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-400" />
                <span className="font-medium text-red-300">24/7 Emergency</span>
              </div>
              <a
                href={`tel:${siteConfig.phone.emergency}`}
                className="block text-2xl font-bold text-white transition-colors hover:text-red-300"
              >
                {siteConfig.phone.emergency}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-4 text-sm text-gray-500 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>KMPDC: {siteConfig.kmpdcRegistration}</span>
            {siteConfig.shaApproved && (
              <span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-600/20 px-2 py-1 text-xs text-green-400">
                &#10003; SHA Approved
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
