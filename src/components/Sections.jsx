import React from 'react';

function Features() {
  const featureItems = [
    {
      title: 'Partner CRM & Collaboration',
      desc: 'Shared pipelines, deal registration, and co‑sell workspaces so everyone stays aligned from intro to close.'
    },
    {
      title: 'Onboarding & Enablement',
      desc: 'Interactive playbooks, certification paths, and a partner academy to activate revenue faster.'
    },
    {
      title: 'ICP & Intent Matching',
      desc: 'Auto‑match accounts by ICP, firmographics, and intent to surface the best partner motion instantly.'
    },
    {
      title: 'Revenue Analytics',
      desc: 'Attribution, influenced revenue, and partner‑sourced pipeline with clear dashboards built for GTM leaders.'
    },
  ];

  const icpCards = [
    {
      role: 'Partnership team',
      name: 'Ava Patel',
      avatar: 'https://i.pravatar.cc/120?img=65',
      blurb: 'We finally have a single source of truth for partner influence. Deal cycles are down 22%.'
    },
    {
      role: 'Sales team',
      name: 'Jordan Lee',
      avatar: 'https://i.pravatar.cc/120?img=12',
      blurb: 'Rep‑friendly account overlays and intros from partners helped me hit quota two quarters in a row.'
    },
    {
      role: 'Growth team',
      name: 'Mia Chen',
      avatar: 'https://i.pravatar.cc/120?img=32',
      blurb: 'ICP matching made campaigns 3x more targeted. Better reach, lower CAC, happier partners.'
    },
    {
      role: 'CXOs',
      name: 'Daniel Rivera',
      avatar: 'https://i.pravatar.cc/120?img=5',
      blurb: 'Clear attribution and forecasting for partner‑sourced revenue—finally something board‑ready.'
    },
  ];

  return (
    <section id="features" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to run partnerships</h2>
          <p className="mt-3 text-gray-600">Purpose‑built modules that work out of the box and scale with your ecosystem.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-300 via-amber-400 to-emerald-400" />
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Who should use ICP?</h3>
          <p className="mt-2 text-gray-600">Tailored workflows and outcomes for every go‑to‑market stakeholder.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {icpCards.map((c) => (
              <div key={c.role} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={c.avatar} alt={`${c.name} avatar`} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm text-amber-700 font-medium">{c.role}</div>
                    <div className="font-semibold text-gray-900">{c.name}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">“{c.blurb}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const tools = [
    { name: 'Salesforce' },
    { name: 'HubSpot' },
    { name: 'Slack' },
    { name: 'Gong' },
    { name: 'Snowflake' },
    { name: 'Zapier' },
  ];
  return (
    <section id="integrations" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Works with your stack</h2>
          <p className="mt-3 text-gray-600">Native integrations and a robust API connect your CRM, data, and messaging tools.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map(t => (
            <div key={t.name} className="h-20 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-700 font-medium shadow-sm">
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    {
      title: 'Designing a partner‑first GTM',
      excerpt: 'How leading teams build repeatable, partner‑sourced pipeline with accurate attribution.',
    },
    {
      title: 'The new ICP: beyond firmographics',
      excerpt: 'Combining intent, product usage, and ecosystem fit to prioritize accounts that convert.',
    },
    {
      title: 'Enablement that actually sticks',
      excerpt: 'Turning certification into revenue impact with bite‑size learning paths and playbooks.',
    },
  ];
  return (
    <section id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Insights and stories</h2>
            <p className="mt-2 text-gray-600">Fresh perspectives from partner, sales, and growth leaders.</p>
          </div>
          <button className="hidden sm:inline-flex px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-900">View all</button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 bg-gradient-to-br from-yellow-200 via-amber-300 to-emerald-300" />
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                <div className="mt-4 text-sm font-medium text-amber-700">Read more →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sections() {
  return (
    <>
      <Features />
      <Integrations />
      <Blog />
    </>
  );
}

export default Sections;
