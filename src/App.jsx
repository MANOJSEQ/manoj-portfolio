import React, { useMemo, useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'NewsGlobe360',
      category: 'Analytics',
      description:
        'Multilingual news analytics system with NLP and interactive visualization.',
      tools: ['Python', 'FastAPI', 'React', 'NLP'],
      problem:
        'News data is noisy, multilingual, and difficult to explore quickly.',
      outcome:
        'Built an end-to-end platform for analyzing and exploring global news events interactively.',
      github: 'https://github.com/MANOJSEQ',
      demo: 'https://huggingface.co/MANOJSEQ',
    },
    {
      title: 'Quantium Sales Analysis',
      category: 'Analytics',
      description:
        'Retail data analysis to evaluate marketing strategy performance.',
      tools: ['Python', 'Excel', 'EDA'],
      problem:
        'The goal was to compare trial and control stores to understand campaign performance.',
      outcome:
        'Produced clear business insights and recommendations from customer and transaction data.',
      github: 'https://github.com/MANOJSEQ',
      demo: 'https://github.com/MANOJSEQ',
    },
    {
      title: 'British Airways Prediction',
      category: 'Machine Learning',
      description:
        'Predictive model for customer behavior and demand forecasting.',
      tools: ['Python', 'Scikit-learn'],
      problem:
        'Operational teams need better forecasting to improve planning and customer experience.',
      outcome:
        'Built a machine learning workflow for demand and behavior prediction using engineered features.',
      github: 'https://github.com/MANOJSEQ',
      demo: 'https://github.com/MANOJSEQ',
    },
  ];

  const categories = ['All', 'Analytics', 'Machine Learning'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        selectedCategory === 'All' || project.category === selectedCategory;
      const searchMatch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tools.join(' ').toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [projects, search, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <nav className="mb-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
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
              href="https://vercel.com/manojseqs-projects"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Vercel
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
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl hover:-translate-y-1 transition"
              >
                <p className="text-sm text-sky-300 mb-2">{p.category}</p>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{p.description}</p>

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
          <div className="bg-slate-900 rounded-3xl p-8 max-w-2xl w-full border border-white/10">
            
            <h2 className="text-3xl font-bold mb-4">
              {selectedProject.title}
            </h2>

            <p className="text-slate-300 mb-4">
              {selectedProject.description}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-wide text-sky-300 mb-1">Problem</p>
                <p className="text-slate-300">{selectedProject.problem}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-sky-300 mb-1">Outcome</p>
                <p className="text-slate-300">{selectedProject.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-white text-black rounded-xl font-medium"
              >
                View GitHub
              </a>

              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 border border-white/10 rounded-xl font-medium"
              >
                Live Demo
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 bg-slate-800 text-white rounded-xl"
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