import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Blog from './components/Blog';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with Spline background */}
      <Hero />

      {/* Features for PRM, Onboarding, Enablement, Marketing */}
      <Features />

      {/* Blog section */}
      <Blog />

      {/* Pricing with 3 tiers + custom pricing */}
      <Pricing />

      {/* Simple footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} PRM Studio. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
