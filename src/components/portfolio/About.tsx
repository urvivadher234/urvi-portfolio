const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <div className="text-sm uppercase tracking-widest text-primary mb-4">About</div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
            A little<br />
            <span className="italic text-gradient">about me.</span>
          </h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a frontend developer with a strong foundation in HTML, CSS, and JavaScript, and hands-on
            experience building React.js applications. I love designing responsive interfaces, reusable
            components, and modern layouts that just feel right.
          </p>
          <p>
            Currently working as a Front-End Developer & Digital Content Manager, I collaborate with
            cross-functional teams to ship user-friendly features, improve SEO, and strengthen brand
            presence across the web.
          </p>
          <p className="text-foreground">
            Always learning. Always shipping. Always curious.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
