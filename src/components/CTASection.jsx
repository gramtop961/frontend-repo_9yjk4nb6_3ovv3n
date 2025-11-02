import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.25),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-zinc-900/70 via-zinc-900/60 to-black/80 p-10 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Ready to spark exponential growth?
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-gray-300">
                Tell us about your goals. We’ll share a crystal-clear action plan within 24 hours.
              </p>
            </div>
            <a
              href="mailto:hello@neonagency.io?subject=Strategy%20Call"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(239,68,68,0.35)] transition hover:shadow-[0_0_50px_rgba(239,68,68,0.55)]"
            >
              Get My Plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
