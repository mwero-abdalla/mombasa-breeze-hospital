import {
  Briefcase,
  CheckCircle,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { jobOpenings, siteConfig } from "@/lib/data";

const typeVariant: Record<string, "default" | "secondary" | "outline"> = {
  "Full-time": "default",
  "Part-time": "secondary",
  Internship: "outline",
};

const steps = [
  {
    number: "01",
    title: "Prepare Your Documents",
    description:
      "Update your CV/resume and prepare a cover letter outlining your qualifications and interest in the position.",
  },
  {
    number: "02",
    title: "Send Your Application",
    description: (
      <>
        Email your documents to{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[#0B6BCB] underline underline-offset-2 font-medium"
        >
          {siteConfig.email}
        </a>{" "}
        with the job title as the subject line.
      </>
    ),
  },
  {
    number: "03",
    title: "Interview Process",
    description:
      "Shortlisted candidates will be contacted for an interview. We look forward to hearing from you!",
  },
];

export default function CareersPage() {
  const internships = jobOpenings.filter((job) => job.type === "Internship");
  const fulltimeJobs = jobOpenings.filter((job) => job.type !== "Internship");

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0B6BCB] via-[#0B6BCB] to-[#0D9488] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-blue-100 mb-6 border border-white/10">
            <Briefcase className="h-3.5 w-3.5" />
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
            Careers & Placements
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto">
            Join our team of dedicated healthcare professionals
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B6BCB]/10 px-4 py-1.5 text-sm font-medium text-[#0B6BCB] mb-4">
              <Briefcase className="h-3.5 w-3.5" />
              Work With Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Work With Us
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At {siteConfig.name}, we believe that our team is our greatest
              asset. We are committed to fostering a culture of compassion,
              excellence, and continuous learning. Our staff enjoy a supportive
              work environment, opportunities for professional growth, and the
              chance to make a meaningful difference in the lives of our
              patients and the community.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0B6BCB]/10 to-[#0D9488]/10 text-[#0B6BCB]">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold">Current Job Openings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fulltimeJobs.map((job) => (
              <Card
                key={job.title}
                className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6 flex flex-col gap-4 flex-1">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-semibold leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {siteConfig.location.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                    </div>
                    <Badge variant={typeVariant[job.type]}>{job.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="space-y-2.5 flex-1">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Application for ${job.title}`}
                    className="block"
                  >
                    <Button className="w-full cursor-pointer bg-gradient-to-r from-[#0B6BCB] to-[#0D9488] hover:opacity-90 shadow-sm">
                      Apply Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#F59E0B]/10 to-[#E11D48]/10 text-[#F59E0B]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold">
              Internships & Medical Placements
            </h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            We offer internship and placement opportunities for students and
            recent graduates in medical and allied health fields. Gain valuable
            hands-on experience in a busy hospital setting under the guidance of
            experienced professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((job) => (
              <Card
                key={job.title}
                className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6 flex flex-col gap-4 flex-1">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-semibold leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {siteConfig.location.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                    </div>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="space-y-2.5 flex-1">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-[#0D9488] shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Application for ${job.title}`}
                    className="block"
                  >
                    <Button className="w-full cursor-pointer bg-gradient-to-r from-[#0B6BCB] to-[#0D9488] hover:opacity-90 shadow-sm">
                      Apply Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0D9488]/10 px-4 py-1.5 text-sm font-medium text-[#0D9488] mb-4">
              <Mail className="h-3.5 w-3.5" />
              How to Apply
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Apply
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are always looking for talented and passionate individuals to
              join our team. To apply for any of the positions above, please
              follow the steps below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center group">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0B6BCB]/10 to-[#0D9488]/10 text-[#0B6BCB] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
