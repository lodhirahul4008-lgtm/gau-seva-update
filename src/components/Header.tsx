import { useState, useEffect } from "react";
import { Leaf, Menu, X, Landmark } from "lucide-react";

interface HeaderProps {
  onDonateClick: () => void;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({ onDonateClick, onSectionClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Our Gaushalas", id: "sanctuaries" },
    { name: "Blessed Breeds", id: "breeds" },
    { name: "Live Blessing Cam", id: "live" },
    { name: "Community Wall", id: "community" },
    { name: "80G Tax Beneft", id: "tax-benefit" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl py-3 border-b border-outline-variant/20 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="flex justify-between items-center px-4 md:px-margin-desktop py-2 max-w-container-max mx-auto w-full">
        {/* Brand Logo */}
        <div 
          onClick={() => onSectionClick("home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Leaf className="text-primary w-7 h-7" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight leading-none">
              Gau Seva Trust
            </span>
            <span className="text-[10px] font-sans font-bold text-on-surface-variant uppercase tracking-widest mt-0.5">
              Sacred Care & Stewardship
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className="font-sans font-semibold text-sm text-on-surface-variant hover:text-primary transition-all duration-300 relative py-1 group cursor-pointer"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => onSectionClick("tax-benefit")}
            className="flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-secondary/5 cursor-pointer"
          >
            <Landmark className="w-4 h-4" />
            <span>80G Tax Exemption</span>
          </button>
          <button
            id="header-donate-btn"
            onClick={onDonateClick}
            className="btn-gradient text-on-primary px-6 py-2.5 rounded-2xl font-sans font-bold text-sm hover:scale-[1.03] active:scale-95 transition-all cursor-pointer shadow-md"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onDonateClick}
            className="btn-gradient text-on-primary px-4 py-2 rounded-xl font-sans font-bold text-xs cursor-pointer"
          >
            Donate
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-primary/10 text-primary cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant/30 px-6 py-6 flex flex-col gap-4 shadow-xl transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionClick(item.id);
                setIsOpen(false);
              }}
              className="text-left font-sans font-bold text-base text-on-surface py-2 hover:text-primary border-b border-slate-200/40"
            >
              {item.name}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-3">
            <button
              onClick={() => {
                onSectionClick("tax-benefit");
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-secondary font-semibold"
            >
              <Landmark className="w-4 h-4" />
              80G Tax Benefit Calculator
            </button>
            <button
              onClick={() => {
                onDonateClick();
                setIsOpen(false);
              }}
              className="btn-gradient text-white text-center py-3 rounded-2xl font-bold w-full"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
