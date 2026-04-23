import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Blood Bank Management System",
    description:
      "A web-based system to manage donor records and blood inventory with registration, blood group filtering, and search built using React Hooks.",
    tags: ["React.js", "JavaScript", "Hooks"],
    link: null,
  },
  {
    number: "02",
    title: "Library Management System",
    description:
      "A clean library app to add, update, delete, and search books with dynamic UI rendering and a component-based architecture for scalability.",
    tags: ["React.js", "Components", "CRUD"],
    link: null,
  },
  {
    number: "03",
    title: "E-commerce Website",
    description:
      "A responsive e-commerce app with product listing, filtering, cart functionality and reusable UI components built with React.js.",
    tags: ["React.js", "Responsive", "Cart"],
    link: "https://github.com/urvivadher234/Tops-assignmnet",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-widest text-primary mb-4">Projects</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              Selected <span className="italic text-gradient">work.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A handful of projects where I've practiced React, state management, and clean UI design.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((p) => (
            <article
              key={p.number}
              className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-primary/40 shadow-card hover:shadow-soft transition-smooth"
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                <div className="font-serif text-3xl md:text-4xl text-muted-foreground/60">
                  {p.number}
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight group-hover:text-gradient transition-smooth">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:justify-end">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-smooth"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      View code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      Case study soon <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
