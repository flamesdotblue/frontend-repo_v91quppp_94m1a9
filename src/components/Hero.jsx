import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-amber-100 text-amber-800 ring-1 ring-amber-300">New • ICP for Partnerships</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Modern PRM for high‑velocity partner ecosystems
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Unite partners, sales, and growth teams on a single platform. Onboard faster, enable continuously, and co‑sell with clarity using real‑time ICP matching and intent.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => scrollTo('features')} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white font-medium hover:bg-gray-900">
              Explore features
            </button>
            <button onClick={() => scrollTo('integrations')} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50">
              See integrations
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">No credit card required • Free trial available</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
