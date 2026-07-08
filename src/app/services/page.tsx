import type { LucideIcon } from "lucide-react";
import {
  Ambulance,
  BedDouble,
  CircleCheck,
  HeartPulse,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/lib/data";

interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  equipmentTreatments: string[];
}

const categories: ServiceCategory[] = [
  {
    icon: "Ambulance",
    title: "Emergency Services",
    description:
      "Our 24/7 emergency department is fully equipped to handle all medical emergencies with a dedicated rapid response team. From accidents and injuries to acute medical conditions, we provide immediate, life-saving care around the clock.",
    benefits: [
      "Round-the-clock availability, 365 days a year",
      "Ambulance services for emergency transport",
      "Critical care monitoring and resuscitation",
      "Immediate medication administration",
    ],
    equipmentTreatments: [
      "Defibrillators",
      "Ventilators",
      "ECG Machines",
      "Patient Monitors",
      "Infusion Pumps",
      "Trauma Care",
      "Cardiac Emergencies",
      "Stroke Management",
      "Poisoning Cases",
      "Accident & Injury Care",
    ],
  },
  {
    icon: "Stethoscope",
    title: "General Medicine",
    description:
      "Comprehensive medical care for patients of all ages. Our experienced physicians provide thorough assessments, diagnosis, and treatment plans for a wide range of medical conditions, from routine checkups to complex chronic disease management.",
    benefits: [
      "Consultations with experienced physicians",
      "Routine health checkups and screenings",
      "Chronic disease management",
      "Referral coordination with specialists",
    ],
    equipmentTreatments: [
      "Diagnostic Tools",
      "ECG Machines",
      "Spirometers",
      "Blood Pressure Monitors",
      "Glucometers",
      "Hypertension Management",
      "Diabetes Care",
      "Respiratory Infection Treatment",
      "Gastrointestinal Care",
      "Allergy Management",
    ],
  },
  {
    icon: "HeartPulse",
    title: "Maternity & Child Health",
    description:
      "Complete care for mothers and children from pregnancy through adolescence. Our maternity wing offers a safe, comfortable environment for childbirth, while our pediatric team provides expert care for infants, children, and teenagers.",
    benefits: [
      "Antenatal and postnatal care programs",
      "Safe delivery with skilled birth attendants",
      "Private maternity suites for new mothers",
      "Pediatric consultations and immunizations",
    ],
    equipmentTreatments: [
      "Fetal Monitors",
      "Incubators",
      "Ultrasound Scanners",
      "Vaccination Equipment",
      "Phototherapy Units",
      "Normal & C-Section Delivery",
      "Newborn Care & Screening",
      "Child Development Assessments",
      "Nutrition Counseling",
      "Adolescent Health Services",
    ],
  },
  {
    icon: "Microscope",
    title: "Diagnostics & Laboratory",
    description:
      "Fully equipped diagnostic laboratory and imaging department offering a wide range of tests and scans with quick turnaround times. Our team of skilled technologists ensures accurate results for effective treatment planning.",
    benefits: [
      "Same-day results for most laboratory tests",
      "Digital X-ray and ultrasound imaging",
      "Quality assured procedures and protocols",
      "Comprehensive health screening packages",
    ],
    equipmentTreatments: [
      "Hematology Analyzer",
      "Biochemistry Analyzer",
      "Digital X-Ray System",
      "Ultrasound Scanner",
      "Microbiology & Pathology Equipment",
      "Blood & Urine Analysis",
      "Lipid & Hormone Profiles",
      "Cancer Screening Tests",
      "Liver & Kidney Function Tests",
      "Infectious Disease Testing",
    ],
  },
  {
    icon: "Pill",
    title: "Pharmacy Services",
    description:
      "Our on-site pharmacy provides prescribed medications, over-the-counter drugs, and health supplies. We maintain a comprehensive stock of quality-assured medicines at affordable prices, with professional pharmacists available for consultation.",
    benefits: [
      "24/7 pharmacy service for inpatients and outpatients",
      "Wide range of medications in stock",
      "Quality-assured pharmaceuticals from trusted suppliers",
      "Professional medication counseling",
    ],
    equipmentTreatments: [
      "Modern Storage Systems",
      "Temperature-Controlled Units",
      "Inventory Management Software",
      "Prescription Medications",
      "Over-the-Counter Drugs",
      "Chronic Disease Medications",
      "Health & Wellness Supplies",
      "Medical Consumables",
    ],
  },
  {
    icon: "BedDouble",
    title: "Outpatient & Inpatient Services",
    description:
      "Flexible care options designed for your convenience. Our outpatient services allow you to receive quality care without an overnight stay, while our inpatient wing provides comfortable private and shared wards for patients requiring extended medical attention.",
    benefits: [
      "Walk-in consultations during operating hours",
      "Comfortable private and shared wards",
      "Day surgery and observation services",
      "24/7 nursing care and support",
    ],
    equipmentTreatments: [
      "Private Wards",
      "Shared Wards",
      "Day Care Suites",
      "Patient Monitoring Systems",
      "Nurse Call Systems",
      "Outpatient Consultations",
      "Minor Surgical Procedures",
      "Post-Surgical Care & Recovery",
      "Medical Ward Admissions",
      "Physiotherapy & Rehabilitation",
    ],
  },
  {
    icon: "Shield",
    title: "Preventive Care",
    description:
      "Proactive healthcare services designed to prevent illness and detect health issues early. Our preventive care programs help you stay healthy through regular screenings, vaccinations, and personalized wellness guidance.",
    benefits: [
      "Regular health screenings and checkups",
      "Immunization programs for all ages",
      "Health education and lifestyle counseling",
      "Early detection of chronic conditions",
    ],
    equipmentTreatments: [
      "Screening & Diagnostic Tools",
      "Vaccination Equipment",
      "Health Assessment Kits",
      "Wellness Checkups",
      "Cancer Screenings",
      "Cardiovascular Risk Assessment",
      "Adult & Child Immunizations",
      "Nutrition & Fitness Counseling",
    ],
  },
];

const iconMap: Record<string, LucideIcon> = {
  Ambulance,
  Stethoscope,
  HeartPulse,
  Microscope,
  Pill,
  BedDouble,
  Shield,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              {services.length} Specialized Departments
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Comprehensive healthcare services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need Under One Roof
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              At {siteConfig.name}, we offer a full spectrum of medical services
              delivered with compassion and expertise. From emergency care to
              preventive wellness programs, our dedicated team is here to
              support you and your family at every stage of life.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon];
              return (
                <Link
                  key={cat.title}
                  href={`#${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
                >
                  {Icon && <Icon className="h-8 w-8 text-primary" />}
                  <span className="text-xs font-medium leading-tight">
                    {cat.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {categories.map((category, index) => {
        const Icon = iconMap[category.icon];
        const sectionId = category.title.toLowerCase().replace(/\s+/g, "-");
        return (
          <section
            key={category.title}
            id={sectionId}
            className={`py-16 ${index % 2 === 0 ? "bg-muted/50" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 !== 0 ? "lg:order-last" : ""}>
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-10 text-white text-center">
                    {Icon && <Icon className="h-20 w-20 mx-auto mb-4" />}
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CircleCheck className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">
                      Equipment & Treatments
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.equipmentTreatments.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href="/appointments">
                    <Button
                      size="lg"
                      className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                    >
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book an Appointment?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Schedule your visit today and experience quality healthcare with
            compassion at {siteConfig.name}.
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
