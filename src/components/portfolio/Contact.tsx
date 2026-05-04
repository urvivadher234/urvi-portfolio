import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowUpRight, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden">
      {/* Intense glowing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="relative overflow-hidden rounded-[3rem] glass-panel border border-primary/30 p-10 md:p-16 lg:p-20 shadow-[0_0_50px_rgba(var(--primary)_/_0.2)]">
          
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/30 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/40 blur-[100px]" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-mono uppercase tracking-widest mb-8 mx-auto">
              <Zap className="w-4 h-4 text-primary" />
              Open for collaboration
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
              Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">next big thing.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
              Looking for a frontend developer to bring your digital vision to life? I'm ready to craft high-performance, pixel-perfect web experiences. Let's talk.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon h-14 px-8 text-base">
                <a href="mailto:urvivadher234@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  urvivadher234@gmail.com
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full glass-panel hover:bg-white/10 hover:text-white border-white/20 h-14 px-8 text-base text-white"
              >
                <a href="tel:+919898919216">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 98989 19216
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Mail, label: "Email", value: "Send a message", href: "mailto:urvivadher234@gmail.com" },
                { icon: Phone, label: "Phone", value: "Give me a call", href: "tel:+919898919216" },
                { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/urvivadher/" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center p-6 rounded-3xl glass-panel hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <item.icon className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-white flex items-center gap-1 group-hover:text-primary transition-colors">
                    {item.value} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-mono text-muted-foreground border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System Online • All systems nominal
          </div>
          <div className="text-center md:text-left text-white/50">
            © {new Date().getFullYear()} Urvi Vadher. Crafted with code.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-primary transition-colors cursor-default">EN</span>
            <span className="text-white/20">|</span>
            <span className="hover:text-primary transition-colors cursor-default">HI</span>
            <span className="text-white/20">|</span>
            <span className="hover:text-primary transition-colors cursor-default">GU</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
