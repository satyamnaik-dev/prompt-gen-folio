import { useEffect, useState, useRef } from "react";

const skills = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "R", level: 80, category: "Languages" },
  { name: "SQL", level: 90, category: "Languages" },
  { name: "Java (Core)", level: 75, category: "Languages" },
  { name: "JavaScript", level: 78, category: "Languages" },
  { name: "NumPy / Pandas", level: 92, category: "Data Science" },
  { name: "Scikit-learn", level: 88, category: "Data Science" },
  { name: "TensorFlow / PyTorch", level: 82, category: "Data Science" },
  { name: "Matplotlib / Seaborn", level: 90, category: "Data Science" },
  { name: "MySQL / PostgreSQL", level: 88, category: "Databases" },
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "Spark (PySpark)", level: 75, category: "Big Data" },
  { name: "AWS (S3, EC2, SageMaker)", level: 70, category: "Cloud" },
  { name: "Docker", level: 72, category: "DevOps" },
  { name: "Git / GitHub", level: 90, category: "DevOps" },
];

const categoryColors: Record<string, string> = {
  Languages: "bg-primary",
  "Data Science": "bg-violet-500",
  Databases: "bg-emerald-500",
  "Big Data": "bg-amber-500",
  Cloud: "bg-sky-500",
  DevOps: "bg-rose-500",
};

export function Skills() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(skills.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[index] = skill.level;
                return newValues;
              });
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
            <p className="text-xl text-muted-foreground">
              A snapshot of my expertise across different technologies and tools.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[category]}`} />
                <span className="text-sm text-muted-foreground">{category}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{animatedValues[index]}%</span>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${categoryColors[skill.category]}`}
                    style={{ width: `${animatedValues[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
