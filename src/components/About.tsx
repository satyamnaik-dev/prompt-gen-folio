import { Code, Database, Brain, BarChart3, Cloud, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "Proficient in Python, R, SQL, Java (Core), and JavaScript for building robust applications and data solutions.",
  },
  {
    icon: Brain,
    title: "Data Science & ML",
    description: "Expert in NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch. Building predictive models and intelligent systems.",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Experienced with MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval at scale.",
  },
  {
    icon: BarChart3,
    title: "Big Data & Tools",
    description: "Working with Hadoop, Spark (PySpark), Jupyter Notebook, and Anaconda for large-scale data processing.",
  },
  {
    icon: Wrench,
    title: "DevOps & Deployment",
    description: "Skilled in Git, GitHub, Docker, Streamlit, and Flask APIs for seamless deployment and version control.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "Experience with AWS (S3, EC2, SageMaker) and Google Colab for scalable cloud-based solutions.",
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
              Specializing in data engineering, machine learning, and building end-to-end data solutions with modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
