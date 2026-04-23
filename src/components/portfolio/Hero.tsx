import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-warm opacity-30 blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-accent opacity-40 blur-3xl" />

      <div className="container relative grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Available for new opportunities</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
            Crafting
            <br />
            <span className="text-gradient italic">delightful</span>
            <br />
            web experiences.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Hi, I'm <span className="text-foreground font-medium">Urvi Vadher</span> — a frontend developer
            who loves turning ideas into responsive, accessible interfaces with React, JavaScript, and a
            keen eye for detail.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full group">
              <a href="#projects">
                View my work
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm">
            <div>
              <div className="font-serif text-3xl font-semibold">3+</div>
              <div className="text-muted-foreground">Projects shipped</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-serif text-3xl font-semibold">B.E.</div>
              <div className="text-muted-foreground">Computer Engineering</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-serif text-3xl font-semibold">React</div>
              <div className="text-muted-foreground">Specialist</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-warm rounded-[3rem] rotate-6 opacity-60 blur-2xl" />
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glow border border-border/50">
            <img
              src={portrait}
              alt="Urvi Vadher portrait illustration"
              width={896}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-card animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-serif font-semibold">
                ⚛
              </div>
              <div>
                <div className="text-sm font-medium">React.js</div>
                <div className="text-xs text-muted-foreground">My playground</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
