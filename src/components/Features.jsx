import React from 'react';
import { Users, FilePlus, BookOpen, Megaphone } from 'lucide-react';

const items = [
  {
    title: 'Partner Relationship Management',
    desc: 'Centralize partner profiles, pipeline, and performance. Collaborate on deals and track attribution across the journey.',
    icon: Users,
  },
  {
    title: 'Partner Onboarding',
    desc: 'Streamlined signup, vetting, and activation with guided checklists, agreements, and automated approvals.',
    icon: FilePlus,
  },
  {
    title: 'Partner Enablement',
    desc: 'Deliver curated learning paths, certifications, and battlecards. Equip partners with everything to win.',
    icon: BookOpen,
  },
  {
    title: 'Partner Marketing',
    desc: 'Plan and run co-marketing campaigns, MDF requests, and asset sharing to amplify reach and pipeline.',
    icon: Megaphone,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Everything you need to scale partnerships</h2>
          <p className="mt-4 text-slate-600">Purpose-built modules that work beautifully together — flexible enough for startups, powerful enough for enterprises.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
