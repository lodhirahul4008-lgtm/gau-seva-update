import { useState } from "react";
import { Play, X, ExternalLink, Calendar, Users, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DailyLife() {
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null);

  const stories = [
    {
      id: "story1",
      category: "Healing & Rescue",
      title: "Gauri's Recovery Journey",
      subtitle: "From a critical highway accident to robust wellness",
      desc: "Gauri was rescued mid-winter from a busy federal highway with fractured limb conditions. This 9-minute cinematic capture documents her 3 months of rigorous treatment, surgical intervention by senior vets, and her daily rehabilitation steps inside the Vrindavan medical meadows.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdGxKmfR5R4rPxVZmSZ5KNAdoeCrg3GpWncCkvnSssuGYNqeJFThytuBbj9RP_G3aGOF6U8FXNoTTHFn0dalH5ryqnBribJl3S0C23kuC1_pXkPuTkili8M0K0eJJGc-TvcVe2vOmo9SVriAM3HRwEYzljV6Qw6oWC8yzn6QJo5OQKauRS1IqBy0-R1ejhMpRq-6r4UHDusXv3BHUTDz6KQmbDuSOK2giHejCFdIMp_-Ipo_T7hblT2mKRjVYCi0AebFl1nTR0NRk",
      meta: { duration: "9:14 MIN", views: "14.2k Views", date: "April 2026" },
      youtubeId: "hab0z3UESHs"
    },
    {
      id: "story2",
      category: "Sacred Routines",
      title: "The Morning Sandhya Ritual",
      subtitle: "Traditional chanting, organic bathing and herbal smoke",
      desc: "Experience the calming divine frequencies that start our cow sanctuary days. Beginning at 5:00 AM, our caretakers engage in vedic chant singing, natural herbal incense disinfection, and gentle brushing which maintains high hygiene, lowers cortisol, and promotes divine mental bonding in cows.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXflyEW9ic0slVO3FPKLavIGWS41VQaTSoEtLW1uOtvccO_BfPoCBKs694E7zqt1i3dxeaXXQyE3sEvluUfsu2rwjBBiYkeUILuJeZsWro49YzVWDmIVNwkeZo0bjqRBiACksFOSn4m2v8rgqq02VF-yio_EVFH-pELaxqDHuZB8rmXYV5v0Mxv9jrrl59CFFrm-HQJR5-8vM5SQpJV5S26eH7ccly7ZONslNLNXC0ZgsVvMRWoAYEw17IKQbkHw-a7_pjkmNEaP4",
      meta: { duration: "6:40 MIN", views: "8.9k Views", date: "May 2026" },
      youtubeId: "hab0z3UESHs" // Direct user YouTube video
    },
    {
      id: "story3",
      category: "Sustainable Living",
      title: "Building Sustainable Eco-Shelters",
      subtitle: "Biogas energy, cool-shade roofs and rainwater harvest",
      desc: "At Gau Seva Trust, modern technology supports ecological stewardship. Learn about our architectural practices: dynamic cross-ventilation, eco-friendly heat-repelling roof materials, natural dung processing to launch local gas grids, and clean water preservation channels.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmsnOrSDUb8r6CU12A9XFkBVzXGhy8yVKqIwwLjeSG4MqCGbZQp_dmXMcm2MXewPtIanNTUI893hglDbgYKIPOJzbgHq3B1jaYAYu9G1Xll8Q2oWWcpf49uI-PLQ3sx43cwxaG9oSZ9AJV6_rEDWEpdt6jW75fhiOGPFCVWx79GczDVbFv83zZFtqOCM5ZqML72peDlEd-HpxbJRJaTQru33qFLSKANpRa_M8RdvkQLF5XXVklwNRvcifjUcPRfCL-EPQyJsBMQcs",
      meta: { duration: "12:05 MIN", views: "24.1k Views", date: "June 2026" },
      youtubeId: "hab0z3UESHs" // Direct user YouTube video
    }
  ];

  const activeStory = stories.find((s) => s.id === activeStoryId);

  return (
    <section className="py-24 md:py-32 bg-surface-container-low lotus-bg">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Header Title */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Stories from the Sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-headline-lg font-bold text-on-surface mb-4">
            A Day in the Life
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
            Explore the joyful moments, healthcare milestones, and daily routines that ensure our sanctuaries feel like peaceful natural homes for Gau Mata.
          </p>
        </div>

        {/* Video Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
            >
              <img
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={story.image}
                referrerPolicy="no-referrer"
              />
              {/* Fade gradient details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-primary-fixed mb-1.5 block">
                  {story.category}
                </span>
                <h4 className="font-serif font-bold text-lg leading-tight mb-2 group-hover:text-primary-fixed-dim transition-colors">
                  {story.title}
                </h4>
                <div className="flex gap-4 items-center text-[10px] font-sans opacity-75">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {story.meta.date}
                  </span>
                  <span>•</span>
                  <span>{story.meta.duration}</span>
                </div>
              </div>

              {/* Central Play Indicator Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-md">
                  <Play className="w-6 h-6 fill-current text-white translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary/20 text-primary px-8 py-3.5 rounded-2xl font-sans font-bold text-sm hover:bg-primary hover:text-white transition-all hover:shadow-md cursor-pointer"
          >
            Visit Our Video Channel
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Story Video / Photographic Lightbox popup */}
      <AnimatePresence>
        {activeStoryId !== null && activeStory && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-4xl max-w-2xl w-full relative border border-white/20 shadow-2xl overflow-hidden text-left"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveStoryId(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Actual Professional YouTube Player viewport */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${activeStory.youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                  title={activeStory.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content Description description */}
              <div className="p-6 md:p-8 bg-surface">
                <span className="text-[10px] uppercase font-sans font-bold text-primary tracking-widest block mb-1">
                  {activeStory.category} Daily Log
                </span>
                <h3 className="font-serif text-2xl font-bold text-on-surface mb-2 leading-none">
                  {activeStory.title}
                </h3>
                <p className="text-xs italic font-sans text-on-surface-variant font-semibold mb-4 block">
                  "{activeStory.subtitle}"
                </p>
                <p className="text-xs md:text-sm font-sans text-on-surface-variant leading-relaxed mb-6">
                  {activeStory.desc}
                </p>

                {/* Share stats */}
                <div className="flex flex-wrap gap-6 items-center pt-5 border-t border-slate-200/50 text-xs font-sans text-on-surface-variant">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Users className="w-4 h-4 text-primary" />
                    {activeStory.meta.views}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-secondary" />
                    Most Watched
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
