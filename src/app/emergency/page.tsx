import {
  AlertTriangle,
  Ambulance,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/lib/data";

const steps = [
  {
    step: 1,
    title: "Stay Calm",
    description:
      "Take a deep breath. Panicking worsens the situation. Focus on what you can control and prepare to assist the person in need.",
  },
  {
    step: 2,
    title: "Call for Help",
    description:
      "Dial our emergency number immediately. Clearly state your location, what happened, and the number of people injured.",
  },
  {
    step: 3,
    title: "Share Details",
    description:
      "Tell the dispatcher the patient's age, gender, symptoms, known conditions, allergies, and any medications they are taking.",
  },
  {
    step: 4,
    title: "Follow Guidance",
    description:
      "Stay on the line and follow the dispatcher's instructions. They may guide you through first aid or CPR while help is on the way.",
  },
  {
    step: 5,
    title: "Prepare the Area",
    description:
      "Unlock doors, clear pathways, gather medical records and insurance cards, and have someone meet the medical team at the entrance.",
  },
  {
    step: 6,
    title: "Wait for Paramedics",
    description:
      "Do not self-transport unless instructed. Emergency vehicles carry life-support equipment and trained staff who can provide care en route.",
  },
];

const whatToBring = [
  "Valid government-issued ID (National ID, Passport, or Driver's License)",
  "Insurance / SHA membership card",
  "List of current medications and dosages",
  "Known allergies (medications, foods, latex, etc.)",
  "Relevant medical records or referral letters",
  "Emergency contact name and phone number",
  "Mobile phone and charger",
  "Personal items (glasses, hearing aids, dentures)",
  "Cash or M-Pesa for any non-covered services",
  "Comfort items for children (blanket, toy, snack)",
];

const whenToVisit = [
  "Chest pain or pressure, especially with shortness of breath",
  "Difficulty breathing or severe asthma attack",
  "Severe bleeding that will not stop with direct pressure",
  "Head injury with loss of consciousness or confusion",
  "Sudden severe headache, vision changes, or slurred speech",
  "Severe burns, electrical shock, or chemical exposure",
  "Broken bones, dislocated joints, or deep wounds",
  "Allergic reaction with swelling of face, lips, or throat",
  "Seizures or convulsions lasting more than two minutes",
  "Severe abdominal pain or vomiting blood",
  "High fever unresponsive to medication",
  "Poisoning or suspected overdose",
  "Suspected stroke — facial drooping, arm weakness, speech difficulty",
  "Suicidal thoughts or self-harm behaviour",
  "Severe dehydration or inability to keep fluids down",
];

export default function EmergencyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-rose-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <Badge
            variant="destructive"
            className="mb-4 border-red-300/40 text-red-100 text-xs tracking-wider uppercase"
          >
            24/7 Emergency Care
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Emergency Services
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
            Immediate care when you need it most &mdash; 24 hours a day, 365
            days a year.
          </p>
        </div>
      </section>

      {/* ── Emergency Phone + Ambulance / Directions ── */}
      <section className="relative -mt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Phone Card */}
          <Card className="relative border-red-200 bg-white shadow-xl shadow-red-900/10 overflow-hidden mb-10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white pointer-events-none" />
            <CardContent className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose text-white mb-5 animate-pulse-urgent shadow-lg shadow-rose/30">
                <Phone className="h-8 w-8" />
              </div>
              <p className="text-xs font-semibold text-rose uppercase tracking-widest mb-1">
                Emergency Hotline
              </p>
              <p className="text-sm font-medium text-rose/70 mb-3">
                Call Now &mdash; Available 24/7
              </p>
              <a
                href={`tel:${siteConfig.phone.emergency}`}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose hover:text-rose/80 transition-colors block leading-tight tracking-tight"
              >
                {siteConfig.phone.emergency}
              </a>
              <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
                Dial immediately for any medical emergency. Our team is ready to
                respond at any hour.
              </p>
            </CardContent>
          </Card>

          {/* Ambulance + Directions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-hover border border-border/60 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-rose-500 to-red-600" />
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-rose/10 text-rose shrink-0">
                    <Ambulance className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      Ambulance Dispatch
                    </CardTitle>
                    <CardDescription>
                      Rapid response when it matters
                    </CardDescription>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-rose shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Dispatch:
                      </span>{" "}
                      <a
                        href={`tel:${siteConfig.phone.ambulance}`}
                        className="text-rose hover:text-rose/80 font-semibold"
                      >
                        {siteConfig.phone.ambulance}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-rose shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Response:
                      </span>{" "}
                      10&ndash;15 min within Mombasa CBD
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-rose shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Coverage:
                      </span>{" "}
                      Mombasa County &amp; surrounding areas
                    </span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-border/60">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Equipment:
                    </span>{" "}
                    Basic &amp; advanced life support, defibrillator, oxygen,
                    spinal board, stretcher
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border border-border/60 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-teal-500 to-teal-600" />
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal/10 text-teal shrink-0">
                    <MapPin className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      Driving Directions
                    </CardTitle>
                    <CardDescription>
                      Find us quickly and safely
                    </CardDescription>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground mb-5">
                  <p>
                    <span className="font-semibold text-foreground">
                      Address:
                    </span>{" "}
                    {siteConfig.location.address},{" "}
                    {siteConfig.location.subCounty}, {siteConfig.location.city}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Landmark:
                    </span>{" "}
                    {siteConfig.location.landmark}
                  </p>
                  <div className="pt-2 space-y-2">
                    <p className="text-xs font-semibold text-foreground">
                      From Mombasa Island &amp; Likoni:
                    </p>
                    <p className="text-xs">
                      Head towards Mombasa CBD via Digo Road. Turn onto Ronald
                      Ngala Road near the Sabasaba area. The hospital is on your
                      right.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">
                      From Nyali &amp; North Coast:
                    </p>
                    <p className="text-xs">
                      Cross the Nyali Bridge onto Nyerere Avenue. Continue onto
                      Moi Avenue, then turn onto Ronald Ngala Road. The hospital
                      is on your left.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">
                      From Airport &amp; South Coast:
                    </p>
                    <p className="text-xs">
                      Take A109 (Moi International Airport Road) into CBD. Turn
                      onto Ronald Ngala Road at Sabasaba Junction.
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=-4.0435,39.6682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── What to Do in an Emergency ── */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose/10 text-rose mb-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What to Do in a Medical Emergency
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Follow these steps to ensure the best possible outcome while
              waiting for emergency medical assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((item) => (
              <Card
                key={item.step}
                className="card-hover border-l-4 border-l-rose overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose text-white text-sm font-bold shrink-0">
                      {item.step}
                    </span>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Bring / When to Visit ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-hover overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-green-100 text-green-700 shrink-0">
                    <CheckCircle className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      What to Bring to the ER
                    </CardTitle>
                    <CardDescription>
                      Speed up registration by having these ready
                    </CardDescription>
                  </div>
                </div>
                <ul className="space-y-3">
                  {whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4.5 w-4.5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-rose-500 to-red-600" />
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-rose/10 text-rose shrink-0">
                    <XCircle className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      When to Visit the ER
                    </CardTitle>
                    <CardDescription>
                      Seek immediate care for these symptoms
                    </CardDescription>
                  </div>
                </div>
                <ul className="space-y-3">
                  {whenToVisit.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <XCircle className="h-4.5 w-4.5 text-rose shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-rose-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white mb-6">
            <Phone className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In an Emergency, Every Second Counts
          </h2>
          <p className="text-red-100/90 mb-8 max-w-xl mx-auto">
            Do not wait. Call our emergency hotline immediately or visit our
            emergency department. We are here for you 24/7/365.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phone.emergency}`}>
              <Button
                size="lg"
                className="bg-white text-rose hover:bg-red-50 font-semibold shadow-lg shadow-black/10 gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Emergency
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 font-semibold gap-2"
              >
                <MapPin className="h-4 w-4" />
                Find Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
