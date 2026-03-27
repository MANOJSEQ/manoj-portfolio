import React, { useMemo, useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'NewsGlobe360',
      category: 'Analytics',
      shortDescription:
        'Multilingual news analytics and geospatial visualisation platform built with NLP, APIs, and interactive frontend engineering.',
      tools: ['Python', 'FastAPI', 'React', 'CesiumJS', 'NLP'],
      problem:
        'News data is noisy, multilingual, and difficult to explore quickly across topics and regions.',
      approach:
        'Built an end-to-end platform using NLP pipelines, API engineering, language detection, sentiment analysis, and interactive visualisation.',
      outcome:
        'Created a product-style dissertation project that combines data engineering, NLP, and user-facing analytics.',
      github: 'https://github.com/MANOJSEQ/newsglobe-frontend',
      demo: 'https://newsglobe-frontend.vercel.app/',
      status: 'Live',
      tag: 'Featured · MSc Dissertation',
    },
    {
      title: 'British Airways — Demand Forecasting',
      category: 'Machine Learning',
      shortDescription:
        'Predictive ML project focused on customer behaviour and demand forecasting using Python workflows.',
      tools: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
      problem:
        'Operational teams need better forecasting to improve planning and customer experience.',
      approach:
        'Cleaned and prepared data, engineered features, and compared predictive approaches to improve performance.',
      outcome:
        'Produced a structured machine learning workflow and communicated results clearly in a stakeholder-friendly format.',
      github: '',
      demo: '',
      status: 'Coming Soon',
      tag: 'Predictive ML · Forage',
    },
    {
      title: 'Quantium — Retail Analytics',
      category: 'Analytics',
      shortDescription:
        'Retail analytics project comparing trial and control store performance to support business recommendations.',
      tools: ['Python', 'Excel', 'Statistics', 'Data Viz'],
      problem:
        'The goal was to evaluate whether trial stores performed differently from comparable control stores.',
      approach:
        'Used analysis, comparison logic, and clear reporting to turn raw retail data into decision-friendly findings.',
      outcome:
        'Delivered clear recommendations and focused on communicating business value, not just technical output.',
      github: '',
      demo: '',
      status: 'Coming Soon',
      tag: 'Data Analytics · Forage',
    },
  ];

  const categories = ['All', 'Analytics', 'Machine Learning'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = search.toLowerCase();
      const searchMatch =
        project.title.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.tools.join(' ').toLowerCase().includes(q);

      return categoryMatch && searchMatch;
    });
  }, [projects, search, selectedCategory]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(29,228,198,0.08),transparent_25%),radial-gradient(circle_at_left,rgba(245,183,49,0.06),transparent_20%),linear-gradient(to_bottom,#06080f,#0c0f1a,#06080f)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <nav className="sticky top-0 z-30 flex items-center justify-between py-6 backdrop-blur-xl border-b border-white/10 bg-[rgba(6,8,15,0.72)]">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--teal)]">
            // manoj.sequeira
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--teal)] transition">
              About
            </a>
            <a href="#projects" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--teal)] transition">
              Projects
            </a>
            <a href="#experience" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--teal)] transition">
              Experience
            </a>
            <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--teal)] transition">
              Contact
            </a>
            <a
              href="https://github.com/MANOJSEQ"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--teal)] transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-sequeira/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-[var(--teal)] transition"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <section className="min-h-screen grid md:grid-cols-2 items-center pt-10 pb-16 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] mb-6">
              <span className="block h-px w-6 bg-[var(--muted)]" />
              Data Science & AI · Liverpool, UK
            </div>

            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] font-normal">
              <span className="italic text-[var(--teal)]">Manoj</span>
              <br />
              Alexius
              <br />
              Sequeira
            </h1>

            <p className="mt-4 font-mono text-sm text-[var(--teal)] uppercase tracking-[0.2em]">
              Data Science · Machine Learning · NLP
            </p>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[var(--muted)]">
              I build machine learning, analytics, and NLP systems that turn messy
              data into clear decisions. Currently completing my MSc in Data Science
              & AI at the University of Liverpool, with 3 years of engineering
              experience at Accenture.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="bg-[var(--teal)] text-black px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] font-medium hover:-translate-y-0.5 transition"
              >
                View my work
              </a>
              <a
                href="mailto:manojsequeira17@gmail.com"
                className="border border-[var(--border2)] text-[var(--muted)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] hover:text-white hover:border-white/30 transition"
              >
                Contact me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--border2)] text-[var(--muted)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] hover:text-white hover:border-white/30 transition"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-24">
          {[
            ['3', 'Years Industry Experience'],
            ['25', '% Process Improvement'],
            ['3', 'Core Projects'],
            ['2', 'Sec API Response'],
          ].map(([num, label]) => (
            <div key={label} className="bg-[var(--bg2)] px-8 py-8">
              <div className="font-display text-5xl leading-none text-[var(--teal)]">
                {num}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                {label}
              </div>
            </div>
          ))}
        </div>

        <section id="about" className="py-24">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--teal)]">
              01 —
            </span>
            <h2 className="font-display text-5xl font-normal">About me</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-[5fr_4fr] gap-16">
            <div className="space-y-5 text-[var(--muted)] leading-8 text-[16px]">
              <p>
                I’m a <span className="text-[var(--ink)] font-medium">Data Science & AI postgraduate</span> with an engineering background and 3 years of professional experience at <span className="text-[var(--ink)] font-medium">Accenture</span>.
              </p>
              <p>
                At Accenture, I worked on automation, data validation, and API migration support, reducing manual effort by 25% and collaborating with engineering and product teams in a real production environment.
              </p>
              <p>
                My dissertation project, <span className="text-[var(--ink)] font-medium">NewsGlobe360</span>, combines NLP, API engineering, and geospatial visualisation. I’m most interested in building projects that connect strong technical work with useful decision-making.
              </p>
              <p className="text-[var(--ink)] font-medium">
                I focus on building projects that are not only technically strong, but also usable, scalable, and meaningful.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <a href="mailto:manojsequeira17@gmail.com" className="border border-white/10 px-4 py-2 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--teal)] hover:border-[rgba(29,228,198,.3)] transition">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/manoj-sequeira/" target="_blank" rel="noreferrer" className="border border-white/10 px-4 py-2 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--teal)] hover:border-[rgba(29,228,198,.3)] transition">
                  LinkedIn
                </a>
                <a href="https://github.com/MANOJSEQ" target="_blank" rel="noreferrer" className="border border-white/10 px-4 py-2 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--teal)] hover:border-[rgba(29,228,198,.3)] transition">
                  GitHub
                </a>
              </div>
            </div>

            <div>
              {[
                ['Languages', ['Python', 'R', 'SQL', 'Java']],
                ['ML / NLP', ['scikit-learn', 'Sentence Embeddings', 'MiniLM', 'Sentiment Analysis', 'XGBoost']],
                ['Data & Visualisation', ['Power BI', 'Tableau', 'CesiumJS', 'Pandas', 'Jupyter']],
                ['Engineering', ['FastAPI', 'React', 'REST APIs', 'Automation', 'Agile']],
              ].map(([title, items]) => (
                <div key={title} className="mb-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mb-3 pb-2 border-b border-white/10">
                    {title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[10px] px-3 py-2 border border-white/10 text-[var(--muted)] hover:border-[var(--teal)] hover:text-[var(--teal)] transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--teal)]">
              02 —
            </span>
            <h2 className="font-display text-5xl font-normal">Selected projects</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              placeholder="Search projects, tools, keywords..."
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-[var(--muted)] outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] border transition ${
                    selectedCategory === cat
                      ? 'bg-[var(--teal)] text-black border-[var(--teal)]'
                      : 'bg-transparent text-[var(--muted)] border-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-white/10">
            {filteredProjects.map((p, index) => (
              <div
                key={p.title}
                onClick={() => setSelectedProject(p)}
                className={`bg-[var(--bg)] p-10 cursor-pointer hover:bg-[var(--bg3)] transition relative overflow-hidden ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--amber)]">
                    {p.tag}
                  </div>
                  <div className="text-xl text-white/20">↗</div>
                </div>

                <h3 className="font-display text-4xl font-normal leading-tight mb-4">
                  {p.title}
                </h3>

                <p className="text-[15px] text-[var(--muted)] leading-8 mb-6 max-w-3xl">
                  {p.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] px-3 py-1.5 bg-[rgba(29,228,198,.06)] border border-[rgba(29,228,198,.18)] text-[rgba(29,228,198,.8)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--teal)] mb-3">
                  Click to view case study →
                </div>

                <div className="flex gap-3 mb-3 font-mono text-[10px] uppercase tracking-[0.1em]">
                  {p.github && <span className="text-[var(--teal)]">GitHub</span>}
                  {p.demo && <span className="text-[var(--amber)]">Live Demo</span>}
                </div>

                <div
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                    p.status === 'Live' ? 'text-[var(--teal)]' : 'text-[var(--muted)]'
                  }`}
                >
                  {p.status}
                </div>


              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--teal)]">
              03 —
            </span>
            <h2 className="font-display text-5xl font-normal">Experience & education</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mb-8 pb-3 border-b border-white/10">
                Work history
              </div>

              <div className="mb-10 pb-10 border-b border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">
                  Jan 2021 — Sep 2024
                </div>
                <div className="text-lg font-medium mb-1">Quality Engineering Analyst</div>
                <div className="font-mono text-[11px] text-[var(--teal)] mb-4">
                  Accenture (Google Contract) · Bengaluru, India
                </div>
                <ul className="space-y-2 text-[15px] leading-7 text-[var(--muted)]">
                  <li>Automated test workflows in Python and Java, reducing manual effort by 25%</li>
                  <li>Supported API migration validation and post-deployment monitoring with Google teams</li>
                  <li>Worked on data validation and regression analysis for payment API migration</li>
                  <li>Communicated technical findings clearly in stakeholder syncs</li>
                </ul>
              </div>

              <div className="mb-10 pb-10 border-b border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">
                  Sep 2024 — Sep 2025
                </div>
                <div className="text-lg font-medium mb-1">MSc Data Science & Artificial Intelligence</div>
                <div className="font-mono text-[11px] text-[var(--teal)] mb-4">
                  University of Liverpool · Liverpool, UK
                </div>
                <p className="text-[15px] leading-7 text-[var(--muted)]">
                  Dissertation: NewsGlobe360 — multilingual NLP and geospatial analytics platform. Focused on machine learning, NLP, data analytics, and data engineering.
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">
                  Jun 2016 — Aug 2020
                </div>
                <div className="text-lg font-medium mb-1">BSc Electronics & Communication Engineering</div>
                <div className="font-mono text-[11px] text-[var(--teal)] mb-4">
                  NMAM Institute of Technology, Nitte · India
                </div>
                <p className="text-[15px] leading-7 text-[var(--muted)]">
                  Built a strong foundation in systems thinking, programming, and engineering problem-solving. Also served in student leadership roles across campus activities.
                </p>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mb-8 pb-3 border-b border-white/10">
                Certifications
              </div>

              {[
                ['Machine Learning A–Z', 'Udemy · Supervised & unsupervised ML, model evaluation'],
                ['British Airways Data Science', 'Forage · Virtual experience programme'],
                ['Quantium Data Analytics', 'Forage · Retail analytics virtual experience'],
                ['Diploma in Python', 'Manipal Institute of Computer Education'],
                ['Couch to Coder', 'Bright Network · HTML & CSS fundamentals'],
              ].map(([name, issuer]) => (
                <div key={name} className="bg-[var(--bg3)] border border-white/10 px-6 py-5 mb-3">
                  <div className="text-[15px] font-medium">{name}</div>
                  <div className="mt-1 font-mono text-[10px] text-[var(--muted)] tracking-[0.06em]">
                    {issuer}
                  </div>
                </div>
              ))}

              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mt-10 mb-8 pb-3 border-b border-white/10">
                Leadership
              </div>

              <div className="space-y-6 text-[15px] text-[var(--muted)] leading-7">
                <div>
                  <div className="text-[var(--ink)] font-medium">Central Leader — Lateral Entry Orientation</div>
                  <div>Led a group of freshmen during orientation and helped new students settle into campus life.</div>
                </div>
                <div>
                  <div className="text-[var(--ink)] font-medium">Class Representative</div>
                  <div>Acted as a bridge between students and faculty, supporting communication and coordination.</div>
                </div>
                <div>
                  <div className="text-[var(--ink)] font-medium">Event Organiser — INCREDIA'20</div>
                  <div>Helped organise a techno-cultural event by coordinating with peers and junior volunteers.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--teal)]">
                04 —
              </span>
              <h2 className="font-display text-5xl font-normal">Let’s talk</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="max-w-md text-[16px] leading-8 text-[var(--muted)] mb-8">
              I’m open to data science, data analyst, and graduate opportunities in
              the UK, especially roles where I can keep learning fast and building
              useful, high-quality data products.
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:manojsequeira17@gmail.com" className="border border-white/10 px-5 py-4 font-mono text-xs text-[var(--muted)] hover:border-[rgba(29,228,198,.35)] hover:text-[var(--teal)] transition">
                manojsequeira17@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/manoj-sequeira/" target="_blank" rel="noreferrer" className="border border-white/10 px-5 py-4 font-mono text-xs text-[var(--muted)] hover:border-[rgba(29,228,198,.35)] hover:text-[var(--teal)] transition">
                linkedin.com/in/manoj-sequeira
              </a>
              <a href="https://github.com/MANOJSEQ" target="_blank" rel="noreferrer" className="border border-white/10 px-5 py-4 font-mono text-xs text-[var(--muted)] hover:border-[rgba(29,228,198,.35)] hover:text-[var(--teal)] transition">
                github.com/MANOJSEQ
              </a>
            </div>
          </div>

          <div className="font-display text-5xl md:text-7xl leading-tight text-white/10 select-none">
            open
            <br />
            to new
            <br />
            <span className="text-[var(--teal)]/70">opportunities</span>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-[var(--muted)]">
            © 2026 Manoj Alexius Sequeira
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--teal)]" />
          <span className="font-mono text-[11px] text-[var(--muted)]">
            Liverpool, UK · Open to opportunities
          </span>
        </footer>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-6">
          <div className="w-full max-w-3xl bg-[var(--bg2)] border border-white/10 p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--amber)] mb-3">
                  {selectedProject.tag}
                </p>
                <h3 className="font-display text-5xl font-normal">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] hover:text-white transition"
              >
                Close
              </button>
            </div>

            <p className="text-[16px] leading-8 text-[var(--muted)] mb-8">
              {selectedProject.shortDescription}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mb-2">
                  Problem
                </p>
                <p className="text-[15px] leading-7 text-[var(--muted)]">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mb-2">
                  Approach
                </p>
                <p className="text-[15px] leading-7 text-[var(--muted)]">
                  {selectedProject.approach}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--teal)] mb-2">
                  Outcome
                </p>
                <p className="text-[15px] leading-7 text-[var(--muted)]">
                  {selectedProject.outcome}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[10px] px-3 py-1.5 bg-[rgba(29,228,198,.06)] border border-[rgba(29,228,198,.18)] text-[rgba(29,228,198,.8)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[var(--teal)] text-black px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] font-medium"
                >
                  View GitHub
                </a>
              ) : (
                <span className="border border-white/10 text-[var(--muted)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em]">
                  GitHub Coming Soon
                </span>
              )}

              {selectedProject.demo ? (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/10 text-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] hover:border-white/30 transition"
                >
                  Live Demo
                </a>
              ) : (
                <span className="border border-white/10 text-[var(--muted)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em]">
                  Demo Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}