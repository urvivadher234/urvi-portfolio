import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <nav
        className={`pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500 border ${
          scrolled
            ? "glass-panel shadow-glow scale-95"
            : "bg-transparent border-transparent scale-100"
        }`}
      >
        <a href="#top" className="font-serif text-xl font-bold tracking-tight text-white hover:text-primary transition-smooth">
          Urvi<span className="text-primary">.</span>
        </a>
        
        <div className="w-px h-6 bg-white/20 hidden md:block" />

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-white transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-px h-6 bg-white/20 hidden md:block" />

        <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 shadow-neon">
          <a href="#contact">Hire Me</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
