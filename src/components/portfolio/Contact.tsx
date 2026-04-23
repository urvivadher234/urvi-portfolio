import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm p-10 md:p-16 lg:p-20 shadow-glow">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-background/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="text-sm uppercase tracking-widest text-primary-foreground/80 mb-4">
              Contact
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-primary-foreground leading-[1.05] mb-6">
              Let's build something <span className="italic">beautiful</span> together.
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-xl mb-10">
              I'm open to frontend developer roles and freelance React projects. Drop me a line — I'd love
              to hear from you.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <a href="mailto:urvivadher234@gmail.com">
                  <Mail className="w-4 h-4" />
                  Email me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="tel:+919898919216">
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-primary-foreground">
              <a
                href="mailto:urvivadher234@gmail.com"
                className="group flex items-start gap-3 p-4 rounded-2xl bg-background/10 hover:bg-background/20 transition-smooth backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider opacity-70">Email</div>
                  <div className="text-sm font-medium truncate">urvivadher234@gmail.com</div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="tel:+919898919216"
                className="group flex items-start gap-3 p-4 rounded-2xl bg-background/10 hover:bg-background/20 transition-smooth backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Phone</div>
                  <div className="text-sm font-medium">+91 98989 19216</div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
              <a
                href="#"
                className="group flex items-start gap-3 p-4 rounded-2xl bg-background/10 hover:bg-background/20 transition-smooth backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Social</div>
                  <div className="text-sm font-medium">LinkedIn</div>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Urvi Vadher. Crafted with care.</div>
          <div>Hindi · English · Gujarati</div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
