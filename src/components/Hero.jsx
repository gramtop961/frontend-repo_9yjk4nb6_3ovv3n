import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Red neon gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/20 via-red-600/10 to-black/80"
      />
      <div
        className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(244,63,94,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.25),transparent_40%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 md:pt-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-red-400" />
          <span className="text-xs tracking-wide text-red-300">Social Media Growth, Amplified</span>
        </div>
        <h1 className="text-center text-4xl font-semibold tracking-tight text-white drop-shadow md:text-6xl lg:text-7xl">
          Ignite Your Brand with
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent"> Neon Momentum</span>
        </h1>
        <p className="mt-6 max-w-2xl text-center text-base text-gray-300 md:text-lg">
          We craft scroll-stopping content and performance strategies that convert followers into superfans. Minimal look. Maximum impact.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(239,68,68,0.35)] transition hover:shadow-[0_0_50px_rgba(239,68,68,0.55)]"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Book a Strategy Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border border-red-500/40 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* subtle bottom fade to black for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
