import { Code2, Palette, Wrench, Users, Layers, Bot } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
    span: "md:col-span-2",
  },
  {
    icon: Bot,
    title: "AI Tools",
    items: ["Flow", "Antigravity", "ChatGPT", "Gemini", "Claude"],
    span: "md:col-span-1",
  },
  {
    icon: Palette,
    title: "Design",
    items: ["Responsive Design", "Cross-Browser", "Canva"],
    span: "md:col-span-1",
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "VS Code", "WordPress", "Social Media"],
    span: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Attention to Detail", "Collaboration", "Time Management", "Strategy"],
    span: "md:col-span-1",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[20%] right-0 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-widest mb-6">
              <Layers className="w-4 h-4" />
              Expertise
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white">
              My technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">arsenal.</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-light max-w-sm">
            A curated list of technologies and tools I use to build scalable, performant web applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {groups.map((g, idx) => (
            <div
              key={g.title}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl glass-panel border border-white/5 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-primary transition-colors">{g.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {g.items.map((it) => (
                    <span 
                      key={it} 
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-medium hover:bg-primary/20 hover:text-white hover:border-primary/40 transition-colors duration-300 cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
