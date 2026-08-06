import { Button } from "@/components/button";
import { FeaturedProject, ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillGroup } from "@/components/skill-group";
import { buildSteps, navigation, pageContent, portfolio, projects, siteConfig, skillGroups, socialLinks } from "@/data/portfolio";

export default function Home() {
  const featuredProject = projects.find((project) => project.featured)!;
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="Hamdi Hassan, back to top">Hamdi Hassan<span aria-hidden="true">.</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          {portfolio.resumeUrl ? (
            <Button href={portfolio.resumeUrl} variant="outline" className="header-resume" download>Resume</Button>
          ) : (
            <span className="button button-outline button-default button-disabled header-resume" aria-disabled="true" title="Resume coming soon">Resume</span>
          )}
        </div>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {portfolio.availability}</p>
            <h1 id="hero-title"><span>{portfolio.name.first}</span><span>{portfolio.name.last}</span></h1>
            <p className="hero-role">{portfolio.title}</p>
            <p className="hero-lede">{pageContent.hero.headline}</p>
            <p className="hero-detail">{pageContent.hero.supporting}</p>
            <div className="hero-actions">
              <Button href="#projects" size="large">{pageContent.hero.primaryAction} <span aria-hidden="true">↘</span></Button>
              <div className="social-links" aria-label="Social links">
                <a href={socialLinks.github.href} target="_blank" rel="noreferrer">{socialLinks.github.label}</a>
                <a href={socialLinks.twitter.href} target="_blank" rel="noreferrer">{socialLinks.twitter.label}</a>
                <a href={socialLinks.email.href}>{socialLinks.email.label}</a>
              </div>
            </div>
          </div>

          <aside className="hero-note" aria-label="Hamdi's product-building process">
            <p className="note-label">{pageContent.hero.processLabel}</p>
            <ol>{buildSteps.map((step) => <li key={step.number}><span>{step.number}</span><strong>{step.title}</strong></li>)}</ol>
            <p className="note-foot">{pageContent.hero.processFooter}</p>
          </aside>
        </section>

        <section className="section shell" id="projects" aria-labelledby="projects-title">
          <SectionHeading eyebrow={pageContent.projects.eyebrow} title={pageContent.projects.title} description={pageContent.projects.description} id="projects-title" />
          <FeaturedProject project={featuredProject} />
          <div className="secondary-projects-heading"><span>More products</span><span>Built, launched, and maintained</span></div>
          <div className="project-list">
            {secondaryProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <SectionHeading eyebrow={pageContent.about.eyebrow} title={pageContent.about.title} id="about-title" />
            <div className="about-copy">
              {pageContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="location-line"><span aria-hidden="true">●</span> {portfolio.location}</p>
            </div>
          </div>
        </section>

        <section className="section shell build-section" aria-labelledby="build-title">
          <SectionHeading eyebrow={pageContent.howIbuild.eyebrow} title={pageContent.howIbuild.title} description={pageContent.howIbuild.description} id="build-title" />
          <div className="build-grid">
            {buildSteps.map((step) => (
              <article className="build-step" key={step.number}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="skills" aria-labelledby="skills-title">
          <SectionHeading eyebrow={pageContent.skills.eyebrow} title={pageContent.skills.title} description={pageContent.skills.description} id="skills-title" />
          <div className="skills-grid">{skillGroups.map((group, index) => <SkillGroup key={group.name} group={group} index={index} />)}</div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <p className="eyebrow light">{pageContent.contact.eyebrow}</p>
            <h2 id="contact-title">{pageContent.contact.title}</h2>
            <p>{pageContent.contact.description}</p>
            <div className="contact-actions">
              <Button href={socialLinks.email.href} variant="light" size="large"><span aria-hidden="true">✉</span> Email Me</Button>
              <Button href="/projects/hamdi-os" variant="light-outline" size="large">View Hamdi OS</Button>
            </div>
            <div className="contact-links">
              <a href={socialLinks.github.href} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialLinks.twitter.href} target="_blank" rel="noreferrer">Twitter/X</a>
              {portfolio.resumeUrl && <a href={portfolio.resumeUrl} download>Resume</a>}
            </div>
          </div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><div><strong>{siteConfig.name}</strong><span>{siteConfig.title}</span></div><p>© {new Date().getFullYear()} {siteConfig.name}</p></div></footer>
    </>
  );
}
