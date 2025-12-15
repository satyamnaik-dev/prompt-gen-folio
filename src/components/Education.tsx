import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    institution: "Sambalpur University Institute of Information Technology",
    degree: "Master of Computer Applications (MCA)",
    university: "Sambalpur University",
    location: "Burla, Sambalpur, Odisha",
    percentage: "65.86%",
    duration: "Nov 2022 – Aug 2024",
  },
  {
    institution: "Jasoda Bishnu College",
    degree: "Bachelor of Science (B.Sc)",
    university: "Sambalpur University",
    location: "Sardhapali, Sundergarh, Odisha",
    percentage: "72.2%",
    duration: "Aug 2018 – April 2021",
  },
  {
    institution: "Vesaja Rambhabati Jr College, Kundukela",
    degree: "12th (Science)",
    university: "CHSE (Council of Higher Secondary Education, Odisha)",
    location: "Kundukela, Odisha",
    duration: "2016 – March 2018",
  },
  {
    institution: "Talpatia High School, Talpatia",
    degree: "10th",
    university: "BSE (Board of Secondary Education, Odisha)",
    location: "Talpatia, Odisha",
    duration: "2006 – February 2016",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic background and educational qualifications.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.institution} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" style={{ top: '24px' }} />
                  
                  <Card className="card-hover-effect md:ml-16">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="font-medium">{edu.institution}</p>
                          <p className="text-muted-foreground text-sm">{edu.university}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.duration}
                            </div>
                          </div>
                          {edu.percentage && (
                            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                              {edu.percentage}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
