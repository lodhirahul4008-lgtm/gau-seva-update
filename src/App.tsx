import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SanctuaryList from "./components/SanctuaryList";
import BreedsCarousel from "./components/BreedsCarousel";
import LiveStream from "./components/LiveStream";
import DailyLife from "./components/DailyLife";
import CommunityWall from "./components/CommunityWall";
import HowWeHelp from "./components/HowWeHelp";
import TaxCalculator from "./components/TaxCalculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DonationSystem from "./components/DonationSystem";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [preSelectedSanctuary, setPreSelectedSanctuary] = useState("Krishna Seva Dham (Vrindavan)");
  const [watchStoryOpen, setWatchStoryOpen] = useState(false);

  const handleDonateClick = () => {
    setPreSelectedSanctuary("Krishna Seva Dham (Vrindavan)");
    setIsDonationOpen(true);
  };

  const handleSupportSanctuary = (sanctuaryName: string) => {
    setPreSelectedSanctuary(`${sanctuaryName}`);
    setIsDonationOpen(true);
  };

  const handleSectionScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container leading-relaxed scroll-smooth relative font-sans">
      {/* Decorative floral/mandala pattern background overlays */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mandala-pattern"></div>

      {/* Main navigation header */}
      <Header
        onDonateClick={handleDonateClick}
        onSectionClick={handleSectionScroll}
      />

      {/* Main sections layout tree */}
      <main className="relative z-10">
        
        {/* Dynamic hero */}
        <Hero
          onDonateClick={handleDonateClick}
          onWatchStoryClick={() => setWatchStoryOpen(true)}
        />

        {/* Dynamic expanded stats */}
        <Stats />

        {/* Managed sanctuaries cards */}
        <SanctuaryList onSupportSanctuary={handleSupportSanctuary} />

        {/* Classical native Breeds carousel */}
        <BreedsCarousel />

        {/* Real-time Web Blessings view cam */}
        <LiveStream />

        {/* Cinematic life videos */}
        <DailyLife />

        {/* Collaborative wall for blessings chat posting */}
        <CommunityWall />

        {/* Secure workflow milestones */}
        <HowWeHelp
          onDonateClick={handleDonateClick}
          onSectionClick={handleSectionScroll}
        />

        {/* Section 80G tax calculator */}
        <TaxCalculator />

        {/* Contact and Social outreach Section */}
        <Contact />

      </main>

      {/* Polish footer */}
      <Footer
        onSectionClick={handleSectionScroll}
        onDonateClick={handleDonateClick}
      />

      {/* Multi-step secure checkout wizard drawer */}
      <DonationSystem
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        preSelectedSanctuary={preSelectedSanctuary}
      />

      {/* Ambient video story pop-up lightbox */}
      <AnimatePresence>
        {watchStoryOpen && (
          <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-4xl max-w-3xl w-full relative border border-white/25 shadow-2xl overflow-hidden text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setWatchStoryOpen(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close stories player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo background resembling high definition player */}
              <div className="aspect-video relative bg-slate-950 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover opacity-85"
                  alt="Sandalwood-coated majestic cow grazing joyfully in meadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKIiDn4dAbEQJAmShpCrqD99P-Hg2KAcFzU1-4OfkzLrvDrZNxC-Q5DIix8VFfLyp48YpScIz2hz5ZtKbIATeW59cDpMXe6GcLQmo00xNKTvZbB5KW3M6Py7gnyl5vFEz1f3K_g7GhGfG70xOjVLYwNFaWKaaQM5ZInYDYG3YSvEkeDXFG9dP55WsVRN4DXTfDvikFhKXxHFitj03fcqxIyXlXDThQuHylIamjZ4qHduYCUMY6z74skFbtI4U_vg7ykxsMKNZ2lEs"
                  referrerPolicy="no-referrer"
                />
                
                {/* Central trigger inside mock player */}
                <div className="absolute flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                  <p className="text-white text-xs font-sans font-bold uppercase tracking-wider mt-4 bg-black/50 px-4 py-2 rounded-xl border border-white/10 shadow-sm leading-none">
                    Click to Screen Cinematic Trust Film (14 min)
                  </p>
                </div>

                {/* Scrubber controls (Simulated) */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-center text-[10.5px] font-mono select-none">
                  <div className="flex gap-2 items-center">
                    <span>0:00</span>
                    <div className="w-60 md:w-[450px] h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-0"></div>
                    </div>
                    <span>14:02</span>
                  </div>
                  <span className="text-primary-fixed block uppercase tracking-wide">SURROUND SOUND 5.1</span>
                </div>
              </div>

              {/* Informative description block */}
              <div className="p-6 md:p-8 bg-surface">
                <span className="bg-primary/10 border border-primary/20 text-[#8f4e00] text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3">
                  Featured Documentary
                </span>
                
                <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-on-surface mb-2">
                  "The Heart of Gau Seva: Our Digital Stewardship"
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">
                  A high-definition journey exploring the history of general cow stewardship at our main gaushalas. Learn from lead forest caretakers about biological cycles, diet standards of calves, physical treatment centers, and how Section 80G tax exemption supports the rescue of injured cattle.
                </p>

                <div className="flex justify-end pt-2 border-t border-slate-200/50">
                  <button
                    onClick={() => setWatchStoryOpen(false)}
                    className="btn-gradient text-white px-6 py-2.5 rounded-xl text-xs font-bold font-sans cursor-pointer"
                  >
                    Close Showcase Film
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
