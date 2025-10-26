import React from 'react';

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-emerald-500" />
          <span className="text-lg font-semibold tracking-tight">PRM Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <button onClick={() => scrollTo('features')} className="hover:text-gray-900">Features</button>
          <button onClick={() => scrollTo('integrations')} className="hover:text-gray-900">Integrations</button>
          <button onClick={() => scrollTo('blog')} className="hover:text-gray-900">Blog</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-gray-900">Pricing</button>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('pricing')} className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-gray-900">Talk to sales</button>
          <button onClick={() => scrollTo('features')} className="px-3 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-900">Get started</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
