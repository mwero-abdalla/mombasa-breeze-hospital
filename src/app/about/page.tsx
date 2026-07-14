"use client";

import {
  Clock,
  Goal,
  Heart,
  HeartHandshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/data";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every patient with empathy, kindness, and respect, recognizing the unique needs of each individual we serve.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our interactions, ensuring transparency, honesty, and accountability.",
  },
  {
    icon: Goal,
    title: "Excellence",
    description:
      "We strive for the highest quality in every aspect of care, continuously improving through education, innovation, and best practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern medical technology and evidence-based practices to deliver effective and efficient healthcare solutions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are deeply rooted in our community and committed to improving the health and well-being of the people of Mombasa.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "We place patients at the heart of everything we do, tailoring care plans to meet individual needs and preferences.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "Mombasa Breeze Hospital was founded with a vision to provide quality private secondary care to the people of Mombasa and the greater Coastal region.",
  },
  {
    year: "2021",
    title: "Opening & Operations",
    description:
      "The hospital opened its doors in the heart of Mombasa's CBD on Ronald Ngala Road, beginning with outpatient consultations, a pharmacy, and a minor surgery theatre.",
  },
  {
    year: "2022",
    title: "Expansion of Services",
    description:
      "We expanded our services to include a fully equipped maternity wing, pediatric department, radiology and imaging services, and a 24-hour emergency department.",
  },
  {
    year: "2023",
    title: "Capacity Growth",
    description:
      "Our inpatient capacity grew to 53 beds, and we added specialized departments including orthopedics, dental services, physiotherapy, and nutrition counseling.",
  },
  {
    year: "2024",
    title: "KMPDC Registration",
    description:
      "We received full registration with the Kenya Medical Practitioners and Dentists Council (KMPDC), affirming our commitment to regulatory compliance and quality standards.",
  },
  {
    year: "2025",
    title: "SHA Approval",
    description:
      "Mombasa Breeze Hospital was approved as a healthcare provider under Kenya's Social Health Authority (SHA), making quality healthcare more accessible to all.",
  },
];

const commitments = [
  {
    icon: Stethoscope,
    text: "Personalized treatment plans tailored to each patient's unique needs",
  },
  {
    icon: Clock,
    text: "24/7 access to emergency care with rapid response times",
  },
  {
    icon: HeartHandshake,
    text: "Compassionate care from our dedicated team of healthcare professionals",
  },
  {
    icon: ShieldCheck,
    text: "Strict adherence to safety protocols and infection prevention standards",
  },
  {
    icon: MapPin,
    text: "Convenient CBD location accessible from all parts of Mombasa",
  },
];

const communityItems = [
  {
    icon: Heart,
    title: "Health Screenings",
    description:
      "We organize regular free health screening camps for blood pressure, diabetes, and other common conditions in partnership with community organizations.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "Our team participates in community health education programs, visiting schools, workplaces, and community centers to promote wellness.",
  },
  {
    icon: Clock,
    title: "Accessible Care",
    description:
      "With 24/7 operations and SHA approval, we ensure that quality healthcare remains accessible and affordable for all members of our community.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-primary">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/about-scene.svg')] bg-cover bg-center opacity-20"
        />
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            style={{
              stroke: "hsl(var(--color-primary-foreground))",
              strokeWidth: 1,
              fill: "none",
            }}
            aria-hidden="true"
          >
            <path
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative container-rhythm py-24 md:py-36">
          <div className="max-w-2xl">
            <span
              className="badge-earmark inline-block mb-4"
              style={{
                borderColor: "hsl(var(--color-primary-foreground) / 0.3)",
                backgroundColor: "hsl(var(--color-primary-foreground) / 0.1)",
                color: "hsl(var(--color-primary-foreground))",
              }}
            >
              SINCE 2020
            </span>
            <h1 className="text-display text-primary-foreground mb-6 text-balance">
              About Us
            </h1>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-xl">
              {siteConfig.name} is a Level 4 private hospital dedicated to
              providing quality, compassionate, and affordable healthcare to the
              people of Mombasa and the greater Coastal region.
            </p>
          </div>
        </div>
        {/* Coastline divider at bottom */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path coastline-path--accent"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-rhythm bg-background">
        <div className="container-rhythm">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              OUR PURPOSE
            </span>
            <h2 className="text-h1 text-foreground mb-4">Why We Exist</h2>
            <p className="text-body text-muted-foreground">
              Every decision we make is guided by our mission and vision —
              principles that define our commitment to you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="coastline" className="p-8 md:p-10">
              <CardContent className="p-0">
                <div className="icon-wrapper icon-wrapper--primary mb-6">
                  <Goal className="h-7 w-7" />
                </div>
                <CardTitle className="text-h3 mb-3">Our Mission</CardTitle>
                <CardDescription className="text-body leading-relaxed">
                  To provide compassionate, affordable, and high-quality
                  secondary healthcare services to the people of Mombasa and
                  beyond. We are committed to improving the health and
                  well-being of our community through excellence in clinical
                  care, patient safety, and continuous innovation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card variant="coastline" className="p-8 md:p-10">
              <CardContent className="p-0">
                <div className="icon-wrapper icon-wrapper--secondary mb-6">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <CardTitle className="text-h3 mb-3">Our Vision</CardTitle>
                <CardDescription className="text-body leading-relaxed">
                  To be the preferred healthcare provider in the Coastal region
                  of Kenya, recognized for our commitment to quality,
                  compassion, and patient-centered care. We aspire to set the
                  standard for private secondary care in Kenya.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-rhythm bg-muted">
        <div className="container-rhythm">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              OUR VALUES
            </span>
            <h2 className="text-h1 text-foreground mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-body text-muted-foreground">
              These core values shape our culture and define how we care for our
              patients, each other, and our community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} variant="coastline" className="p-6">
                  <CardContent className="p-0">
                    <div className="icon-wrapper icon-wrapper--primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mb-2 text-body">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-body-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="section-rhythm bg-background">
        <div className="container-rhythm">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              OUR STORY
            </span>
            <h2 className="text-h1 text-foreground mb-4">Our Journey</h2>
            <p className="text-body text-muted-foreground">
              From a vision to reality — key milestones in our growth as a
              trusted healthcare provider in Mombasa.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 md:pl-12">
              <div
                className="absolute left-[17px] md:left-[21px] top-2 bottom-2 w-0.5"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(var(--color-primary) / 0.3), hsl(var(--color-secondary) / 0.3), hsl(var(--color-primary) / 0.3))",
                }}
              />
              <div className="space-y-12">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative">
                    <div className="absolute -left-10 md:-left-12 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary shadow-sm shadow-primary/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <span className="badge-earmark badge-earmark--primary mb-2 border-primary/20 text-xs font-semibold inline-block">
                      {milestone.year}
                    </span>
                    <h3 className="text-h3 font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Patient Care Commitment ── */}
      <section className="section-rhythm bg-muted">
        <div className="container-rhythm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
                PATIENT CARE
              </span>
              <h2 className="text-h1 text-foreground mb-4 text-balance">
                Our Commitment to Patient Care
              </h2>
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                At {siteConfig.name}, we believe that quality healthcare goes
                beyond medical treatment. We are committed to providing a safe,
                comfortable, and supportive environment for every patient who
                walks through our doors.
              </p>
              <ul className="space-y-5">
                {commitments.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-body text-muted-foreground pt-1">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl blur-2xl" />
              <div className="relative bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 shadow-xl shadow-primary/20">
                <Heart className="h-12 w-12 mb-5 text-secondary/80" />
                <h3 className="text-h3 font-bold mb-3">
                  Patient-Centered Approach
                </h3>
                <p className="text-body text-primary-foreground/90 leading-relaxed">
                  We involve patients and their families in every step of the
                  care journey, from diagnosis to treatment and recovery. Our
                  team takes the time to listen, explain, and address any
                  concerns, ensuring you feel informed, respected, and empowered
                  throughout your healthcare experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Community Impact ── */}
      <section className="section-rhythm bg-background">
        <div className="container-rhythm">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="badge-earmark badge-earmark--muted mb-4 inline-block">
              COMMUNITY
            </span>
            <h2 className="text-h1 text-foreground mb-4">Community Impact</h2>
            <p className="text-body text-muted-foreground">
              We are proud to serve the Mombasa community and are committed to
              making a positive impact beyond our hospital walls.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} variant="coastline" className="p-6">
                  <CardContent className="p-0">
                    <div className="icon-wrapper icon-wrapper--primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Coastline divider */}
        <div className="container-rhythm coastline-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="coastline-path"
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
            />
          </svg>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section-rhythm relative overflow-hidden bg-primary">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            style={{
              stroke: "hsl(var(--color-primary-foreground))",
              strokeWidth: 1,
              fill: "none",
            }}
            aria-hidden="true"
          >
            <path
              d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative container-rhythm text-center">
          <div className="max-w-3xl mx-auto">
            <span
              className="badge-earmark inline-block mb-4"
              style={{
                borderColor: "hsl(var(--color-primary-foreground) / 0.3)",
                backgroundColor: "hsl(var(--color-primary-foreground) / 0.1)",
                color: "hsl(var(--color-primary-foreground))",
              }}
            >
              READY TO BEGIN
            </span>
            <h2 className="text-h1 text-primary-foreground mb-4">
              Want to Learn More?
            </h2>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Explore our services or book an appointment to experience quality
              healthcare with compassion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary cursor-pointer font-semibold btn-coastline"
                >
                  View Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 cursor-pointer font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
