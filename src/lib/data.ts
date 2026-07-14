export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  location: {
    address: string;
    city: string;
    county: string;
    subCounty: string;
    landmark: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  phone: {
    emergency: string;
    reception: string;
    appointments: string;
    ambulance: string;
  };
  email: string;
  emailAlt?: string;
  operatingHours: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  kmpdcRegistration: string;
  shaApproved: boolean;
}

export const siteConfig: SiteConfig = {
  name: "MOMBASA BREEZE HOSPITAL",
  tagline: "Quality Healthcare with Compassion, 24 Hours a Day.",
  description:
    "MOMBASA BREEZE HOSPITAL is a Level 4 private hospital in Mombasa Saba Saba, next to Mailand Restaurant. We provide quality, compassionate, and affordable healthcare with modern equipment and experienced professionals. Contact us at +254 798 164953 or info@mombasabreezehospital.com.",
  location: {
    address: "Mombasa Saba Saba",
    city: "Mombasa",
    county: "Mombasa County",
    subCounty: "Mvita Sub-County",
    landmark: "Next to Mailand Restaurant",
    coordinates: {
      lat: -4.0435,
      lng: 39.6682,
    },
  },
  phone: {
    emergency: "+254 798 164953",
    reception: "+254 798 164953",
    appointments: "+254 798 164953",
    ambulance: "+254 798 164953",
  },
  email: "info@mombasabreezehospital.com",
  emailAlt: "mombasabreezehospital2001@gmail.com",
  operatingHours: "24/7/365",
  social: {
    facebook: "https://facebook.com/mombasabreezehospital",
    twitter: "https://twitter.com/mbreezehospital",
    instagram: "https://instagram.com/mombasabreezehospital",
    youtube: "https://youtube.com/@mombasabreezehospital",
  },
  kmpdcRegistration: "KMPDC/H/2024/XXXX",
  shaApproved: true,
};

export interface NavLink {
  label: string;
  href: string;
}

export const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Appointments", href: "/appointments" },
  { label: "Emergency", href: "/emergency" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  { value: "24/7", label: "Emergency Care", icon: "Ambulance" },
  { value: "53", label: "Inpatient Beds", icon: "BedDouble" },
  { value: "9", label: "Baby Cots", icon: "Baby" },
  { value: "2", label: "Maternity Beds", icon: "HeartPulse" },
  { value: "3", label: "Emergency Casualty Beds", icon: "Tent" },
  { value: "SHA", label: "Approved", icon: "ShieldCheck" },
  { value: "KMPDC", label: "Registered", icon: "FileCheck" },
];

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: "UserCheck",
    title: "Experienced Doctors",
    description:
      "Our team comprises highly qualified and experienced medical professionals dedicated to providing the best care.",
  },
  {
    icon: "Microscope",
    title: "Modern Equipment",
    description:
      "We invest in the latest medical technology and equipment for accurate diagnosis and effective treatment.",
  },
  {
    icon: "Clock",
    title: "24/7 Emergency",
    description:
      "Our emergency department is open around the clock, every day of the year, ready to handle any medical emergency.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Affordable Care",
    description:
      "We offer competitive pricing and accept various insurance plans, including SHA, to make healthcare accessible.",
  },
  {
    icon: "HeartHandshake",
    title: "Patient-Centered",
    description:
      "Your comfort and well-being are our priority. We tailor our care to meet your individual needs.",
  },
  {
    icon: "Accessibility",
    title: "Wheelchair Accessible",
    description:
      "Our facility is fully wheelchair accessible with ramps, wide doorways, and accessible washrooms.",
  },
  {
    icon: "BadgeCheck",
    title: "SHA Accepted",
    description:
      "We are an approved healthcare provider under Kenya's Social Health Authority (SHA).",
  },
  {
    icon: "MapPin",
    title: "Convenient CBD Location",
    description:
      "Located on Ronald Ngala Road in Mombasa's CBD, we are easily accessible from all parts of the city.",
  },
];

export interface ServiceBenefit {
  icon: string;
  text: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  benefits: ServiceBenefit[];
  cta: string;
}

export const services: Service[] = [
  {
    icon: "Stethoscope",
    title: "General Consultation",
    description:
      "Comprehensive outpatient consultations for patients of all ages. Our experienced general practitioners provide thorough assessments, diagnosis, and treatment plans for a wide range of medical conditions.",
    benefits: [
      { icon: "Clock", text: "Walk-ins welcome during operating hours" },
      { icon: "UserCheck", text: "Consultations with experienced physicians" },
      { icon: "ClipboardCheck", text: "Comprehensive health assessments" },
      { icon: "Syringe", text: "On-site basic laboratory tests" },
    ],
    cta: "Book a Consultation",
  },
  {
    icon: "Ambulance",
    title: "Emergency Medicine",
    description:
      "Our 24/7 emergency department is equipped to handle all medical emergencies, from accidents and injuries to acute medical conditions. We have a dedicated trauma bay, resuscitation area, and rapid response team.",
    benefits: [
      { icon: "Clock", text: "24/7/365 availability" },
      { icon: "Truck", text: "Ambulance services available" },
      { icon: "Heart", text: "Critical care monitoring" },
      { icon: "Pill", text: "Immediate medication administration" },
    ],
    cta: "Call Emergency",
  },
  {
    icon: "HeartPulse",
    title: "Maternity Services",
    description:
      "Comprehensive maternity care from antenatal to postnatal. Our maternity wing offers a safe and comfortable environment for mothers to bring new life into the world, supported by skilled obstetricians and midwives.",
    benefits: [
      { icon: "Baby", text: "Antenatal and postnatal care" },
      { icon: "Heart", text: "Safe delivery with skilled birth attendants" },
      { icon: "Bed", text: "Private maternity suites" },
      { icon: "Baby", text: "Newborn screening and immunization" },
    ],
    cta: "Learn About Maternity",
  },
  {
    icon: "Child",
    title: "Pediatrics",
    description:
      "Specialized healthcare for infants, children, and adolescents. Our pediatric department provides preventive care, diagnosis, and treatment for childhood illnesses, growth monitoring, and developmental assessments.",
    benefits: [
      { icon: "Thermometer", text: "Treatment of childhood illnesses" },
      { icon: "Syringe", text: "Immunization programs" },
      { icon: "Ruler", text: "Growth and development monitoring" },
      { icon: "Apple", text: "Nutritional counseling" },
    ],
    cta: "Book Pediatric Appointment",
  },
  {
    icon: "Microscope",
    title: "Laboratory Services",
    description:
      "Fully equipped diagnostic laboratory offering a wide range of tests with quick turnaround times. Our lab is staffed by qualified technologists and follows strict quality control procedures.",
    benefits: [
      { icon: "Droplets", text: "Blood and urine analysis" },
      { icon: "Scan", text: "Microbiology and pathology" },
      { icon: "Clock", text: "Same-day results for most tests" },
      { icon: "Shield", text: "Quality assured procedures" },
    ],
    cta: "View Lab Services",
  },
  {
    icon: "Pill",
    title: "Pharmacy Services",
    description:
      "Our on-site pharmacy provides prescribed medications, over-the-counter drugs, and health supplies. We maintain a comprehensive stock of quality-assured medicines at affordable prices.",
    benefits: [
      { icon: "Clock", text: "24/7 pharmacy service" },
      { icon: "Package", text: "Wide range of medications in stock" },
      { icon: "BadgeCheck", text: "Quality-assured pharmaceuticals" },
      { icon: "IndianRupee", text: "Competitive pricing" },
    ],
    cta: "Visit Pharmacy",
  },
  {
    icon: "Scan",
    title: "Radiology & Imaging",
    description:
      "Modern diagnostic imaging services including X-ray, ultrasound, and other imaging modalities. Our radiology department provides accurate imaging to aid in diagnosis and treatment planning.",
    benefits: [
      { icon: "Scan", text: "Digital X-ray services" },
      { icon: "Ultrasound", text: "Ultrasound scanning" },
      { icon: "Clock", text: "Quick appointment scheduling" },
      { icon: "FileText", text: "Detailed reporting by radiologists" },
    ],
    cta: "Schedule Imaging",
  },
  {
    icon: "Scalpel",
    title: "Minor Surgery",
    description:
      "Our minor surgery theatre is equipped for various surgical procedures including wound management, abscess drainage, biopsies, and other minor surgical interventions under sterile conditions.",
    benefits: [
      { icon: "Syringe", text: "Local and regional anesthesia" },
      { icon: "Shield", text: "Sterile operating environment" },
      { icon: "Clock", text: "Same-day discharge for most procedures" },
      { icon: "Bandage", text: "Post-operative wound care" },
    ],
    cta: "Book Surgical Consultation",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Fatima Ali",
    role: "Patient",
    content:
      "I received exceptional care during my stay at Mombasa Breeze Hospital. The nurses were attentive and the doctors were thorough. I felt truly cared for throughout my treatment.",
    rating: 5,
  },
  {
    name: "James Ochieng",
    role: "Father of a Patient",
    content:
      "The pediatric team was wonderful with my son. They explained everything clearly and made him feel comfortable. I'm grateful for the compassionate care we received.",
    rating: 5,
  },
  {
    name: "Aisha Hassan",
    role: "New Mother",
    content:
      "I gave birth to my baby girl at Mombasa Breeze and the maternity staff were incredible. The facilities were clean and modern, and the midwives supported me through every step.",
    rating: 5,
  },
  {
    name: "Peter Kamau",
    role: "Emergency Patient",
    content:
      "I was rushed to the emergency department late at night and the team acted swiftly. Their quick response and professional care made all the difference. Thank you.",
    rating: 5,
  },
  {
    name: "Grace Mwangi",
    role: "Patient",
    content:
      "The outpatient services are efficient and affordable. I appreciate that they accept SHA, which made my visit stress-free. The staff at reception were also very helpful.",
    rating: 4,
  },
  {
    name: "David Nyongesa",
    role: "Family Member",
    content:
      "My mother was admitted for two weeks and the care she received was outstanding. The doctors kept us informed and the facility is clean and well-maintained.",
    rating: 5,
  },
];

export interface Doctor {
  name: string;
  specialty: string;
  qualifications: string[];
  experience: number;
  languages: string[];
  image: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Catherine Wanjiku",
    specialty: "General Medicine",
    qualifications: ["MBChB (UoN)", "MMed Internal Medicine (UoN)"],
    experience: 15,
    languages: ["English", "Swahili", "Kikuyu"],
    image: "/images/doctors/doctor-1.svg",
  },
  {
    name: "Dr. Ahmed Salim",
    specialty: "Emergency Medicine",
    qualifications: ["MBChB (KU)", "MMed Emergency Medicine (AKU)"],
    experience: 12,
    languages: ["English", "Swahili", "Arabic"],
    image: "/images/doctors/doctor-2.svg",
  },
  {
    name: "Dr. Mary Akinyi",
    specialty: "Obstetrics & Gynecology",
    qualifications: ["MBChB (UoN)", "MMed Obstetrics & Gynecology (UoN)"],
    experience: 18,
    languages: ["English", "Swahili", "Luo"],
    image: "/images/doctors/doctor-3.svg",
  },
  {
    name: "Dr. Patrick Otieno",
    specialty: "Pediatrics",
    qualifications: ["MBChB (Moi)", "MMed Pediatrics (Moi)"],
    experience: 10,
    languages: ["English", "Swahili", "Luo"],
    image: "/images/doctors/doctor-4.svg",
  },
  {
    name: "Dr. Fatima Hussein",
    specialty: "Radiology",
    qualifications: ["MBChB (UoN)", "MMed Radiology (UoN)"],
    experience: 14,
    languages: ["English", "Swahili", "Somali"],
    image: "/images/doctors/doctor-5.svg",
  },
  {
    name: "Dr. Samuel Kiprop",
    specialty: "General Surgery",
    qualifications: ["MBChB (UoN)", "MMed General Surgery (UoN)"],
    experience: 16,
    languages: ["English", "Swahili", "Kalenjin"],
    image: "/images/doctors/doctor-6.svg",
  },
  {
    name: "Dr. Esther Nyambura",
    specialty: "Laboratory Medicine",
    qualifications: [
      "BSc Medical Laboratory Science (JKUAT)",
      "MSc Clinical Pathology (UoN)",
    ],
    experience: 11,
    languages: ["English", "Swahili", "Kikuyu"],
    image: "/images/doctors/doctor-7.svg",
  },
  {
    name: "Dr. Rashid Mwinyi",
    specialty: "Pharmacy",
    qualifications: ["BPharm (KU)", "MPharm Clinical Pharmacy (UoN)"],
    experience: 9,
    languages: ["English", "Swahili", "Arabic"],
    image: "/images/doctors/doctor-8.svg",
  },
];

export const insurancePartners: string[] = [
  "SHA (Social Health Authority)",
  "NHIF",
  "AAR Insurance",
  "CIC Medical Cover",
  "Jubilee Health Insurance",
  "Madison Insurance",
  "Resolution Health East Africa",
  "Britam Health Insurance",
  "APA Insurance",
  "Sanlam Kenya",
  "Corporate Insurance",
  "Self-Pay (Cash, M-Pesa, Card)",
];

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "Do you accept SHA (Social Health Authority)?",
    answer:
      "Yes, Mombasa Breeze Hospital is an approved healthcare provider under Kenya's Social Health Authority (SHA). We accept SHA cover for both outpatient and inpatient services. Please bring your SHA membership card and a valid ID during your visit.",
    category: "Payments & Insurance",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open 24 hours a day, 7 days a week, 365 days a year. Our emergency department operates around the clock. Outpatient clinic hours are from 7:30 AM to 6:00 PM on weekdays and 8:00 AM to 2:00 PM on Saturdays. We are also open on public holidays.",
    category: "General",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling our appointments line at +254 700 000 002, using our online booking form on this website, or by visiting our reception desk in person. We recommend booking in advance for specialist consultations.",
    category: "Appointments",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, M-Pesa, bank cards (Visa, Mastercard), and all major insurance covers including SHA and private medical insurers. We also offer self-pay packages for various procedures.",
    category: "Payments & Insurance",
  },
  {
    question: "Is the hospital wheelchair accessible?",
    answer:
      "Yes, our facility is fully wheelchair accessible. We have ramps at all entrances, wide doorways, accessible washrooms, and designated parking spaces for persons with disabilities. Our staff is also trained to assist patients with mobility challenges.",
    category: "Accessibility",
  },
  {
    question: "Do you offer ambulance services?",
    answer:
      "Yes, we provide ambulance services for emergency transport. You can reach our ambulance dispatch at +254 700 000 003. Our ambulances are equipped with basic life support equipment and staffed by trained paramedics.",
    category: "General",
  },
  {
    question: "Do you offer maternity packages?",
    answer:
      "Yes, we have comprehensive maternity packages that include antenatal care, delivery services, and postnatal support. Please contact our maternity department or book an appointment to learn more about our packages and pricing.",
    category: "Services",
  },
  {
    question:
      "Can I get laboratory tests done without a doctor's consultation?",
    answer:
      "Yes, you can request specific laboratory tests directly at our lab without a doctor's consultation. However, we recommend consulting with our doctors for proper interpretation of results and appropriate medical advice.",
    category: "Services",
  },
  {
    question: "Do you offer specialized pediatric care?",
    answer:
      "Yes, our pediatric department provides comprehensive care for children from birth to adolescence. This includes well-child checkups, immunizations, treatment of childhood illnesses, and developmental assessments.",
    category: "Services",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "For your first visit, please bring a valid identification document (ID card or passport), any relevant medical records or referral letters, your insurance/SHA membership card (if applicable), and a list of any medications you are currently taking.",
    category: "Appointments",
  },
];

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Understanding SHA: What It Means for Your Healthcare",
    category: "Health Policy",
    excerpt:
      "Learn about Kenya's Social Health Authority and how it improves access to quality healthcare for all citizens at Mombasa Breeze Hospital.",
    author: "Dr. Catherine Wanjiku",
    date: "2025-12-15",
    image: "/images/blog/sha-healthcare.svg",
  },
  {
    title: "Managing Diabetes: Tips for a Healthy Lifestyle",
    category: "Wellness",
    excerpt:
      "Practical advice on managing diabetes through diet, exercise, and regular checkups. Our specialists share insights on living well with diabetes.",
    author: "Dr. Ahmed Salim",
    date: "2025-11-28",
    image: "/images/blog/diabetes-care.svg",
  },
  {
    title: "Preparing for Childbirth: A Guide for Expectant Mothers",
    category: "Women's Health",
    excerpt:
      "Everything you need to know about preparing for delivery, from what to pack to understanding the stages of labor. Expert advice from our maternity team.",
    author: "Dr. Mary Akinyi",
    date: "2025-11-10",
    image: "/images/blog/childbirth-guide.svg",
  },
  {
    title: "Childhood Immunizations: What Parents Need to Know",
    category: "Child Health",
    excerpt:
      "A comprehensive guide to the recommended immunization schedule for children in Kenya and why vaccines are crucial for your child's health.",
    author: "Dr. Patrick Otieno",
    date: "2025-10-22",
    image: "/images/blog/immunizations.svg",
  },
  {
    title: "Understanding Hypertension: The Silent Killer",
    category: "Heart Health",
    excerpt:
      "High blood pressure often has no symptoms but can lead to serious complications. Learn about prevention, monitoring, and treatment options.",
    author: "Dr. Catherine Wanjiku",
    date: "2025-10-05",
    image: "/images/blog/hypertension.svg",
  },
  {
    title: "Nutrition Tips for a Strong Immune System",
    category: "Nutrition",
    excerpt:
      "Discover the foods and nutrients that can help boost your immune system and keep you healthy throughout the year.",
    author: "Dr. Esther Nyambura",
    date: "2025-09-18",
    image: "/images/blog/immune-nutrition.svg",
  },
  {
    title: "Mental Health Matters: Breaking the Stigma",
    category: "Mental Health",
    excerpt:
      "Mental health is an essential part of overall well-being. Read about common mental health conditions and where to seek help in Mombasa.",
    author: "Dr. Samuel Kiprop",
    date: "2025-09-01",
    image: "/images/blog/mental-health.svg",
  },
  {
    title: "When to Visit the Emergency Room",
    category: "Emergency Care",
    excerpt:
      "Knowing when to seek emergency care can save lives. Our emergency medicine team outlines the signs and symptoms that warrant a trip to the ER.",
    author: "Dr. Ahmed Salim",
    date: "2025-08-15",
    image: "/images/blog/emergency-room.svg",
  },
  {
    title: "The Importance of Regular Health Checkups",
    category: "Preventive Care",
    excerpt:
      "Regular health screenings can detect problems early when they are easiest to treat. Find out which checkups you need based on your age and risk factors.",
    author: "Dr. Catherine Wanjiku",
    date: "2025-07-30",
    image: "/images/blog/health-checkups.svg",
  },
];

export interface JobOpening {
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Internship";
  description: string;
  requirements: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    title: "Registered Nurse (RN)",
    department: "Nursing",
    type: "Full-time",
    description:
      "We are seeking a dedicated registered nurse to join our nursing team. The ideal candidate will provide high-quality patient care across various departments including emergency, maternity, and inpatient wards.",
    requirements: [
      "Diploma or Degree in Nursing from a recognized institution",
      "Valid nursing license from the Nursing Council of Kenya",
      "Minimum 2 years of experience in a hospital setting",
      "BLS and ACLS certification preferred",
      "Strong communication and interpersonal skills",
    ],
  },
  {
    title: "Medical Officer",
    department: "Medical",
    type: "Full-time",
    description:
      "We are looking for a medical officer to join our team. The successful candidate will be responsible for patient consultations, diagnosis, treatment, and coordination of care.",
    requirements: [
      "MBChB degree from a recognized university",
      "Valid registration with the KMPDC",
      "Internship completion certificate",
      "At least 1 year of post-internship experience",
      "Excellent clinical and diagnostic skills",
    ],
  },
  {
    title: "Pharmacy Technologist",
    department: "Pharmacy",
    type: "Full-time",
    description:
      "We are hiring a qualified pharmacy technologist to manage medication dispensing, inventory management, and provide pharmaceutical care to our patients.",
    requirements: [
      "Diploma in Pharmacy from a recognized institution",
      "Registration with the Pharmacy and Poisons Board",
      "Minimum 1 year experience in a hospital pharmacy",
      "Knowledge of drug inventory management",
      "Good customer service skills",
    ],
  },
  {
    title: "Laboratory Technologist",
    department: "Laboratory",
    type: "Full-time",
    description:
      "We need a skilled laboratory technologist to perform diagnostic tests, maintain lab equipment, and ensure accurate results for patient care.",
    requirements: [
      "Diploma or Degree in Medical Laboratory Science",
      "Registration with the Kenya Medical Laboratory Technicians and Technologists Board",
      "Minimum 2 years experience in a busy lab",
      "Proficiency in laboratory information systems",
      "Attention to detail and accuracy",
    ],
  },
  {
    title: "Radiographer",
    department: "Radiology",
    type: "Full-time",
    description:
      "We seek a qualified radiographer to perform X-ray and ultrasound examinations, maintain imaging equipment, and ensure patient safety during procedures.",
    requirements: [
      "Diploma or Degree in Radiography",
      "Valid license from the Radiation Protection Board",
      "Minimum 2 years experience in diagnostic imaging",
      "Experience with digital X-ray systems",
      "Patient-centered approach",
    ],
  },
  {
    title: "Medical Internship",
    department: "Medical",
    type: "Internship",
    description:
      "We offer internship positions for recent medical graduates seeking to complete their internship placement in a busy hospital setting with diverse clinical exposure.",
    requirements: [
      "Recent MBChB graduate from a recognized university",
      "Letter of recommendation from the medical school",
      "Valid KMPDC provisional registration",
      "Strong academic record",
      "Commitment to learning and teamwork",
    ],
  },
  {
    title: "Nursing Internship",
    department: "Nursing",
    type: "Internship",
    description:
      "Join our nursing internship program to gain hands-on experience in various hospital departments under the supervision of experienced nursing professionals.",
    requirements: [
      "Recent Diploma or Degree in Nursing graduate",
      "Valid provisional license from the Nursing Council of Kenya",
      "Strong theoretical foundation",
      "Compassionate and patient-focused attitude",
      "Willingness to learn",
    ],
  },
  {
    title: "Customer Service Representative",
    department: "Administration",
    type: "Full-time",
    description:
      "We are looking for a friendly and professional customer service representative to manage reception, patient inquiries, appointment scheduling, and front desk operations.",
    requirements: [
      "Diploma or Degree in a related field",
      "Minimum 1 year experience in customer service",
      "Excellent communication skills in English and Swahili",
      "Proficiency in computer applications",
      "Ability to multitask in a fast-paced environment",
    ],
  },
  {
    title: "Cleaner",
    department: "Housekeeping",
    type: "Part-time",
    description:
      "We are hiring part-time cleaners to maintain cleanliness and hygiene standards across all hospital areas, ensuring a safe and sanitary environment for patients and staff.",
    requirements: [
      "KCPE certificate minimum",
      "Previous cleaning experience preferred",
      "Knowledge of infection prevention practices",
      "Reliable and punctual",
      "Physically fit for the role",
    ],
  },
];

export interface Department {
  label: string;
  value: string;
}

export const departments: Department[] = [
  { label: "General Medicine", value: "general-medicine" },
  { label: "Emergency Medicine", value: "emergency-medicine" },
  { label: "Maternity & Gynecology", value: "maternity" },
  { label: "Pediatrics", value: "pediatrics" },
  { label: "Radiology & Imaging", value: "radiology" },
  { label: "Laboratory Services", value: "laboratory" },
  { label: "Pharmacy", value: "pharmacy" },
  { label: "General Surgery", value: "general-surgery" },
  { label: "Orthopedics", value: "orthopedics" },
  { label: "Dental Services", value: "dental" },
  { label: "Nutrition & Dietetics", value: "nutrition" },
  { label: "Physiotherapy", value: "physiotherapy" },
  { label: "Counselling & Psychology", value: "counselling" },
  { label: "Outpatient Services", value: "outpatient" },
  { label: "Inpatient Services", value: "inpatient" },
];
