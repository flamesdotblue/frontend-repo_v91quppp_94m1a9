import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline background (acts like an animated video/image cover) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Modern Partner Platform
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Partner Relationship Management
          <span className="block bg-gradient-to-r from-yellow-300 to-emerald-300 bg-clip-text text-transparent">
            built for growth teams
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Unify partner onboarding, enablement, marketing, and deal collaboration in one beautiful platform. Accelerate revenue by empowering your ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#features" className="rounded-lg bg-yellow-300 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-yellow-200">
            Explore Features
          </a>
          <a href="#blog" className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
            Read Insights
          </a>
        </div>
        <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-3 text-left text-xs text-white/70 sm:grid-cols-4">
          <div className="rounded-md border border-white/10 bg-white/5 p-3">Unified PRM</div>
          <div className="rounded-md border border-white/10 bg-white/5 p-3">Fast Onboarding</div>
          <div className="rounded-md border border-white/10 bg-white/5 p-3">Enablement Hub</div>
          <div className="rounded-md border border-white/10 bg-white/5 p-3">Co-Marketing</div>
        </div>
      </div>
    </section>
  );
}
