import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/oRrPvYYzPQFRFKuU/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient vignettes that won't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live 3D cover • Holographic torus
        </div>
        <h1 className="text-balance bg-gradient-to-r from-white via-white to-white/70 bg-clip-text font-semibold leading-tight text-transparent drop-shadow-sm text-4xl sm:text-5xl md:text-7xl">
          A futuristic, minimalist zero6 experience
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-white/80 md:text-lg">
          A glass-like torus reflecting iridescent colors against a clean black canvas. Built with React, Tailwind, and a Spline cover.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Explore Features
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/15"
          >
            View Showcase
          </a>
        </div>
      </div>
    </section>
  );
}
