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
        'Multilingual news analytics system with NLP and interactive visualization.',
      tools: ['Python', 'FastAPI', 'React', 'NLP'],
      problem:
        'News data is noisy, multilingual, and difficult to explore quickly across topics and regions.',
      approach:
        'Built an end-to-end analytics experience using NLP pipelines, APIs, and an interactive frontend to help users explore clustered global news events.',
      outcome:
        'Created a product-style data application that combines backend engineering, NLP, and visual storytelling in one interactive system.',
      github: 'https://github.com/MANOJSEQ',
      demo: 'https://huggingface.co/MANOJSEQ',
    },
    {
      title: 'Quantium Sales Analysis',
      category: 'Analytics',
      shortDescription:
        'Retail data analysis to evaluate marketing strategy performance.',
      tools: ['Python', 'Excel', 'EDA'],
      problem:
        'The business needed to compare trial and control stores to understand whether a campaign delivered measurable impact.',
      approach:
        'Used exploratory analysis, customer segmentation thinking, and store-level comparisons to identify patterns in transactions and customer behavior.',
      outcome:
        'Produced clear business recommendations and evidence-based insights from retail data in a decision-friendly format.',
      github: 'https://github.com/MANOJSEQ',
      demo: 'https://github.com/MANOJSEQ',
    },
    {
      title: 'British Airways Prediction',
      category: 'Machine Learning',
      shortDescription:
        'Predictive model for customer behavior and demand forecasting.',
      tools: ['Python', 'Scikit-learn', 'Feature Engineering'],
      problem:
        'Operational teams need better forecasting to improve planning, capacity decisions, and customer experience.',
      approach:
        'Built a machine learning workflow using cleaned data, engineered features, and predictive modeling techniques to estimate demand and behavior.',
      outcome:
        'Demonstrated how machine learning can support real operational planning and customer-focused decision-making.',
      github: 'https://github.com/MANOJSEQ',
      demo: 'https://github.com/MANOJSEQ',
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
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <nav className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
              Portfolio
            </p>
            <h2 className="text-lg font-semibold">Manoj Alexius Sequeira</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/MANOJSEQ"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co/MANOJSEQ"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Hugging Face
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-sequeira/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <section className="mb-14">
          <div className="inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 mb-6">
            Interactive Data Portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Manoj Alexius Sequeira
          </h1>

          <p className="mt-4 text-xl text-sky-300 font-medium">
            Data Science & AI Graduate
          </p>

          <p className="mt-6 text-slate-300 max-w-3xl leading-8 text-lg">
            I build projects in analytics, machine learning, and NLP with a focus
            on clean design, interactivity, and real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/MANOJSEQ"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white text-slate-950 px-5 py-3 font-medium"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-sequeira/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 px-5 py-3 font-medium hover:bg-white/10 transition"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <section className="mb-10">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold">3+</p>
              <p className="text-slate-400 mt-2">Featured Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold">3 Years</p>
              <p className="text-slate-400 mt-2">Industry Experience</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold">AI + Data</p>
              <p className="text-slate-400 mt-2">Project Focus</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              placeholder="Search projects, tools, keywords..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-2xl px-4 py-3 border transition ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-950 border-white'
                      : 'bg-white/5 text-white border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.title}
                onClick={() => setSelectedProject(p)}
                className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl hover:-translate-y-1 transition"
              >
                <p className="text-sm text-sky-300 mb-2">{p.category}</p>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  {p.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-semibold mb-6">About</h2>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-slate-300 leading-8 text-lg">
              I want my portfolio to feel like a product, not a basic student page.
              My goal is to show strong technical skills, clear business thinking,
              and polished presentation in one place.
            </p>
          </div>
        </section>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
          <div className="bg-slate-900 rounded-3xl p-8 max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

            <p className="text-slate-300 mb-6">
              {selectedProject.shortDescription}
            </p>

            <div className="space-y-5 mb-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-sky-300 mb-2">
                  Problem
                </p>
                <p className="text-slate-300">{selectedProject.problem}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-sky-300 mb-2">
                  Approach
                </p>
                <p className="text-slate-300">{selectedProject.approach}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-sky-300 mb-2">
                  Outcome
                </p>
                <p className="text-slate-300">{selectedProject.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-slate-950 rounded-xl font-medium"
              >
                View GitHub
              </a>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition"
              >
                Live Demo
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 bg-slate-800 text-white rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}