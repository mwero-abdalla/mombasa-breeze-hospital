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

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Learn about our commitment to quality healthcare
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to {siteConfig.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Goal className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="text-xl mb-3">Our Mission</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                To provide compassionate, affordable, and high-quality secondary
                healthcare services to the people of Mombasa and beyond. We are
                committed to improving the health and well-being of our
                community through excellence in clinical care, patient safety,
                and continuous innovation.
              </CardDescription>
            </Card>
            <Card className="p-8">
              <Lightbulb className="h-10 w-10 text-primary mb-4" />
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at {siteConfig.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="mb-2">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our founding to becoming a trusted healthcare provider in
              Mombasa.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}
                  >
                    <span className="text-sm font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our Commitment to Patient Care
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At {siteConfig.name}, we believe that quality healthcare goes
                beyond medical treatment. We are committed to providing a safe,
                comfortable, and supportive environment for every patient who
                walks through our doors.
              </p>
              <ul className="space-y-4">
                {[
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
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white rounded-xl p-8">
              <Heart className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Patient-Centered Approach
              </h3>
              <p className="text-blue-100 leading-relaxed">
                We involve patients and their families in every step of the care
                journey, from diagnosis to treatment and recovery. Our team
                takes the time to listen, explain, and address any concerns,
                ensuring you feel informed, respected, and empowered throughout
                your healthcare experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to serve the Mombasa community and are committed to
              making a positive impact beyond our hospital walls.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Explore our services or book an appointment to experience quality
            healthcare with compassion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 font-medium transition-colors"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white text-white hover:bg-white/10 px-6 py-3 font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
