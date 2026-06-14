import { Leaf, Award, Landmark, CheckCircle } from "lucide-react";

interface FooterProps {
  onSectionClick: (sectionId: string) => void;
  onDonateClick: () => void;
}

export default function Footer({ onSectionClick, onDonateClick }: FooterProps) {
  return (
    <footer className="bg-zinc-900 text-slate-300 py-16 md:py-24 border-t border-zinc-800">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 pb-16 border-b border-zinc-800 text-left">
          
          {/* Brand pillar */}
          <div className="space-y-6 md:col-span-1">
            <div 
              onClick={() => onSectionClick("home")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="bg-primary/20 p-2.5 rounded-xl">
                <Leaf className="text-primary w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white tracking-tight leading-none">
                  Gau Seva Trust
                </span>
                <span className="text-[9px] font-sans font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Since 2012 / Registered Charity
                </span>
              </div>
            </div>
            
            <p className="text-xs font-sans text-slate-400 leading-relaxed max-w-xs">
              Compassionate digital stewards preserving Bharat's gentle cow lineages through modern, audited, and accountable animal welfare practices.
            </p>

            <div className="flex gap-4">
              <span className="text-slate-500 font-sans text-[10px] uppercase font-bold tracking-wider">
                Audited & Certified
              </span>
            </div>
          </div>

          {/* Quick links portal */}
          <div className="space-y-4 md:col-span-1">
            <h5 className="font-serif text-sm font-extrabold text-white uppercase tracking-wider">
              Navigation Link Block
            </h5>
            <ul className="space-y-2.5 font-sans text-xs text-slate-400">
              <li>
                <button onClick={() => onSectionClick("home")} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Spiritual Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("sanctuaries")} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Our Managed Gaushalas
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("breeds")} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Indigenous Blessed Breeds
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("live")} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Vrindavan Blessings Cam
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("community")} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Seva Sangha Feed
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("contact")} className="hover:text-primary transition-colors cursor-pointer text-left font-bold text-slate-200">
                  Contact & Support Form
                </button>
              </li>
            </ul>
          </div>

          {/* Government compliance */}
          <div className="space-y-4 md:col-span-1">
            <h5 className="font-serif text-sm font-extrabold text-white uppercase tracking-wider">
              Legal Exemption Status
            </h5>
            <div className="space-y-3 font-sans text-xs text-slate-400">
              <div className="flex items-start gap-2 bg-zinc-800/40 p-3 rounded-xl border border-zinc-700/30">
                <Landmark className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-slate-400">
                  Registered under India Income Tax Act <strong>Section 80G</strong>. Standard 50% tax deductions apply immediately.
                </p>
              </div>
              <div className="flex items-start gap-2 bg-zinc-800/40 p-3 rounded-xl border border-zinc-700/30">
                <Award className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-slate-400">
                  Strict zero-commission administrative operational rule. <strong>100% genuine</strong> cow wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter / Direct donate call */}
          <div className="space-y-4 md:col-span-1">
            <h5 className="font-serif text-sm font-extrabold text-white uppercase tracking-wider">
              Support Our Cows
            </h5>
            <p className="text-xs font-sans text-slate-400 leading-relaxed">
              Every ₹250 provides fresh, nutritious green fodder to a calf. Pledge your support today.
            </p>
            <button
              onClick={onDonateClick}
              className="btn-gradient text-white font-sans font-bold text-xs px-6 py-3 rounded-xl w-full hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow-md text-center"
            >
              Secure Instant Seva
            </button>
          </div>

        </div>

        {/* Small metadata details bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10.5px] font-sans text-slate-500 gap-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Gau Seva Trust. All rights reserved globally. Registered Charitable Trust (India).
          </p>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1.5 font-bold text-slate-400">
              <CheckCircle className="w-3.5 h-3.5 text-secondary" />
              100% Tax Compliant
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
