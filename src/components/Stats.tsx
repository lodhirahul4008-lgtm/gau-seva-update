import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Activity, ShieldCheck, X } from "lucide-react";

export default function Stats() {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const statsData = [
    {
      id: 1,
      title: "10,000+",
      label: "Cows Sheltered",
      icon: <Heart className="w-8 h-8 text-primary" />,
      bgClass: "bg-primary-fixed/50 group-hover:bg-primary-fixed",
      details: {
        headline: "Sacred Sanctuaries Across Bharat",
        description: "Our shelters house gentle cows, retired draft bulls, and orphaned calves. Every cow receives comprehensive veterinary attention, pristine nutrition, and specialized care under the vigilance of dedicated cowherd staff (Gau Sevaks).",
        points: [
          "45%+ senior & disabled cows receiving continuous orthopaedic care.",
          "Over 1,200 orphan calves rescued from streets and highways this year.",
          "Certified organic fodder sourced from 3,500 local farmers.",
        ]
      }
    },
    {
      id: 2,
      title: "50+",
      label: "Gaushalas Supported",
      icon: <Activity className="w-8 h-8 text-secondary" />,
      bgClass: "bg-secondary-fixed/50 group-hover:bg-secondary-fixed",
      details: {
        headline: "National Network of Modern Shelters",
        description: "We standardize operations across verified gaushalas throughout India, funding infrastructure development, medical camps, and implementing clean water and energy management solutions.",
        points: [
          "Operational presence in 12 Indian states, from Rishikesh to Hampi.",
          "Biogas generators installed in 18 shelters supplying green electricity.",
          "Training seminars conducted for over 400 local gaushala managers annually.",
        ]
      }
    },
    {
      id: 3,
      title: "100%",
      label: "Tax Exempt (80G)",
      icon: <ShieldCheck className="w-8 h-8 text-tertiary" />,
      bgClass: "bg-tertiary-fixed/50 group-hover:bg-tertiary-fixed",
      details: {
        headline: "100% Tax Benefit & Genuine Accountability",
        description: "As a registered charitable trust in India, all contributions are eligible for standard income tax relief under Section 80G. Our accounts are fully audited, and the trust issues instant downloadable tax certificates.",
        points: [
          "Instant receipt and 80G certificate dispatched electronically.",
          "Zero administrative markup on critical animal welfare purchases.",
          "Annual transparency and audit reports published openly online.",
        ]
      }
    }
  ];

  return (
    <section className="relative z-20 -mt-24 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto glass-card rounded-4xl p-8 md:p-14 border border-white/60 shadow-lg">
        <p className="text-center text-xs font-sans font-bold text-on-surface-variant uppercase tracking-widest mb-10">
          Interactive Impact Overview • Click a card to explore detailed insights
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              onClick={() => setActiveStat(stat.id)}
              className="flex flex-col items-center text-center group cursor-pointer pt-6 md:pt-0 pb-6 md:pb-0 first:pt-0 last:pb-0 transition-transform hover:scale-[1.02]"
            >
              <div className={`w-16 h-16 rounded-3xl ${stat.bgClass} flex items-center justify-center mb-5 transition-all duration-300 inner-glow`}>
                {stat.icon}
              </div>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-on-surface mb-1">
                {stat.title}
              </h3>
              <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <span className="text-[10px] text-primary mt-2 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Click to explore details &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info drawer/modal for clicked stats */}
      <AnimatePresence>
        {activeStat !== null && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            {statsData.filter(s => s.id === activeStat).map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 relative border border-outline-variant/30 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-44 h-44 bg-primary/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
                <button
                  onClick={() => setActiveStat(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-on-surface-variant cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-sans font-bold text-primary tracking-widest block mb-0.5">
                      {stat.label} Impact
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-on-surface">
                      {stat.details.headline}
                    </h4>
                  </div>
                </div>

                <p className="text-sm font-sans text-on-surface-variant leading-relaxed mb-6">
                  {stat.details.description}
                </p>

                <div className="space-y-4">
                  <h5 className="text-xs font-sans font-extrabold uppercase text-on-surface tracking-wider">
                    Key Performance Metrics
                  </h5>
                  {stat.details.points.map((point, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setActiveStat(null)}
                    className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    Got it, Thank You
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
