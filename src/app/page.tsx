import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Ambulance,
  BadgeCheck,
  BadgeDollarSign,
  Clock,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Syringe,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import {
  CounterSection,
  TestimonialsCarousel,
} from "@/components/sections/home-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { insurancePartners, services, whyChooseUs } from "@/lib/data";

const whyChooseUsIconMap: Record<string, LucideIcon> = {
  UserCheck,
  Microscope,
  Clock,
  BadgeDollarSign,
  HeartHandshake,
  Accessibility,
  BadgeCheck,
  MapPin,
};

const serviceIconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Ambulance,
  HeartPulse,
  Microscope,
  Pill,
  Scan,
  Scalpel: Syringe,
};

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              24/7 Healthcare Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted Healthcare Partner in Mombasa
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Providing quality, compassionate, and affordable healthcare 24
              hours a day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointments">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 cursor-pointer"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/emergency">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 cursor-pointer"
                >
                  Emergency Contact
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 cursor-pointer"
                >
                  Find Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CounterSection />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional healthcare services to
              our community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = whyChooseUsIconMap[item.icon];
              return (
                <Card key={item.title} className="p-6">
                  {Icon && <Icon className="h-10 w-10 text-primary mb-4" />}
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon] || Stethoscope;
              return (
                <Card key={service.title} className="p-6 flex flex-col">
                  {Icon && <Icon className="h-10 w-10 text-primary mb-4" />}
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription className="flex-1 mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    href="/services"
                    className="text-primary font-medium text-sm hover:underline mt-auto inline-flex items-center gap-1"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with a wide range of insurance providers to make
              healthcare accessible.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {insurancePartners.map((partner) => (
              <div
                key={partner}
                className="p-4 rounded-lg bg-muted/50 text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book an Appointment?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Schedule your visit today and experience quality healthcare with
            compassion.
          </p>
          <Link href="/appointments">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 cursor-pointer"
            >
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
