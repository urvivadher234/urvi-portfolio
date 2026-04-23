import { Code2, Palette, Wrench, Users } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["Responsive Design", "Cross-Browser", "Canva"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "VS Code", "WordPress", "Social Media Tools"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Attention to Detail", "Collaboration", "Time Management", "Content Strategy"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Skills</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
            What I bring to <span className="italic text-gradient">the table.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-smooth"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <g.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">{g.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="text-sm">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
