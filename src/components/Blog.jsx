import React from 'react';

const posts = [
  {
    title: 'A modern blueprint for PRM success',
    excerpt: 'How leading teams unify onboarding, enablement, and co-marketing to accelerate partner-sourced revenue.',
    tag: 'Strategy',
    date: 'Oct 2025',
  },
  {
    title: 'Designing frictionless partner onboarding',
    excerpt: 'Reduce time-to-first-deal with guided checklists, approvals, and role-based access from day one.',
    tag: 'Onboarding',
    date: 'Sep 2025',
  },
  {
    title: 'Enablement that actually ships pipeline',
    excerpt: 'Turn assets and certifications into measurable outcomes with usage insights and deal attribution.',
    tag: 'Enablement',
    date: 'Aug 2025',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Insights from the ecosystem</h2>
          <p className="mt-4 text-slate-600">Fresh perspectives on partner operations, enablement, and revenue design.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="h-40 w-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-100">{p.tag}</span>
                  <span>•</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                  Read article <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
