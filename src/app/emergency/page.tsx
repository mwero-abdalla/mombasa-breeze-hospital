import {
  Ambulance,
  ListChecks,
  Luggage,
  MapPin,
  Phone,
  ShieldAlert,
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
      "Take a deep breath and try to remain as calm as possible. Panicking can make the situation worse for everyone involved.",
  },
  {
    step: 2,
    title: "Call Emergency Services",
    description: `Dial ${siteConfig.phone.emergency} immediately. Provide your location and a brief description of what happened.`,
  },
  {
    step: 3,
    title: "Provide Essential Information",
    description:
      "Tell the operator the patient's age, gender, symptoms, any known medical conditions, allergies, and medications being taken.",
  },
  {
    step: 4,
    title: "Follow Instructions",
    description:
      "Listen carefully to the dispatcher's instructions. They may provide guidance on first aid or what to do while waiting for help.",
  },
  {
    step: 5,
    title: "Prepare for Arrival",
    description:
      "If possible, unlock doors, clear pathways, gather medical records and insurance cards, and have someone ready to guide the medical team.",
  },
  {
    step: 6,
    title: "Do Not Self-Transport",
    description:
      "Unless instructed otherwise by emergency personnel, wait for the ambulance. Emergency vehicles have equipment and trained staff to provide care en route.",
  },
];

const whatToBring = [
  "Valid government-issued ID (National ID, Passport, or Driver's License)",
  "Insurance/SHA membership card",
  "List of current medications and dosages",
  "Known allergies (medications, foods, etc.)",
  "Relevant medical records or referral letters",
  "Contact information for your primary care doctor",
  "Emergency contact name and phone number",
  "Mobile phone and charger",
  "Personal items (glasses, hearing aids, dentures)",
  "Cash or payment method for any non-covered services",
];

const whenToVisit = [
  "Chest pain or pressure, especially with shortness of breath",
  "Difficulty breathing or severe asthma attack",
  "Severe bleeding that will not stop",
  "Head injury with loss of consciousness or confusion",
  "Sudden severe headache, vision changes, or slurred speech",
  "Severe burns, electrical shock, or chemical exposure",
  "Broken bones or dislocated joints",
  "Allergic reactions with swelling of the face, lips, or throat",
  "Seizures or convulsions",
  "Severe abdominal pain or vomiting blood",
  "High fever unresponsive to medication (adults over 39.5°C / children over 38.5°C)",
  "Poisoning or suspected overdose",
  "Suspected stroke (facial drooping, arm weakness, speech difficulty)",
  "Suicidal thoughts or self-harm behaviour",
  "Severe dehydration or inability to keep fluids down",
];

export default function EmergencyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <Badge
            variant="destructive"
            className="mb-4 border-red-300 text-red-100 text-xs tracking-wider uppercase"
          >
            24/7 Emergency Care
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Emergency Services
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
            Immediate care when you need it most &mdash; 24 hours a day, 365
            days a year
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="border-red-200 bg-red-50 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-2">
                Emergency Hotline
              </p>
              <a
                href={`tel:${siteConfig.phone.emergency}`}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 hover:text-red-800 transition-colors block leading-tight"
              >
                {siteConfig.phone.emergency}
              </a>
              <p className="text-red-600 mt-4 max-w-md mx-auto">
                Available 24/7 for medical emergencies. Call immediately if you
                or someone near you needs urgent medical attention.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-red-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <Ambulance className="h-10 w-10 text-amber-400 mb-4" />
                <CardTitle className="text-white text-xl mb-2">
                  Ambulance Dispatch
                </CardTitle>
                <CardDescription className="text-red-200 text-base mb-6">
                  Our ambulance service is available around the clock. Fully
                  equipped vehicles and trained paramedics are ready to respond
                  to emergencies anywhere in Mombasa.
                </CardDescription>
                <div className="space-y-3 text-sm text-red-200">
                  <p>
                    <span className="text-white font-semibold">
                      Dispatch Number:
                    </span>{" "}
                    <a
                      href={`tel:${siteConfig.phone.ambulance}`}
                      className="text-amber-400 hover:text-amber-300 font-semibold"
                    >
                      {siteConfig.phone.ambulance}
                    </a>
                  </p>
                  <p>
                    <span className="text-white font-semibold">
                      Response Time:
                    </span>{" "}
                    Within 10&ndash;15 minutes within Mombasa CBD
                  </p>
                  <p>
                    <span className="text-white font-semibold">Equipment:</span>{" "}
                    Basic &amp; advanced life support, defibrillator, oxygen,
                    stretcher
                  </p>
                  <p>
                    <span className="text-white font-semibold">Coverage:</span>{" "}
                    Mombasa County and surrounding areas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <MapPin className="h-10 w-10 text-amber-400 mb-4" />
                <CardTitle className="text-white text-xl mb-2">
                  Driving Directions
                </CardTitle>
                <CardDescription className="text-red-200 text-base mb-6">
                  We are located in the heart of Mombasa&apos;s Central Business
                  District, easily accessible from all parts of the city.
                </CardDescription>
                <div className="space-y-3 text-sm text-red-200">
                  <p>
                    <span className="text-white font-semibold">Address:</span>{" "}
                    {siteConfig.location.address},{" "}
                    {siteConfig.location.subCounty}, {siteConfig.location.city}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Landmark:</span>{" "}
                    {siteConfig.location.landmark}
                  </p>
                  <div className="pt-2">
                    <p className="text-white font-semibold mb-2">
                      From Mombasa Island &amp; Likoni:
                    </p>
                    <p>
                      Head towards Mombasa CBD via Digo Road. Turn onto Ronald
                      Ngala Road near the Sabasaba area. The hospital is on your
                      right, opposite Sabasaba Bar.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">
                      From Nyali &amp; North Coast:
                    </p>
                    <p>
                      Cross the Nyali Bridge onto Nyerere Avenue. Continue onto
                      Moi Avenue, then turn onto Ronald Ngala Road. The hospital
                      is on your left.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">
                      From Airport &amp; South Coast:
                    </p>
                    <p>
                      Take the A109 (Moi International Airport Road) into the
                      CBD. Turn onto Ronald Ngala Road at the Sabasaba Junction.
                      We are located opposite Sabasaba Bar.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://maps.google.com/?q=-4.0435,39.6682"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-red-950 w-full"
                    >
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 mb-4">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              What to Do in a Medical Emergency
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to ensure the best possible outcome while
              waiting for emergency medical assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item) => (
              <Card key={item.step} className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold shrink-0">
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

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 mb-4">
                  <Luggage className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  What to Bring to the Emergency Department
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  Being prepared can help speed up the registration and
                  treatment process when you arrive at the emergency department.
                </CardDescription>
                <ul className="space-y-3">
                  {whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 shrink-0 mt-0.5">
                        <span className="text-xs font-bold">&check;</span>
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 mb-4">
                  <ListChecks className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">
                  When to Visit the Emergency Department
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  Seek emergency care immediately if you or someone with you
                  experiences any of the following symptoms or conditions.
                </CardDescription>
                <ul className="space-y-3">
                  {whenToVisit.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-700 shrink-0 mt-0.5">
                        <span className="text-xs font-bold">&times;</span>
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            In an Emergency, Every Second Counts
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Do not hesitate. Call our emergency hotline immediately or visit our
            emergency department. We are here for you 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.emergency}`}
              className="inline-flex items-center justify-center rounded-xl bg-white text-red-700 hover:bg-red-50 px-6 py-3 font-medium transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {siteConfig.phone.emergency}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white text-white hover:bg-white/10 px-6 py-3 font-medium transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
