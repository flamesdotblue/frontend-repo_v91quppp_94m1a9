import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-emerald-500" />
          <span className="text-sm text-gray-700">© {new Date().getFullYear()} PRM Studio</span>
        </div>
        <div className="text-sm text-gray-500">Built for modern partner ecosystems</div>
      </div>
    </footer>
  );
}

export default Footer;
