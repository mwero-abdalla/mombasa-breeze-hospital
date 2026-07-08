import {
  Accessibility,
  Car,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Radio,
  Smartphone,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { ContactForm } from "./contact-form";

const contactInfo = [
  {
    icon: MapPin,
    title: "Physical Address",
    lines: [
      `${siteConfig.location.address}, ${siteConfig.location.city}`,
      siteConfig.location.landmark,
      `${siteConfig.location.subCounty}, ${siteConfig.location.county}`,
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: [
      `Emergency: ${siteConfig.phone.emergency}`,
      `Reception: ${siteConfig.phone.reception}`,
      `Appointments: ${siteConfig.phone.appointments}`,
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [siteConfig.email],
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: [
      siteConfig.operatingHours,
      "We are open 24/7, including public holidays",
    ],
  },
];

const accessibilityItems = [
  {
    title: "Wheelchair Ramps",
    description:
      "Ramps at all entrances for easy wheelchair access to the facility.",
  },
  {
    title: "Accessible Washrooms",
    description:
      "Spacious washrooms designed for wheelchair users on every floor.",
  },
  {
    title: "Elevator Access",
    description:
      "Elevators to all floors with braille buttons and audio announcements.",
  },
  {
    title: "Staff Assistance",
    description:
      "Trained staff available to assist patients with mobility needs.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0B6BCB] via-[#0B6BCB] to-[#0D9488] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-blue-100 mb-6 border border-white/10">
            <MapPin className="h-3.5 w-3.5" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
            We&apos;re here to help &mdash; reach out to us anytime
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 p-5 rounded-2xl bg-white dark:bg-card ring-1 ring-foreground/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B6BCB]/10 to-[#0D9488]/10 text-[#0B6BCB] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B6BCB]/10 px-4 py-1.5 text-sm font-medium text-[#0B6BCB] mb-4">
              <MapPin className="h-3.5 w-3.5" />
              Find Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Location
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conveniently located in Mombasa&apos;s CBD, easily accessible from
              all parts of the city.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl bg-gradient-to-br from-[#0B6BCB]/5 via-[#0D9488]/5 to-[#F59E0B]/5 flex items-center justify-center overflow-hidden ring-1 ring-foreground/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,107,203,0.08),transparent_70%)]" />
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-[#0B6BCB] to-[#0D9488] text-white mb-5 animate-float">
                <MapPin className="h-8 w-8" />
              </div>
              <p className="text-xl font-semibold text-foreground">
                Mombasa Breeze Hospital
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {siteConfig.location.address}, {siteConfig.location.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0D9488]/10 px-4 py-1.5 text-sm font-medium text-[#0D9488] mb-4">
              <Car className="h-3.5 w-3.5" />
              Parking
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parking Information
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ample parking space available for patients and visitors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Patient Parking",
                desc: "Designated parking spots near the main entrance for patients.",
              },
              {
                title: "Visitor Parking",
                desc: "Convenient visitor parking area with 24/7 security.",
              },
              {
                title: "Accessible Parking",
                desc: "Wheelchair-accessible parking spaces available near all entrances.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white dark:bg-card p-6 ring-1 ring-foreground/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#0D9488]/10 to-[#0B6BCB]/10 text-[#0D9488] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B]/10 px-4 py-1.5 text-sm font-medium text-[#F59E0B] mb-4">
              <CreditCard className="h-3.5 w-3.5" />
              Payments
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Payment Options
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer flexible payment methods for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "M-Pesa",
                desc: "Pay conveniently using M-Pesa mobile money. Till number available at reception.",
              },
              {
                icon: CreditCard,
                title: "Card Payments",
                desc: "We accept Visa, Mastercard, and other major credit and debit cards.",
              },
              {
                icon: Radio,
                title: "NFC & Mobile Wallet",
                desc: "Tap to pay using NFC-enabled cards or mobile wallets.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-white dark:bg-card p-6 ring-1 ring-foreground/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
                >
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-[#E11D48]/10 text-[#F59E0B] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E11D48]/10 px-4 py-1.5 text-sm font-medium text-[#E11D48] mb-4">
              <Accessibility className="h-3.5 w-3.5" />
              Accessibility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Accessibility
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our facility is designed to be accessible to everyone, ensuring
              all patients and visitors can navigate with ease and dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {accessibilityItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-white dark:bg-card p-5 ring-1 ring-foreground/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[#E11D48]/10 to-[#F59E0B]/10 text-[#E11D48] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Accessibility className="h-5.5 w-5.5" />
                </div>
                <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
