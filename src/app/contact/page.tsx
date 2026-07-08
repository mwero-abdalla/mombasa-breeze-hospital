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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re here to help &mdash; reach out to us
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50 ring-1 ring-foreground/5">
                <div className="shrink-0 rounded-lg bg-primary/10 p-3 h-fit">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Physical Address</h3>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location.address}, {siteConfig.location.city}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location.landmark}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.location.subCounty},{" "}
                    {siteConfig.location.county}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-muted/50 ring-1 ring-foreground/5">
                <div className="shrink-0 rounded-lg bg-primary/10 p-3 h-fit">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Numbers</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Emergency:</span>{" "}
                    {siteConfig.phone.emergency}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Reception:</span>{" "}
                    {siteConfig.phone.reception}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Appointments:</span>{" "}
                    {siteConfig.phone.appointments}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Ambulance:</span>{" "}
                    {siteConfig.phone.ambulance}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-muted/50 ring-1 ring-foreground/5">
                <div className="shrink-0 rounded-lg bg-primary/10 p-3 h-fit">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-muted/50 ring-1 ring-foreground/5">
                <div className="shrink-0 rounded-lg bg-primary/10 p-3 h-fit">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Operating Hours</h3>
                  <p className="text-sm text-muted-foreground font-medium text-foreground">
                    {siteConfig.operatingHours}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We are open 24/7, including public holidays
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="relative h-80 rounded-xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary/60 mx-auto mb-4" />
              <p className="text-2xl font-semibold text-muted-foreground">
                Map View
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {siteConfig.location.address}, {siteConfig.location.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Car className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Parking Information</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ample parking space available for patients and visitors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-muted/50 ring-1 ring-foreground/5 text-center">
              <h3 className="font-semibold mb-2">Patient Parking</h3>
              <p className="text-sm text-muted-foreground">
                Designated parking spots near the main entrance for patients.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50 ring-1 ring-foreground/5 text-center">
              <h3 className="font-semibold mb-2">Visitor Parking</h3>
              <p className="text-sm text-muted-foreground">
                Convenient visitor parking area with 24/7 security.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50 ring-1 ring-foreground/5 text-center">
              <h3 className="font-semibold mb-2">Accessible Parking</h3>
              <p className="text-sm text-muted-foreground">
                Wheelchair-accessible parking spaces available near all
                entrances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Payment Options</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer flexible payment methods for your convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background ring-1 ring-foreground/5 text-center">
              <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">M-Pesa</h3>
              <p className="text-sm text-muted-foreground">
                Pay conveniently using M-Pesa mobile money. Till number
                available at reception.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background ring-1 ring-foreground/5 text-center">
              <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Card Payments</h3>
              <p className="text-sm text-muted-foreground">
                We accept Visa, Mastercard, and other major credit and debit
                cards.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background ring-1 ring-foreground/5 text-center">
              <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                <Radio className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">NFC &amp; Mobile Wallet</h3>
              <p className="text-sm text-muted-foreground">
                Tap to pay using NFC-enabled cards or mobile wallets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <Accessibility className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-3xl font-bold mb-4">Accessibility</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our facility is designed to be accessible to everyone, ensuring
              all patients and visitors can navigate with ease and dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accessibilityItems.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-lg bg-muted/50 ring-1 ring-foreground/5 text-center"
              >
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
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
