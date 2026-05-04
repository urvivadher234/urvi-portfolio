import { Code, TerminalSquare, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-widest">
              <TerminalSquare className="w-4 h-4" />
              About Me
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">pixel-perfect</span> solutions.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                I'm a frontend developer with a robust foundation in HTML, CSS, and JavaScript. My playground is <strong className="text-white font-medium">React.js</strong>, where I love architecting responsive, state-driven interfaces and modular components that scale elegantly.
              </p>
              <p>
                Currently serving as a <strong className="text-white font-medium">Front-End Developer & Digital Content Manager</strong>, I bridge the gap between design and engineering. I collaborate closely with cross-functional teams to deploy user-centric features, optimize web performance, and elevate brand presence across digital platforms.
              </p>
            </div>
            
            <div className="pt-4 flex items-center gap-4 text-sm font-mono text-primary">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" /> Clean Code
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" /> High Performance
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative p-1 glass-panel rounded-3xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-background/80 backdrop-blur-xl border border-white/5 rounded-[1.4rem] p-8 space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="font-mono text-sm text-primary">urvi_vadher_profile.json</div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>
                
                <div className="font-mono text-sm leading-loose">
                  <div className="flex"><span className="text-accent w-24">const</span> <span className="text-primary">developer</span> <span className="text-white mx-2">=</span> <span className="text-yellow-300">&#123;</span></div>
                  <div className="flex pl-6"><span className="text-white w-24">name:</span> <span className="text-green-400">"Urvi Vadher"</span><span className="text-white">,</span></div>
                  <div className="flex pl-6"><span className="text-white w-24">role:</span> <span className="text-green-400">"Frontend Dev"</span><span className="text-white">,</span></div>
                  <div className="flex pl-6"><span className="text-white w-24">status:</span> <span className="text-green-400">"Available"</span><span className="text-white">,</span></div>
                  <div className="flex pl-6"><span className="text-white w-24">traits:</span> <span className="text-blue-400">[</span></div>
                  <div className="flex pl-12"><span className="text-green-400">"Always learning"</span><span className="text-white">,</span></div>
                  <div className="flex pl-12"><span className="text-green-400">"Always shipping"</span><span className="text-white">,</span></div>
                  <div className="flex pl-12"><span className="text-green-400">"Always curious"</span></div>
                  <div className="flex pl-6"><span className="text-blue-400">]</span></div>
                  <div className="flex"><span className="text-yellow-300">&#125;</span><span className="text-white">;</span></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
