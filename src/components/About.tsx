import { Code, Database, Brain, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Backend Development",
    description: "Expert in Python, FastAPI, Django, and RESTful API design. Building scalable microservices and server-side applications.",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    description: "Developing autonomous AI agents, LLM integrations, and intelligent automation systems using modern frameworks.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing data pipelines, ETL processes, and working with PostgreSQL, MongoDB, and data warehousing solutions.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Bridging frontend and backend with React, TypeScript, and modern web technologies for complete solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise & Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in backend systems, AI integration, and data solutions with a focus on performance and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card key={skill.title} className="card-hover-effect border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
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
