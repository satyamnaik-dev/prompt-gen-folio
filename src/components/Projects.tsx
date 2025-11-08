import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Agent Framework",
    description: "Built an autonomous agent system using LangChain and GPT-4 for task automation and decision-making workflows.",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
    demo: "#",
    github: "#",
  },
  {
    title: "Data Pipeline Platform",
    description: "Designed and implemented a real-time ETL pipeline processing millions of events daily with Apache Kafka and PostgreSQL.",
    tags: ["Python", "Kafka", "PostgreSQL", "Docker"],
    demo: "#",
    github: "#",
  },
  {
    title: "Analytics API",
    description: "RESTful API serving analytics data with caching, authentication, and rate limiting for high-traffic applications.",
    tags: ["FastAPI", "Redis", "MongoDB", "JWT"],
    demo: "#",
    github: "#",
  },
  {
    title: "ML Model Deployment",
    description: "End-to-end ML pipeline for training, versioning, and deploying models with automated retraining and monitoring.",
    tags: ["Python", "Scikit-learn", "MLflow", "AWS"],
    demo: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing backend architecture, AI integration, and data solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="card-hover-effect">
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
