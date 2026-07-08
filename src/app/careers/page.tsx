import {
  Briefcase,
  CheckCircle,
  Clock,
  GraduationCap,
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

export default function CareersPage() {
  const internships = jobOpenings.filter((job) => job.type === "Internship");
  const fulltimeJobs = jobOpenings.filter((job) => job.type !== "Internship");

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Careers & Placements
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Join our team of dedicated healthcare professionals
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Current Job Openings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fulltimeJobs.map((job) => (
              <Card key={job.title} className="flex flex-col">
                <CardContent className="p-6 flex flex-col gap-4 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
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
                  <div className="space-y-2 flex-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Application for ${job.title}`}
                    className="block"
                  >
                    <Button className="w-full cursor-pointer">Apply Now</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">
              Internships & Medical Placements
            </h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            We offer internship and placement opportunities for students and
            recent graduates in medical and allied health fields. Gain valuable
            hands-on experience in a busy hospital setting under the guidance of
            experienced professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((job) => (
              <Card key={job.title} className="flex flex-col">
                <CardContent className="p-6 flex flex-col gap-4 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
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
                  <div className="space-y-2 flex-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Application for ${job.title}`}
                    className="block"
                  >
                    <Button className="w-full cursor-pointer">Apply Now</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are always looking for talented and passionate individuals to
              join our team. To apply for any of the positions above, please
              follow the steps below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="font-semibold">Prepare Your Documents</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Update your CV/resume and prepare a cover letter outlining your
                qualifications and interest in the position.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="font-semibold">Send Your Application</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Email your documents to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary underline"
                >
                  {siteConfig.email}
                </a>{" "}
                with the job title as the subject line.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="font-semibold">Interview Process</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shortlisted candidates will be contacted for an interview. We
                look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
