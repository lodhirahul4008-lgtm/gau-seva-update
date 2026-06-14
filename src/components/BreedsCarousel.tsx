import { useState } from "react";
import { ChevronLeft, ChevronRight, Bookmark, CircleDot, Info, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Breed {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  characteristic: string;
  details: {
    history: string;
    temperature: string;
    milkYield: string;
    specialTrait: string;
  };
}

export default function BreedsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const breeds: Breed[] = [
    {
      id: "b1",
      name: "The Gir Cow",
      description: "Originating in the clean native Gir forests of Kathiawar, Gujarat, they represent one of the most milk-potent indigenous cow lineages in India, celebrated for their unique Suryaketu Nadi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvPFz8_9KVhxQ-hUu2z0SHMnHFyJNyciiXh-DvsY7ntQ8y7tOYBRygOmqHu24ef2Mm-SbPf2gV717TwYCcsQLNZaJKy8CvI0js7VIyP4Rm3rgEo7MUSicw408CV6BxYxhD-z0uWDWCWwo7mAVE8aV5JOvC9gViDdO_4o2P9nncIAYYYAtjfFJDRE7VfXM_AVGDuvymxWRd8bAIk9psEVzbB-gn9OuUVFTt7FzkkC3zkIuDJMllZtNQJArx6U8Z3R-Tt6Xu-Z9mcYM",
      origin: "Gujarat",
      characteristic: "Suryaketu Nadi",
      details: {
        history: "A heritage breed with historical references in Vedic literature, primarily bred by local pastoral communities (Maldharis) for robust climatic endurance.",
        temperature: "Very gentle, docile, and forms an deep vocal connection with handlers.",
        milkYield: "Highly nutrient-dense A2 milk containing gold salts through solar absorption.",
        specialTrait: "Features a prominent, curved forehead protecting the brain from solar heat, and crescent-shaped horns.",
      }
    },
    {
      id: "b2",
      name: "The Sahiwal Breed",
      description: "Recognized by their striking reddish-brown skin pigmentation and heavy humps, Sahiwal cattle represent one of India's most drought-tolerant, premium dairy breeds.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo7JZjZlIb6ybyZQA6I_TCKjjm4_U0LsiLaGLH4p4vtIbvSJ0D34pducqbtgTWXkHmSZ0KMkxqEm2S25l1oweQ6h7M8w9uxTkHTwReLtyR-l7RGocD2rOX4JlxNr08XUU_9ovwHnCzy-Q_knZ8_IJNvz2e9e0kRF0Hlfine-UZw2xVB-lYbcIdvAQMNPUO5zPxuF8v7tN2g22-aJfa6nWoubQBsi0xwi_XdyigEpYMxXxG-qOUfynWIR7pWKmY8WjsC-kq680xHwQ",
      origin: "Punjab / Haryana",
      characteristic: "Heat Resilient",
      details: {
        history: "A breed that developed in dry, arid regions. Sahiwals represent outstanding metabolic efficiency and natural resistance to common tick-borne diseases.",
        temperature: "Highly adaptable, and thrives well in close community spaces.",
        milkYield: "Produces rich, thick A2 milk under natural grazing diets.",
        specialTrait: "Remarkably loose skin fold under neck (dewlap) that assists with natural thermoregulation in oppressive heat.",
      }
    },
    {
      id: "b3",
      name: "The Tharparkar",
      description: "A gorgeous silvery-grey or pristine white desert lineage celebrated for extreme drought-survival, Tharparkar is native to Rajasthan's desert regions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuvzNLaDa5rRYqRS67AW8ocQnHbepbriBx4IqVmncNWaeF9ecV1OaEXJeZ1mA7blyiLqmU1kXzZ_WNK0SkZ90a3Ktk1kRsgr4k_7OXAW3664vRyoDpDZ1tM1XK6sWQjDV8iWFk12ubVUyWxyiNaqupnybtgA5SCA8dMCcJuFbP94atbubhvKxya06p3owdhdZct6yM3WMG61TRTpRK12KsGpP7bKnzq9Q8vt_0CrsOGUse5F4kdDyGH2aWkUn8EV1iuFYYlp53f7Q",
      origin: "Rajasthan",
      characteristic: "Desert Soul",
      details: {
        history: "Bred historically in the arid sands of Thar, making them exceptionally sturdy walkers capable of long journeys across saline rangelands.",
        temperature: "Alert, intelligent, and fiercely loyal to their sanctuary caretakers.",
        milkYield: "Sustained production even during dry weather and harsh fodder seasons.",
        specialTrait: "Prisinte white reflective skin that repels heavy solar rays, preventing heat-strokes.",
      }
    },
    {
      id: "b4",
      name: "The Red Sindhi",
      description: "Resilient, robust, and highly milk-potent. Red Sindhi represents a very historical and versatile breed that thrives across diverse topographical landscapes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtjs7U6sq-xlv3zBVGpC9_kyLmd0tYHytlcFJIZ3bHhZLanmqiFZklY9i-1PBrtplSfeu7NlW_fpGzrAgyYmZgQPhNrTwYlfQtwxYmA6mpYAh893xayxhZP45M5fRpY-VlY4fT0Yh7n0ZyJQY5FP_fwuI7JB_EsSkMdaLGd9ljlHS15vG1FmnLjLuujg9iahz-mrldZ8OjNuhHJyEd95W3x14lBdH4O7l-gAAOvN4dAkB4QmeyvUDikZ7gJeFTSYwjsTFjkvXj9PA",
      origin: "Coastal Plains",
      characteristic: "Sacred Devotion",
      details: {
        history: "A rugged lineage that has been widespread in key southern and coastal cattle centers, respected for excellent maternal instincts and high longevity.",
        temperature: "Affectionate, quiet, and peaceful; exceptionally comfortable inside group shelters.",
        milkYield: "Highly stable dairy yield with healthy fats and essential proteins.",
        specialTrait: "Striking mahogany-red coat color with highly reflective skin pigments.",
      }
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % breeds.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + breeds.length) % breeds.length);
  };

  const currentBreed = breeds[activeIdx];

  return (
    <section id="breeds" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Header content with arrows */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Indigenous Heritage
            </span>
            <h2 className="font-serif text-3xl md:text-headline-lg font-bold text-on-surface mb-4">
              Blessed Breeds of Bharat
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              India is home to some of the most spiritually significant and resilient cow lineages. Each possesses distinct anatomical and solar properties highlighted by the sages.
            </p>
          </div>

          <div className="flex gap-3 justify-end w-full md:w-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary/5 text-primary transition-colors cursor-pointer"
              aria-label="Previous Breed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-primary flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer shadow-md"
              aria-label="Next Breed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {breeds.map((breed, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <div
                key={breed.id}
                onClick={() => {
                  setActiveIdx(idx);
                  setShowDetailModal(true);
                }}
                className={`bg-surface rounded-4xl p-6 border transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-primary shadow-xl scale-[1.03] bg-primary-fixed/20"
                    : "border-outline-variant/10 hover:shadow-lg hover:border-primary/20"
                }`}
              >
                <div>
                  <div className="w-full aspect-square rounded-3xl bg-slate-100 overflow-hidden mb-6 relative shadow-inner">
                    <img
                      alt={breed.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={breed.image}
                    />
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <CircleDot className="w-2.5 h-2.5 animate-pulse" />
                        Active
                      </div>
                    )}
                  </div>
                  
                  <h4 className="font-serif font-bold text-lg mb-2 text-on-surface group-hover:text-primary transition-colors">
                    {breed.name}
                  </h4>
                  <p className="text-xs font-sans text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                    {breed.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-200/50">
                  <div className="flex items-center gap-2 text-[9px] font-sans font-bold uppercase text-primary tracking-wider">
                    <Bookmark className="w-3.5 h-3.5 shrink-0" />
                    <span>{breed.origin}</span> • <span>{breed.characteristic}</span>
                  </div>
                  <button className="text-xs text-primary font-bold hover:underline shrink-0 font-sans flex items-center gap-0.5">
                    <Info className="w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {breeds.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === activeIdx ? "w-6 bg-primary" : "w-2 bg-outline-variant/30 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Breed Information Lightbox */}
      <AnimatePresence>
        {showDetailModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-4xl max-w-xl w-full p-6 md:p-8 relative border border-outline-variant/30 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-12 -mt-12 pointer-events-none"></div>
              
              <button
                onClick={() => setShowDetailModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-on-surface-variant cursor-pointer z-10"
              >
                <ChevronLeft className="w-5 h-5 rotate-180" />
              </button>

              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    alt={currentBreed.name}
                    className="w-full h-full object-cover"
                    src={currentBreed.image}
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-sans font-bold text-primary tracking-widest block">
                    {currentBreed.origin} • {currentBreed.characteristic}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-on-surface leading-tight">
                    {currentBreed.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm text-on-surface-variant leading-relaxed">
                <div>
                  <h5 className="text-[10px] font-extrabold uppercase text-on-surface tracking-wider mb-1 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    Breed Origins & History:
                  </h5>
                  <p className="text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    {currentBreed.details.history}
                  </p>
                </div>
                
                <div>
                  <h5 className="text-[10px] font-extrabold uppercase text-on-surface tracking-wider mb-1">
                    Behavior & Temperament:
                  </h5>
                  <p className="text-xs">
                    {currentBreed.details.temperature}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-primary/5 p-3 rounded-2xl border border-primary/10">
                    <h6 className="text-[10.5px] uppercase font-bold text-primary leading-none mb-1">
                      Nutritional Value
                    </h6>
                    <p className="text-xs text-on-surface-variant font-medium">
                      {currentBreed.details.milkYield}
                    </p>
                  </div>
                  <div className="bg-secondary/5 p-3 rounded-2xl border border-secondary/10">
                    <h6 className="text-[10.5px] uppercase font-bold text-secondary leading-none mb-1">
                      Solar Aspect
                    </h6>
                    <p className="text-xs text-on-surface-variant font-medium">
                      {currentBreed.details.specialTrait}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
