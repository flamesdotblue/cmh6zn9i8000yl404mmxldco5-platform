import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="font-semibold tracking-tight text-white/90 hover:text-white">zero6</a>
            <nav className="hidden gap-6 text-sm md:flex">
              <a href="#features" className="text-white/70 hover:text-white">Features</a>
              <a href="#" className="text-white/70 hover:text-white">Showcase</a>
              <a href="#" className="text-white/70 hover:text-white">Docs</a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
