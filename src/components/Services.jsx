import React from 'react';
import { Sparkles, BarChart3, Camera, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Camera className="h-5 w-5 text-red-400" />,
    title: 'Content Production',
    desc: 'Thumb-stopping short-form video, motion graphics, and carousels tailored for every platform.',
  },
  {
    icon: <Megaphone className="h-5 w-5 text-red-400" />,
    title: 'Paid Social',
    desc: 'Performance-driven campaigns with relentless A/B testing to scale efficiently.',
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-red-400" />,
    title: 'Analytics & Optimization',
    desc: 'Actionable reporting and continuous iteration to turn insights into growth.',
  },
  {
    icon: <Sparkles className="h-5 w-5 text-red-400" />,
    title: 'Brand Systems',
    desc: 'Cohesive visual identity and messaging that makes your brand unmistakable.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,68,68,0.2),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(249,115,22,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Services engineered for growth
          </h2>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            Minimal by design, powerful in performance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-red-500/30 bg-white/5 p-6 backdrop-blur transition hover:border-red-400/60"
            >
              <div className="absolute -inset-0.5 -z-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/10 to-orange-400/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-red-500/10 p-2 ring-1 ring-red-500/20">
                  {s.icon}
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
