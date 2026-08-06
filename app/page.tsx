import { Button } from "@/components/button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { navigation, portfolio, projects, skillGroups, socialLinks } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="Hamdi Hassan, back to top">
            Hamdi Hassan<span aria-hidden="true">.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <Button href={portfolio.resumeUrl} variant="outline" className="header-resume" download>
            Resume
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for the right team</p>
            <h1 id="hero-title">Hamdi Hassan</h1>
            <p className="hero-role">AI Product Builder</p>
            <p className="hero-lede">I turn ideas into useful web products using AI.</p>
            <p className="hero-detail">
              I use Claude, ChatGPT, Next.js, TypeScript, Supabase, and Vercel to rapidly build,
              launch, and improve real products.
            </p>
            <div className="hero-actions">
              <Button href="#projects" size="large">View My Work <span aria-hidden="true">↘</span></Button>
              <div className="social-links" aria-label="Social links">
                <a href={socialLinks.github.href} target="_blank" rel="noreferrer">GitHub</a>
                <a href={socialLinks.twitter.href} target="_blank" rel="noreferrer">Twitter/X</a>
                <a href={socialLinks.email.href}>Email</a>
              </div>
            </div>
          </div>

          <aside className="hero-note" aria-label="How Hamdi works">
            <p className="note-label">How I work</p>
            <ol>
              <li><span>01</span><strong>Find the useful problem.</strong></li>
              <li><span>02</span><strong>Build the smallest real version.</strong></li>
              <li><span>03</span><strong>Ship, learn, and improve.</strong></li>
            </ol>
            <p className="note-foot">Strategy → product → launch</p>
          </aside>
        </section>

        <section className="section shell" id="projects" aria-labelledby="projects-title">
          <SectionHeading
            eyebrow="Selected work"
            title="Products built to be used."
            description="From personal software to community directories, I design, build, launch, and keep improving the products I work on."
            id="projects-title"
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <SectionHeading eyebrow="About" title="A builder from idea to launch." id="about-title" />
            <div className="about-copy">
              <p>I am an AI-native product builder based in Minnesota. I use AI tools alongside modern web technologies to turn ideas into working products. I focus on solving useful problems, shipping quickly, and improving products through real-world use.</p>
              <p>My work includes community directories, productivity software, and digital platforms that I continue to operate and improve after launch.</p>
              <p className="location-line"><span aria-hidden="true">●</span> Based in Minnesota · Working remotely</p>
            </div>
          </div>
        </section>

        <section className="section shell" id="skills" aria-labelledby="skills-title">
          <SectionHeading
            eyebrow="Toolkit"
            title="The tools I use to ship."
            description="A practical stack for moving quickly without sacrificing a solid product foundation."
            id="skills-title"
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => <SkillGroup key={group.name} group={group} index={index} />)}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <p className="eyebrow light">Have a product in mind?</p>
            <h2 id="contact-title">Let’s build something useful.</h2>
            <p>I’m open to remote opportunities with founders and teams building AI-powered products.</p>
            <div className="contact-actions">
              <Button href={socialLinks.email.href} variant="light" size="large"><span aria-hidden="true">✉</span> Email me</Button>
              <Button href={portfolio.resumeUrl} variant="light-outline" size="large" download>Download Resume</Button>
            </div>
            <div className="contact-links">
              <a href={socialLinks.email.href}>{socialLinks.email.label}</a>
              <a href={socialLinks.github.href} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialLinks.twitter.href} target="_blank" rel="noreferrer">Twitter/X</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <div><strong>Hamdi Hassan</strong><span>AI Product Builder</span></div>
          <p>© {new Date().getFullYear()} Hamdi Hassan</p>
        </div>
      </footer>
    </>
  );
}
