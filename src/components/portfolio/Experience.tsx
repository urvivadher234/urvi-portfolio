import { GraduationCap, Briefcase, Award } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    period: "Jan 2025 — Present",
    title: "Front-End Developer & Digital Content Manager",
    place: "Confidential Career",
    points: [
      "Collaborate with cross-functional teams to implement user-friendly features.",
      "Manage digital content and optimize brand presence across online platforms.",
      "Enhance SEO and improve traffic through performance optimization.",
      "Develop and maintain responsive web interfaces with JavaScript.",
    ],
  },
  {
    icon: GraduationCap,
    period: "Sept 2022 — May 2025",
    title: "B.E. in Computer Engineering",
    place: "Government Engineering College, Modasa",
    points: ["Bachelor of Engineering — Computer Engineering, Gujarat."],
  },
  {
    icon: GraduationCap,
    period: "Jul 2019 — Sept 2021",
    title: "Diploma in Computer Engineering",
    place: "R.C. Technical Institute, Ahmedabad",
    points: ["Foundation in computer engineering and programming."],
  },
  {
    icon: Award,
    period: "Certifications",
    title: "React.js Course",
    place: "Tops Technology Pvt. Ltd. · Finishing School Program 2023",
    points: [],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-sm uppercase tracking-widest text-primary mb-4">Journey</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
            Experience & <span className="italic text-gradient">education.</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" aria-hidden />
          <ol className="space-y-10">
            {items.map((it, i) => (
              <li key={i} className="relative pl-20">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-card border border-border shadow-card flex items-center justify-center">
                  <it.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {it.period}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold">{it.title}</h3>
                <div className="text-muted-foreground mb-3">{it.place}</div>
                {it.points.length > 0 && (
                  <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-outside ml-5">
                    {it.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
