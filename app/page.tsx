import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import FreelanceCard from "@/components/FreelanceCard";
import WorkCard from "@/components/WorkCard";
import WorkflowCanvas from "@/components/WorkflowCanvas";
import {
  achievements,
  certifications,
  education,
  freelance,
  jobs,
  profile,
  stack,
  work,
} from "@/data/profile";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Rows({ title, rows }: { title: string; rows: { name: string; date: string }[] }) {
  return (
    <Reveal className="list">
      <h4>{title}</h4>
      {rows.map((r) => (
        <div className="row" key={r.name}>
          <div>{r.name}</div>
          <span>{r.date}</span>
        </div>
      ))}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav">
          <a className="logo" href="#top">
            <i>{profile.initials}</i> {profile.short}
          </a>
          <div className="links">
            <a href="#work">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#freelance">Freelance</a>
            <a href="#stack">Stack</a>
            <a href="#proof">Certifications</a>
          </div>
          <a className="btn primary" href="#contact">
            Let&apos;s talk →
          </a>
        </div>
      </nav>

      <main>
        <header className="wrap hero" id="top">
          <Reveal className="pill">
            <span className="dot" /> Open to opportunities · {profile.location}
          </Reveal>
          <Reveal as="h1">
            {profile.headline.lead} <span>{profile.headline.accent}</span>
          </Reveal>
          <Reveal as="p">{profile.intro}</Reveal>
          <Reveal className="cta">
            <a className="btn primary" href="#projects">
              See my work
            </a>
            {profile.resume && (
              <a className="btn" href={`${base}/${profile.resume}`} download>
                Download résumé ↓
              </a>
            )}
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </Reveal>
          <Reveal>
            <WorkflowCanvas />
          </Reveal>
          <Stats />
        </header>

        <section id="work">
          <div className="wrap">
            <Reveal className="eyebrow">Experience</Reveal>
            <Reveal as="h2">Where I&apos;ve shipped.</Reveal>

            {jobs.map((job) => (
              <Reveal className="job" key={job.company}>
                <div className="when">
                  <strong>{job.when}</strong>
                  {job.where}
                  {job.current && (
                    <>
                      <br />
                      <span className="tag">● Current</span>
                    </>
                  )}
                </div>
                <div>
                  <h3>{job.company}</h3>
                  <div className="role">{job.role}</div>
                  {job.bullets && (
                    <ul>
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {job.chips && (
                    <div className="chips">
                      {job.chips.map((c) => (
                        <span className="chip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                  {job.projects?.map((p) => (
                    <div className="proj" key={p.name}>
                      <h4>
                        {p.name} <small>{p.sub}</small>
                      </h4>
                      <p className="pstack">
                        <b>Technology Stack:</b> {p.stack}
                      </p>
                      <ul>
                        {p.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <Reveal className="eyebrow">Selected work</Reveal>
            <Reveal as="h2">Things I&apos;m proud of.</Reveal>
            <Reveal as="p" className="lead">
              A few systems where architecture decisions mattered most.
            </Reveal>
            <div className="grid">
              {work.map((w) => (
                <WorkCard item={w} key={w.num} />
              ))}
            </div>
          </div>
        </section>

        <section id="freelance">
          <div className="wrap">
            <Reveal className="eyebrow">Freelance</Reveal>
            <Reveal as="h2">Client work.</Reveal>
            <Reveal as="p" className="lead">
              Websites and web apps I build and deploy for small businesses, alongside my full-time role, plus many one-off landing pages.
            </Reveal>
            <div className="clients">
              {freelance.map((c) => (
                <FreelanceCard client={c} key={c.name} />
              ))}
            </div>
            <Reveal as="p" className="more">
              …and many more landing pages for small businesses.
            </Reveal>
          </div>
        </section>

        <section id="stack">
          <div className="wrap">
            <Reveal className="eyebrow">Toolbox</Reveal>
            <Reveal as="h2">The stack.</Reveal>
            <div className="stack">
              {stack.map((g) => (
                <Reveal className="group" key={g.title}>
                  <h4>{g.title}</h4>
                  <div className="chips" style={{ margin: 0 }}>
                    {g.items.map((i) => (
                      <span className="chip" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="proof">
          <div className="wrap">
            <Reveal className="eyebrow">Credentials</Reveal>
            <Reveal as="h2">Proof, not promises.</Reveal>
            <div className="two">
              <Rows title="Certifications" rows={certifications} />
              <Rows title="Achievements" rows={achievements} />
            </div>
            <Reveal className="list" >
              <h4>Education</h4>
              <div className="row">
                <div>
                  {education.name}
                  <br />
                  <small style={{ color: "var(--mute)" }}>{education.note}</small>
                </div>
                <span>{education.date}</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <Reveal className="contact">
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                Contact
              </div>
              <h2>Have something worth building?</h2>
              <p className="lead" style={{ margin: "0 auto" }}>
                I&apos;m happy to talk about backend architecture, cloud infrastructure or AI workflows.
              </p>
              <Contact />
              <div className="cta">
                <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with Next.js · Hosted on GitHub Pages</span>
        </div>
      </footer>
    </>
  );
}
