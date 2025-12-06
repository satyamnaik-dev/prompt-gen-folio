import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "IBM Data Science Professional Certificate",
    platform: "Coursera",
    date: "Aug 2025",
    description: "Completed 9 courses covering Python for DS, SQL, Data Analysis, Visualization, and ML models.",
    color: "bg-blue-500",
  },
  {
    title: "Machine Learning A-Z: Hands-On Python & R",
    platform: "Udemy",
    date: "May 2025",
    description: "Hands-on experience building ML models including regression, classification, clustering, and reinforcement learning.",
    color: "bg-violet-500",
  },
  {
    title: "Deep Learning Specialization",
    platform: "Coursera - Andrew Ng",
    date: "Mar 2025",
    description: "Implemented neural networks, CNNs, RNNs, and LSTMs using TensorFlow/Keras.",
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
