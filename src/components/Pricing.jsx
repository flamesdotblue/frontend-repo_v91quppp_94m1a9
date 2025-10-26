import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      'Up to 50 partners',
      'Basic onboarding flows',
      'Content library',
      'Email support',
    ],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$299',
    period: 'per month',
    highlight: true,
    features: [
      'Unlimited partners',
      'Advanced onboarding & approvals',
      'Certifications & learning paths',
      'MDF & co-marketing workflows',
      'Analytics & attribution',
      'Priority support',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Enterprise',
    price: '$899',
    period: 'per month',
    highlight: false,
    features: [
      'All Growth features',
      'SSO & RBAC',
      'Custom objects & fields',
      'Sandbox environment',
      'Dedicated CSM',
    ],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Choose a plan that matches your partner program today — scale effortlessly tomorrow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                plan.highlight ? 'border-emerald-200 ring-2 ring-emerald-200' : 'border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                <span className="mb-1 text-sm text-slate-500">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check size={18} className="mt-0.5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-5 py-3 text-sm font-semibold transition ${
                plan.highlight
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Custom pricing card */}
        <div className="mt-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900">Custom Pricing</h3>
            <p className="mt-2 text-sm text-slate-600">
              Complex ecosystem or specific compliance needs? We’ll tailor a plan and implementation for you.
            </p>
            <a href="#" className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
