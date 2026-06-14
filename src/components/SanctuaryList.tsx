import { useState } from "react";
import { MapPin, Search, ChevronRight } from "lucide-react";
import { Sanctuary } from "../types";

interface SanctuaryProps {
  onSupportSanctuary: (sanctuaryName: string) => void;
}

export default function SanctuaryList({ onSupportSanctuary }: SanctuaryProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const sanctuaries: Sanctuary[] = [
    {
      id: "s1",
      name: "Krishna Seva Dham",
      description: "Dedicated to the medical care and comfortable grazing of 450+ holy cows, specializing in pure premium Gir and Sahiwal breeds with local organic crop facilities.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBADElHrM7yHraFKg38p34xlx8IqK1306c6pgHKPQk4rGW-sSDPQFDUqiEZFbG6Qy8bEozYW0m4-54w3r9s4pEe90o_vLXsZ8iKFD2yO2-4jQTJkCn5h7cU0u9COyrHVP5U_7uBudDn6I0BhuT7iQ_yIpiMepz1DoLQm0ai_FPaRh41EjPe0vEs2Jnc9rGIYHBMD7o29TJk6fTtQdPx4opCPwULA8JbGseDF3L_yBsGN7VvDS8Ypvo3mRmZkrOEmLoUzxp11z6B6-M",
      location: "Vrindavan",
      progress: 75,
      cowCount: 450,
      highlight: "Organic Grazing",
      needs: "Green Fodder Storage expansion"
    },
    {
      id: "s2",
      name: "Himalayan Gau Gram",
      description: "Deep in the tranquil foothills of Uttarakhand, this center leads high-altitude, cold-season rescue campaigns for abandoned calves alongside the active Ganges river banks.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5zxg-wWbrkndBcn1a9BJ_T1tZ6z6Mazy_NezyjMiSJGsMt83dW5b0TOxgFkWY-f0rhCD6KGF8rP_wdEwo2-Ue1mPE09nbF2HBlmxBz3JrXr5Pd-s007RnYkI1SJI3jy7xINBDJAohfdi30PTckZpruEb4z5gYdNhBZj1splmk1BsT8I4Ls3Q-zA1cYEtO2YfKJ-Yz4g5I1vouEjcE8wjNoaTTdIsTZ_hJBO3P89KdKoPYLaF2JYEJBs1ATK5LbUs_27__CnCQABU",
      location: "Rishikesh",
      progress: 50,
      cowCount: 220,
      highlight: "Highway Calf Rescue",
      needs: "Solar shed water heating systems"
    },
    {
      id: "s3",
      name: "Heritage Gau Shala",
      description: "Preserving rare, vulnerable South Indian native cow breeds inside a pristine classical temple ecosystem designed around ancient organic composting rules.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgtT1Quvj6WWcDoPLqURod6NWsY0SGde8ZpHRIi7aZXxP7IZhUs7cJccseuyIlu4Rsgo1F0NVz-u9m6InLEQXC_SxEmAnZgB5zIG77-YB7nDjZvktLCOyNNAfS4CXw3W9zE2osgRPZkX0v10f2QTLhd_webkkkvGp5Y3Anb3ceRbqNYIKkx5VVCFMohkvlOf5G67q1RLbD3PvlABcnja5teiKh-qybn-F-XMvv9XhsIxaMv3oZWaMRiAfBR8yFZxjykRqNujQEJoY",
      location: "Hampi",
      progress: 90,
      cowCount: 310,
      highlight: "Ancient Heritage Breeds",
      needs: "Herbal medicine garden expansion"
    },
  ];

  const filteredSanctuaries = sanctuaries.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="sanctuaries" className="py-24 md:py-32 bg-surface-container relative overflow-hidden">
      
      {/* Decorative leaf/lotus SVG overlay backdrop */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="100" cy="50" r="50" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
        
        {/* Header content heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="text-left">
            <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              National Network
            </span>
            <h2 className="font-serif text-3xl md:text-headline-lg font-bold text-on-surface mb-3">
              Our Managed Sanctuaries
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant">
              Visit or sponsor essential infrastructure upgrades across our network of verified gaushalas.
            </p>
          </div>

          {/* Interactive Search Filter bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by city or shelter name..."
              className="w-full bg-white border border-outline-variant/30 px-4 py-3 pl-11 rounded-2xl text-xs focus:outline-none focus:border-primary shadow-sm text-on-surface font-sans"
            />
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-on-surface-variant/70" />
          </div>
        </div>

        {/* Sanctuaries list grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {filteredSanctuaries.map((sanctuary) => (
            <div
              key={sanctuary.id}
              className="group bg-surface rounded-4xl overflow-hidden premium-shadow transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Header Image backdrop */}
                <div className="h-60 md:h-72 overflow-hidden relative shadow-inner">
                  <img
                    alt={sanctuary.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    src={sanctuary.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  
                  {/* Location label tag */}
                  <div className="absolute bottom-5 left-5 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-sans font-bold text-white flex items-center gap-2 border border-white/30 shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {sanctuary.location}
                  </div>
                </div>

                {/* Main information parameters */}
                <div className="p-8 pb-4 text-left">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[10px] uppercase font-sans font-bold text-primary tracking-widest block">
                      {sanctuary.highlight}
                    </span>
                    <span className="text-[10px] uppercase font-sans font-extrabold text-on-surface-variant tracking-wider bg-slate-100 px-2 py-0.5 rounded-md leading-none">
                      {sanctuary.cowCount} Cows
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-on-surface mb-4">
                    {sanctuary.name}
                  </h3>
                  
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {sanctuary.description}
                  </p>
                  
                  {/* Progress panel metric */}
                  <div className="space-y-3 mb-6 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100/50">
                    <div className="flex justify-between text-[11px] font-sans font-bold uppercase tracking-wider mb-1">
                      <span className="text-secondary">Funding target progress</span>
                      <span className="text-on-surface-variant">{sanctuary.progress}% complete</span>
                    </div>
                    {/* Visual Progress Bar containing shiny styling */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${sanctuary.progress}%` }}
                        className="bg-gradient-to-r from-secondary/80 to-secondary h-full rounded-full shadow-sm"
                      ></div>
                    </div>
                    <p className="text-[10.5px] font-sans text-on-surface-variant leading-tight block">
                      <strong className="text-on-surface-variant font-bold uppercase">Immediate Need:</strong> <span className="italic">{sanctuary.needs}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct support action CTA */}
              <div className="p-8 pt-0">
                <button
                  onClick={() => onSupportSanctuary(sanctuary.name)}
                  className="w-full border-2 border-outline-variant/40 text-primary py-4 rounded-2xl font-sans font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-sm text-center"
                >
                  Support {sanctuary.name}
                </button>
              </div>

            </div>
          ))}

          {filteredSanctuaries.length === 0 && (
            <div className="col-span-1 md:col-span-3 text-center py-12 bg-white/40 rounded-3xl border border-dashed border-outline-variant/30">
              <p className="text-sm font-sans text-on-surface-variant italic">
                No sanctuaries match your filter criteria. Let's try searching "Vrindavan" or "Rishikesh".
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
