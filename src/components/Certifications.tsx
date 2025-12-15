import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Python 101 for Data Science",
    platform: "IBM / Cognitive Class",
    date: "",
    description: "Foundational Python programming for data science including syntax, data types, functions, loops, and file handling.",
    color: "bg-blue-500",
  },
  {
    title: "Data Analysis with Python",
    platform: "Cognitive Class",
    date: "Nov 2025",
    description: "Completed IBM's Data Analysis with Python course, learning to clean, transform, analyze, and visualize data using Pandas, NumPy, and more.",
    color: "bg-blue-600",
  },
  {
    title: "Generative AI Mastermind",
    platform: "Outskill",
    date: "Nov 2025",
    description: "Completed the Generative AI Mastermind program covering Prompt Engineering, AI Automation, and Productivity Software.",
    color: "bg-violet-500",
  },
  {
    title: "The Complete Python Bootcamp From Zero to Hero",
    platform: "Udemy",
    date: "Oct 2025",
    description: "Full Python bootcamp covering fundamentals to advanced concepts including data types, functions, and object-oriented programming.",
    color: "bg-purple-500",
  },
  {
    title: "Git / GitHub",
    platform: "Udemy",
    date: "Aug 2025",
    description: "Learned Git fundamentals including repositories, staging, branching, merging, and resolving conflicts for version control.",
    color: "bg-gray-700",
  },
  {
    title: "Linux Command Line Terminal Basic for Beginners",
    platform: "Udemy",
    date: "Aug 2025",
    description: "Essential Linux command-line operations for development, automation, and server environments including navigation and file management.",
    color: "bg-amber-600",
  },
  {
    title: "Machine Learning Certification",
    platform: "TEACHNOOK / IIT Roorkee",
    date: "May 2024",
    description: "Machine Learning course covering AI, Data Analysis, Python programming, and Deep Learning in collaboration with Cognizance'24.",
    color: "bg-emerald-500",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating expertise in data science and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="card-hover-effect">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${cert.color}`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">{cert.platform}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
