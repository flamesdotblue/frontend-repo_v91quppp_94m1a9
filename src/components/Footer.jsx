import React from 'react';

function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-emerald-500" />
              <span className="text-base font-semibold tracking-tight">PRM Studio</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">Modern PRM built for partner, sales, and growth teams to co‑sell with clarity.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#integrations" className="hover:text-gray-900">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Docs</a></li>
              <li><a href="#" className="hover:text-gray-900">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} PRM Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
