import { Shield, Coins, Sparkles, ChevronRight } from "lucide-react";

interface MilestoneProps {
  onDonateClick: () => void;
  onSectionClick: (sectionId: string) => void;
}

export default function HowWeHelp({ onDonateClick, onSectionClick }: MilestoneProps) {
  const processSteps = [
    {
      id: 1,
      name: "Choose a Plan",
      description: "Select from one-time feed packages, critical medicine support, or customized monthly cow adoptions that align with your heart's calling.",
      icon: <Coins className="w-7 h-7 text-primary" />,
      ctaText: "Explore Plans",
      action: () => onDonateClick()
    },
    {
      id: 2,
      name: "Secure Donation",
      description: "Your critical support goes directly to animal food & welfare through our transparent, audited secure payment gateways.",
      icon: <Shield className="w-7 h-7 text-primary" />,
      ctaText: "Payment Safety",
      action: () => onDonateClick()
    },
    {
      id: 3,
      name: "Receive Blessings",
      description: "Receive timely photographic updates on your supported cows, alongside your 80G tax certificate and the spiritual gratitude of the trust.",
      icon: <Sparkles className="w-7 h-7 text-primary" />,
      ctaText: "80G Certificate",
      action: () => onSectionClick("tax-benefit")
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white mandala-pattern relative">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
          <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="font-serif text-3xl md:text-headline-lg font-bold text-on-surface mb-6">
            How You Can Help
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-outline-variant"></div>
            <div className="w-3 h-3 rounded-full border-2 border-primary-container"></div>
            <div className="w-8 h-[1px] bg-outline-variant"></div>
          </div>
        </div>

        {/* Dynamic 3-columns card stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {processSteps.map((step) => (
            <div key={step.id} className="relative group text-left">
              
              {/* Massive ambient decorative number backdrop */}
              <div className="absolute -top-12 -left-6 text-[180px] font-sans font-black text-primary/5 select-none transition-colors group-hover:text-primary/10 leading-none">
                {step.id}
              </div>
              
              <div className="relative bg-white/40 p-8 md:p-10 rounded-4xl border border-white/60 premium-shadow hover:bg-white/60 transition-all duration-500 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/10">
                    {step.icon}
                  </div>
                  <h4 className="font-serif font-bold text-xl md:text-2xl mb-4 text-on-surface">
                    {step.name}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <button
                  onClick={step.action}
                  className="mt-2 flex items-center gap-1.5 text-primary font-sans font-bold text-xs md:text-sm hover:translate-x-1 transition-transform cursor-pointer text-left w-fit"
                >
                  {step.ctaText}
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
