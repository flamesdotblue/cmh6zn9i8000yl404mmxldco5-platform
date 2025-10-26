import React from 'react';
import { Rocket, Shield, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    title: 'Real-time 3D Cover',
    description: 'Spline-powered hero with buttery-smooth rendering and interactive motion.',
    icon: Sparkles,
  },
  {
    title: 'Blended Glass UI',
    description: 'Tasteful glassmorphism with subtle borders, gradients, and blur for depth.',
    icon: Shield,
  },
  {
    title: 'Performance-first',
    description: 'Vite + React + Tailwind for fast iteration and production builds.',
    icon: Zap,
  },
  {
    title: 'Launch-ready',
    description: 'Clean sections and components that can scale with your product.',
    icon: Rocket,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative z-10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Designed for clarity</h2>
          <p className="mt-3 text-white/70">
            Minimal components with a focus on motion, contrast, and craftsmanship.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
