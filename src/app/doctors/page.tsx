import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "@/lib/data";

function getInitials(name: string): string {
  const parts = name.replace(/^Dr\.\s*/i, "").split(" ");
  return parts
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const gradients = [
  "from-ocean to-teal",
  "from-teal to-ocean",
  "from-ocean to-cyan-500",
  "from-cyan-500 to-teal",
  "from-ocean to-blue-500",
  "from-teal to-blue-500",
  "from-ocean/80 to-teal/80",
  "from-teal/80 to-ocean/80",
];

export default function DoctorsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-ocean via-ocean to-teal text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <Badge variant="secondary" className="mb-5">
            OUR MEDICAL TEAM
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Our Medical Team
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Highly qualified healthcare professionals dedicated to your
            wellbeing
          </p>
        </div>
        <div className="wave-divider absolute bottom-0 left-0 right-0 h-6" />
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              MEET OUR DOCTORS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dedicated to Your Health
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of experienced medical professionals is committed to
              providing compassionate, patient-centered care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <Card
                key={doctor.name}
                className="overflow-hidden card-hover border-t-4 border-t-ocean/20 group"
              >
                <div className="flex items-center justify-center h-44 bg-gradient-to-br from-ocean-light to-teal-light relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,107,203,0.06),transparent_70%)]" />
                  <div
                    className={`h-20 w-20 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center shadow-lg shadow-ocean/20 ring-4 ring-white/80`}
                  >
                    <span className="text-white text-2xl font-bold tracking-wide">
                      {getInitials(doctor.name)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-semibold leading-tight group-hover:text-ocean transition-colors">
                      {doctor.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1.5 text-xs">
                      {doctor.specialty}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                      Qualifications
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-0.5">
                      {doctor.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-1.5">
                          <span className="text-ocean mt-1.5 block size-1 rounded-full bg-ocean shrink-0" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-baseline gap-1 py-1">
                    <span className="text-2xl font-bold text-ocean">
                      {doctor.experience}+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      years experience
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((lang) => (
                      <Badge
                        key={lang}
                        variant="outline"
                        className="text-[11px] px-1.5 py-0"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  <Link href="/appointments">
                    <Button className="w-full cursor-pointer mt-2">
                      Book Appointment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
