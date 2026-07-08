import { User } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "@/lib/data";

export default function DoctorsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Our Medical Team
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Experienced healthcare professionals dedicated to your wellbeing
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Doctors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of highly qualified medical professionals is committed to
              providing you with the best possible care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.name} className="overflow-hidden">
                <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-100 to-teal-100">
                  <User className="h-16 w-16 text-blue-400" />
                </div>
                <CardContent className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {doctor.specialty}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      Qualifications
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-0.5">
                      {doctor.qualifications.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">
                      {doctor.experience} Years Experience
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Languages:
                    </span>{" "}
                    {doctor.languages.join(", ")}
                  </div>
                  <Link href="/appointments">
                    <Button className="w-full cursor-pointer">
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
