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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 320, x: "5%", y: "8%" },
            { size: 200, x: "82%", y: "12%" },
            { size: 160, x: "72%", y: "68%" },
            { size: 260, x: "12%", y: "78%" },
            { size: 120, x: "88%", y: "48%" },
            { size: 180, x: "45%", y: "88%" },
          ].map((s, i) => (
            <div
              key={s.size + s.x}
              className="absolute rounded-full bg-white/[0.04] animate-float"
              style={{
                width: s.size,
                height: s.size,
                left: s.x,
                top: s.y,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              SINCE 2020
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-xl">
              {siteConfig.name} is a Level 4 private hospital dedicated to
              providing quality, compassionate, and affordable healthcare to the
              people of Mombasa and the greater Coastal region.
            </p>
          </div>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0 h-6" />
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              OUR PURPOSE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why We Exist
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every decision we make is guided by our mission and vision —
              principles that define our commitment to you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 md:p-10 card-hover border-t-4 border-t-primary/20">
              <div className="w-14 h-14 rounded-2xl bg-ocean-light flex items-center justify-center mb-6">
                <Goal className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl mb-3">Our Mission</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                To provide compassionate, affordable, and high-quality secondary
                healthcare services to the people of Mombasa and beyond. We are
                committed to improving the health and well-being of our
                community through excellence in clinical care, patient safety,
                and continuous innovation.
              </CardDescription>
            </Card>
            <Card className="p-8 md:p-10 card-hover border-t-4 border-t-secondary/20">
              <div className="w-14 h-14 rounded-2xl bg-teal-light flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-secondary" />
              </div>
              <CardTitle className="text-xl mb-3">Our Vision</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                To be the preferred healthcare provider in the Coastal region of
                Kenya, recognized for our commitment to quality, compassion, and
                patient-centered care. We aspire to set the standard for private
                secondary care in Kenya.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              OUR VALUES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values shape our culture and define how we care for our
              patients, each other, and our community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="p-6 card-hover bg-white/80 backdrop-blur-sm border border-border/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2 text-base">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              OUR STORY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a vision to reality — key milestones in our growth as a
              trusted healthcare provider in Mombasa.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-10 md:pl-12">
              <div className="absolute left-[17px] md:left-[21px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30" />
              <div className="space-y-12">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative">
                    <div className="absolute -left-10 md:-left-12 top-1 w-8 h-8 rounded-full bg-white border-2 border-primary shadow-sm shadow-primary/20 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <Badge
                      variant="outline"
                      className="mb-2 border-primary/20 text-primary text-xs font-semibold"
                    >
                      {milestone.year}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Patient Care Commitment ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                PATIENT CARE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Our Commitment to Patient Care
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
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
                      <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground pt-1">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-rose/5 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white rounded-2xl p-8 md:p-10 shadow-xl shadow-primary/20">
                <Heart className="h-12 w-12 mb-5 text-rose-300" />
                <h3 className="text-xl font-bold mb-3">
                  Patient-Centered Approach
                </h3>
                <p className="text-blue-100/90 leading-relaxed">
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
      </section>

      {/* ── Community Impact ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              COMMUNITY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to serve the Mombasa community and are committed to
              making a positive impact beyond our hospital walls.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="p-6 card-hover border-t-4 border-t-primary/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.description}
                  </CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 240, x: "80%", y: "10%" },
            { size: 160, x: "10%", y: "70%" },
            { size: 120, x: "50%", y: "90%" },
          ].map((s, i) => (
            <div
              key={s.size + s.x}
              className="absolute rounded-full bg-white/[0.04] animate-float"
              style={{
                width: s.size,
                height: s.size,
                left: s.x,
                top: s.y,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${4 + i * 0.8}s`,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-blue-100/90 mb-8 max-w-xl mx-auto">
            Explore our services or book an appointment to experience quality
            healthcare with compassion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 cursor-pointer font-semibold shadow-lg shadow-black/10"
              >
                View Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 cursor-pointer font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
