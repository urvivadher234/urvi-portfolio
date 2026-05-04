import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Decorative neon blobs */}
      <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="space-y-10 animate-fade-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel text-sm font-medium border-primary/30 text-primary shadow-[0_0_15px_rgba(var(--primary)_/_0.2)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight">
            Building the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">
              digital future
            </span>
            <br />
            with code.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
            I'm <strong className="text-white font-medium">Urvi Vadher</strong>, a Frontend Developer crafting immersive, ultra-responsive web experiences fueled by <span className="text-primary font-mono text-base px-1.5 py-0.5 rounded bg-primary/10">React.js</span>.
          </p>

          <div className="flex flex-wrap gap-5">
            <Button asChild size="lg" className="rounded-full group bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon h-14 px-8 text-base">
              <a href="#projects">
                View my work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-smooth" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full glass-panel hover:bg-white/10 hover:text-white border-white/20 h-14 px-8 text-base text-white">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="flex items-center gap-10 pt-6">
            <div>
              <div className="font-serif text-4xl font-bold text-white tracking-tight">3<span className="text-primary">+</span></div>
              <div className="text-sm text-muted-foreground font-medium mt-1">Projects shipped</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="font-serif text-4xl font-bold text-white tracking-tight">React</div>
              <div className="text-sm text-muted-foreground font-medium mt-1">Specialist</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="font-serif text-4xl font-bold text-white tracking-tight">B.E.</div>
              <div className="text-sm text-muted-foreground font-medium mt-1">Computer Eng.</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-md">
            {/* Glowing frame behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2.5rem] blur-xl opacity-40 animate-pulse" />
            
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-panel border border-white/20 p-2 z-10">
              <img
                src={portrait}
                alt="Urvi Vadher portrait"
                width={896}
                height={1024}
                className="w-full h-full object-cover rounded-[2rem] shadow-inner"
              />
              
              {/* Overlay gradient for tech feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Floating tech badge */}
            <div className="absolute -bottom-6 -left-8 glass-panel rounded-2xl p-4 shadow-xl z-20 animate-float border-primary/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-neon">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Frontend Dev</div>
                  <div className="text-xs text-primary font-mono">&lt;Code /&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
