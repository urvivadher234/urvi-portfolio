import { ExternalLink, Github, Loader2, FolderGit2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taplogProject: Project = {
      number: "01",
      title: "Taplog",
      description: "A WhatsApp commerce platform allowing small businesses to create digital product catalogs and drive direct sales via WhatsApp.",
      tags: ["Freelance", "E-commerce", "React", "Web"],
      link: "https://taplog.in"
    };

    fetch("https://api.github.com/users/urvivadher234/repos")
      .then((res) => res.json())
      .then((data) => {
        // Filter out the portfolio itself and any forks if needed, and map to Project interface
        const formattedProjects = data
          .filter((repo: any) => repo.name !== "urvi-portfolio" && !repo.fork)
          .map((repo: any, index: number) => ({
            number: String(index + 2).padStart(2, "0"),
            title: repo.name
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l: string) => l.toUpperCase()),
            description:
              repo.description ||
              "A dynamic frontend application built with a focus on clean UI, responsiveness, and state management.",
            tags: repo.language ? [repo.language, "Frontend", "Web"] : ["Frontend", "Web"],
            link: repo.html_url,
          }));
        setProjects([taplogProject, ...formattedProjects]);
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub repos", err);
        setProjects([taplogProject]); // Fallback to at least show Taplog
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-[30%] left-[5%] w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-widest mb-6">
              <FolderGit2 className="w-4 h-4" />
              Portfolio
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">projects.</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-light max-w-sm text-lg">
            A live feed of my latest open-source contributions and frontend experiments straight from GitHub.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary shadow-neon rounded-full" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <article
                key={p.number}
                className="group relative h-full"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative h-full flex flex-col p-8 rounded-[2rem] glass-panel hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="font-serif text-8xl font-black text-white">{p.number}</span>
                  </div>

                  <div className="relative z-10 flex-grow space-y-6">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg">
                      {p.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-10 mt-auto flex items-center justify-between border-t border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors duration-300"
                        aria-label={`View ${p.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                        Explore Source Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
                        Private Repository
                      </span>
                    )}
                    
                    {p.link && (
                      <a 
                        href={p.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
