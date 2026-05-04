import { GraduationCap, Briefcase, Award, Milestone } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    period: "Jan 2025 — Present",
    title: "Front-End Developer & Content Manager",
    place: "Confidential Career",
    points: [
      "Collaborate with cross-functional teams to implement user-friendly features.",
      "Manage digital content and optimize brand presence across online platforms.",
      "Enhance SEO and improve traffic through performance optimization.",
    ],
    highlight: false,
  },
  {
    icon: GraduationCap,
    period: "Sept 2022 — May 2025",
    title: "B.E. in Computer Engineering",
    place: "Government Engineering College, Modasa",
    points: ["Bachelor of Engineering — Computer Engineering, Gujarat."],
    highlight: false,
  },
  {
    icon: GraduationCap,
    period: "Jul 2019 — Sept 2021",
    title: "Diploma in Computer Engineering",
    place: "R.C. Technical Institute, Ahmedabad",
    points: ["Foundation in computer engineering and programming."],
    highlight: false,
  },
  {
    icon: Award,
    period: "Certifications",
    title: "React.js Course",
    place: "Tops Technology Pvt. Ltd. · 2023",
    points: ["Comprehensive React.js frontend development program."],
    highlight: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          
          {/* Sticky Header Section */}
          <div className="lg:sticky lg:top-32 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-widest w-fit">
              <Milestone className="w-4 h-4" />
              Timeline
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">academic & professional</span> path.
            </h2>
            <p className="text-muted-foreground font-light text-lg max-w-md">
              A timeline of my journey, from foundational engineering studies to shipping live software products like Taplog.
            </p>
            
            <div className="hidden lg:block mt-8 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
          </div>

          {/* Scrolling Cards Section */}
          <div className="space-y-8">
            {items.map((it, i) => (
              <div 
                key={i} 
                className={`group relative ${it.highlight ? 'p-[1px]' : ''}`}
              >
                {it.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                )}
                
                <div className={`relative flex flex-col sm:flex-row gap-6 sm:gap-8 p-8 rounded-[2rem] glass-panel transition-all duration-500 ${it.highlight ? 'bg-background/95 border-none' : 'border border-white/5 hover:border-primary/40'}`}>
                  
                  {/* Icon & Line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${it.highlight ? 'bg-primary/20 text-primary border border-primary/30 shadow-neon' : 'bg-white/5 border border-white/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30'}`}>
                      <it.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="text-xs font-mono uppercase tracking-widest text-primary/80 mb-3">
                      {it.period}
                    </div>
                    <h3 className={`font-serif text-2xl font-bold mb-2 transition-colors duration-300 ${it.highlight ? 'text-white' : 'text-white/90 group-hover:text-primary'}`}>
                      {it.title}
                    </h3>
                    <div className="text-muted-foreground font-medium mb-4 text-sm md:text-base">
                      {it.place}
                    </div>
                    
                    {it.points.length > 0 && (
                      <ul className="space-y-3 text-muted-foreground font-light text-sm leading-relaxed">
                        {it.points.map((p, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-colors ${it.highlight ? 'bg-primary' : 'bg-primary/50 group-hover:bg-primary'}`} />
                            <span className="group-hover:text-white/90 transition-colors">{p}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
