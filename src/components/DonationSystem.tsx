import React, { useState } from "react";
import { CheckCircle2, QrCode, CreditCard, ChevronRight, User, Heart, Star, Printer, X, Download } from "lucide-react";
import { DonationPackage } from "../types";

interface DonationSystemProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedSanctuary?: string;
}

export default function DonationSystem({
  isOpen,
  onClose,
  preSelectedSanctuary = "Krishna Seva Dham (Vrindavan)",
}: DonationSystemProps) {
  const [step, setStep] = useState<number>(1); // 1: Package, 2: Info, 3: Pay, 4: Receipt
  const [selectedPkgId, setSelectedPkgId] = useState<string>("pkg1");
  const [customAmount, setCustomAmount] = useState<number>(500);
  const [sanctuary, setSanctuary] = useState(preSelectedSanctuary);

  // Donor state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [panNo, setPanNo] = useState("");
  const [prayer, setPrayer] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card">("upi");
  const [processingState, setProcessingState] = useState<"idle" | "verifying" | "sanctifying" | "success">("idle");

  const donationPackages: DonationPackage[] = [
    {
      id: "pkg1",
      name: "One Day Feeding",
      subtitle: "Fresh organic clover grass & sweet fodder",
      cost: 250,
      description: "Feeds an entire herd of cow calves for a whole day, including healthy green clover, wheat bran digestives, and clean energized water.",
      unit: "Per Day",
      icon: "🌾"
    },
    {
      id: "pkg2",
      name: "Critical Medical Kit",
      subtitle: "Orthopedic braces, herbal balms & vaccines",
      cost: 1200,
      description: "Directly funds life-saving medicines, antiseptic washes for rescued stray cows, skin hydration oils, and critical fracture casts.",
      unit: "Per Kit",
      icon: "🩹"
    },
    {
      id: "pkg3",
      name: "Monthly Cow Adoption",
      subtitle: "Complete digital stewardship and care",
      cost: 2500,
      description: "Sponsors complete shelter, customized feed, and detailed veteran supervision for a single cow for an entire month, with photographic milestones emailed to you.",
      unit: "Per Month",
      icon: "👑"
    },
    {
      id: "pkg_custom",
      name: "Custom Devotion Seva",
      subtitle: "Choose your unique contribution level",
      cost: 0,
      description: "Submit a unique contribution amount directly allocated to general sanctuary maintenance, water harvesting reservoirs, or medical clinics.",
      unit: "Custom",
      icon: "✨"
    },
  ];

  const activePackage = donationPackages.find((p) => p.id === selectedPkgId) || donationPackages[0];
  const finalDonationAmount = selectedPkgId === "pkg_custom" ? customAmount : activePackage.cost;

  const handleNextStep1 = () => {
    if (selectedPkgId === "pkg_custom" && (!customAmount || customAmount < 100)) {
      alert("Please enter a devotion amount of at least ₹100.");
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill in all critical registration blocks.");
      return;
    }
    
    // Quick Indian PAN validation if filed for tax certificate
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (panNo.trim() && !panPattern.test(panNo.toUpperCase().trim())) {
      alert("Please check your Indian PAN number. 80G receipts need a valid 10-character PAN syntax (e.g. ABCDE1234F) to claim income tax deduction.");
      return;
    }
    
    setStep(3);
  };

  const handleSimulatePayment = () => {
    setProcessingState("verifying");
    
    setTimeout(() => {
      setProcessingState("sanctifying");
      
      setTimeout(() => {
        setProcessingState("success");
        setStep(4);
      }, 1500);
    }, 1200);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const receiptId = `GST-80G-${Math.floor(100000 + Math.random() * 900000)}`;
  const transactionId = `TXN-${Math.floor(592038592 + Math.random() * 407000000)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto no-scrollbar">
      
      {/* Lightbox Main Container Area */}
      <div className="bg-white rounded-4xl max-w-2xl w-full relative shadow-2xl overflow-hidden text-left my-8">
        
        {/* Modal Header */}
        <div className="bg-primary-fixed/30 px-6 py-5 border-b border-primary/10 flex justify-between items-center bg-zinc-50">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-primary fill-current" />
            <div>
              <h3 className="font-serif text-lg font-bold text-on-surface leading-none">
                Devotional Seva platform
              </h3>
              <p className="text-[10.5px] font-sans text-on-surface-variant leading-none mt-1">
                Your contributions directly fund Cow Food, Medical Relief & Green Pastures
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/50 text-on-surface-variant hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator Panel */}
        {step < 4 && (
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4 text-xs font-sans text-on-surface-variant select-none">
            <div className={`flex items-center gap-1.5 ${step === 1 ? "text-primary font-bold" : ""}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? "bg-primary text-white" : "bg-slate-200"}`}>1</span>
              <span>Select Seva</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <div className={`flex items-center gap-1.5 ${step === 2 ? "text-primary font-bold" : ""}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? "bg-primary text-white" : "bg-slate-200"}`}>2</span>
              <span>Devotee Info</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <div className={`flex items-center gap-1.5 ${step === 3 ? "text-primary font-bold" : ""}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? "bg-primary text-white" : "bg-slate-200"}`}>3</span>
              <span>Secure Payment</span>
            </div>
          </div>
        )}

        {/* Step 1: Packages selecting */}
        {step === 1 && (
          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <label className="text-xs uppercase font-extrabold tracking-wider font-sans text-on-surface-variant block">
                Assign Sponsorship Sanctuary Location
              </label>
              <select
                value={sanctuary}
                onChange={(e) => setSanctuary(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white"
              >
                <option value="Krishna Seva Dham (Vrindavan)">Krishna Seva Dham — Vrindavan (450+ Cows)</option>
                <option value="Himalayan Gau Gram (Rishikesh)">Himalayan Gau Gram — Rishikesh (220+ Calves)</option>
                <option value="Heritage Gau Shala (Hampi)">Heritage Gau Shala — Hampi (310+ Rare Breeds)</option>
              </select>
            </div>

            <div className="space-y-3.5">
              <label className="text-xs uppercase font-extrabold tracking-wider font-sans text-on-surface-variant block">
                Choose a Seva Package Plan
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donationPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between min-h-[140px] text-left ${
                      selectedPkgId === pkg.id
                        ? "border-primary bg-primary-fixed/20 shadow-md scale-[1.01]"
                        : "border-slate-200/60 hover:bg-slate-50/50"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-2xl mb-1">{pkg.icon}</span>
                        {pkg.cost > 0 ? (
                          <span className="text-sm font-extrabold text-primary font-sans">
                            ₹{pkg.cost.toLocaleString("en-IN")}
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-secondary font-sans uppercase">
                            Open Devotion
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif font-bold text-sm text-on-surface mt-1">
                        {pkg.name}
                      </h4>
                      <p className="text-[10px] text-on-surface-variant font-sans mt-0.5 whitespace-pre-wrap">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom contribution amount if selected custom */}
            {selectedPkgId === "pkg_custom" && (
              <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 space-y-2 animate-fade-in">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs uppercase font-extrabold tracking-wider font-sans text-on-surface-variant">
                    Specific Devotion Amount (INR)
                  </label>
                  <span className="text-xs text-primary font-bold">Minimum ₹100 required</span>
                </div>
                <input
                  type="number"
                  min={100}
                  value={customAmount || ""}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  placeholder="e.g. ₹5,001"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm font-sans font-bold focus:outline-none focus:border-primary text-on-surface"
                />
              </div>
            )}

            <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100 text-xs text-on-surface-variant font-sans flex justify-between items-center">
              <div>
                <span className="uppercase text-[9px] tracking-wider font-extrabold text-on-surface-variant">Allocated sponsorship:</span>
                <p className="text-on-surface font-extrabold font-serif mt-0.5 leading-none">
                  {activePackage.name}
                </p>
              </div>
              <div className="text-right">
                <span className="uppercase text-[9px] tracking-wider font-extrabold text-on-surface-variant">Impact support:</span>
                <p className="text-base font-black text-primary font-sans font-mono leading-none mt-0.5">
                  ₹{finalDonationAmount.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <button
              onClick={handleNextStep1}
              className="w-full bg-primary text-white py-4 rounded-2xl font-sans font-bold text-base hover:bg-primary/95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Configure Devotee Info
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Donor general information details */}
        {step === 2 && (
          <form onSubmit={handleNextStep2} className="p-6 md:p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-on-surface-variant mb-1.5 font-sans">
                  Devotee First Name
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Anant"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 pl-11 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white"
                  />
                  <User className="absolute left-4 top-4 w-4.5 h-4.5 text-on-surface-variant/70" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-on-surface-variant mb-1.5 font-sans">
                  Devotee Last Name
                </label>
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Prasad"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-on-surface-variant mb-1.5 font-sans">
                  Contact Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91-9876543210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-extrabold tracking-wider text-on-surface-variant mb-1.5 font-sans">
                  Electronic Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="anant.prasad@domain.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1.5">
                <label className="block text-xs uppercase font-extrabold tracking-wider text-on-surface-variant font-sans leading-none">
                  Indian PAN Card number
                </label>
                <span className="text-[10px] text-secondary font-bold font-sans">Required for Section 80G tax benefit claim</span>
              </div>
              <input
                type="text"
                value={panNo}
                onChange={(e) => setPanNo(e.target.value)}
                maxLength={10}
                placeholder="e.g. ABCDE1234F"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white uppercase"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-extrabold tracking-wider text-on-surface-variant mb-1.5 font-sans">
                Devotional Message / Prayer Offerings
              </label>
              <textarea
                value={prayer}
                onChange={(e) => setPrayer(e.target.value)}
                rows={2}
                maxLength={150}
                placeholder="Write your prayers/blessings. Caretakers read messages to cows during rituals..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-xs font-sans text-on-surface focus:outline-none focus:border-primary focus:bg-white whitespace-pre-wrap"
              />
            </div>

            <div className="flex gap-4 pt-1">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-on-surface-variant py-4 rounded-2xl font-sans font-bold text-sm cursor-pointer text-center"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-[2] bg-primary text-white py-4 rounded-2xl font-sans font-bold text-sm hover:bg-primary/95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                Continue to Payment
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

        {/* Step 3: Payment details */}
        {step === 3 && (
          <div className="p-6 md:p-8 space-y-6">
            
            {processingState === "idle" ? (
              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider font-sans text-on-surface-variant block mb-3 text-left">
                    Select secure transaction environment
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer justify-center font-sans font-bold text-xs transition-all ${
                        paymentMethod === "upi"
                          ? "border-secondary bg-secondary/5 text-secondary"
                          : "border-slate-200 text-on-surface-variant hover:bg-slate-50"
                      }`}
                    >
                      <QrCode className="w-5 h-5 shrink-0" />
                      Instant UPI QR
                    </button>
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer justify-center font-sans font-bold text-xs transition-all ${
                        paymentMethod === "card"
                          ? "border-secondary bg-secondary/5 text-secondary"
                          : "border-slate-200 text-on-surface-variant hover:bg-slate-50"
                      }`}
                    >
                      <CreditCard className="w-5 h-5 shrink-0" />
                      Credit / Debit Card
                    </button>
                  </div>
                </div>

                {/* UPI UI screen */}
                {paymentMethod === "upi" ? (
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center space-y-4 animate-fade-in flex flex-col items-center">
                    <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60 shadow-inner w-36 h-36 flex items-center justify-center">
                      {/* Beautiful dummy QR code representing Trust recipient */}
                      <svg className="w-full h-full text-on-surface" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="6" height="6" />
                        <rect x="2" y="16" width="6" height="6" />
                        <rect x="16" y="2" width="6" height="6" />
                        <rect x="11" y="11" width="2" height="2" />
                        <rect x="16" y="16" width="2" height="2" />
                        <path d="M19 19h1v1h-1zM16 11h1v1h-1z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-sans font-bold text-secondary-fixed-variant tracking-wider bg-secondary/10 px-3 py-1 rounded-full border border-secondary/10">
                        Scan with BHIM, GPay, PhonePe, Paytm
                      </span>
                      <p className="text-[11px] font-sans text-on-surface-variant mt-2 max-w-sm mx-auto leading-normal">
                        To finalize your sponsorship donation of <strong>₹{finalDonationAmount.toLocaleString("en-IN")}</strong> to General welfare, scan QR or click pay validation simulate.
                      </p>
                    </div>
                  </div>
                ) : (
                  // Card UI screen
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-[10.5px] uppercase font-extrabold tracking-wider text-on-surface-variant mb-1 font-sans">
                        Credit/Debit Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="4111 2222 3333 4444"
                        disabled
                        className="w-full bg-slate-100 border border-slate-200 cursor-not-allowed rounded-xl px-3 py-2.5 text-xs font-sans text-on-surface-variant font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10.5px] uppercase font-extrabold tracking-wider text-on-surface-variant mb-1 font-sans">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="***"
                          disabled
                          className="w-full bg-slate-100 card-inputs cursor-not-allowed border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-sans text-on-surface-variant"
                        />
                      </div>
                      <div>
                        <label className="block text-[10.5px] uppercase font-extrabold tracking-wider text-on-surface-variant mb-1 font-sans">
                          CVV Number
                        </label>
                        <input
                          type="password"
                          placeholder="***"
                          disabled
                          className="w-full bg-slate-100 cursor-not-allowed border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-sans text-on-surface-variant font-mono"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] font-sans text-on-surface-variant italic text-left">
                      Note: Indian Card Gateway simulation matches active test guidelines. Prefer UPI scanner for instant provisional release.
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-on-surface-variant py-4 rounded-2xl font-sans font-bold text-sm cursor-pointer text-center"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSimulatePayment}
                    className="flex-[2] btn-gradient text-white py-4 rounded-2xl font-sans font-bold text-sm hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    Confirm & Authorize Seva
                  </button>
                </div>
              </div>
            ) : (
              // Immersive processing dashboard loader
              <div className="py-12 space-y-6 text-center flex flex-col items-center">
                
                <div className="relative w-16 h-16 rounded-full border-4 border-slate-200 border-t-primary animate-spin"></div>
                
                <div>
                  <h4 className="font-serif text-lg font-bold text-on-surface">
                    {processingState === "verifying" ? "Registering Your Devotion..." : "Sanctifying Sacred Fodder Transfer..."}
                  </h4>
                  <p className="text-xs font-sans text-on-surface-variant mt-2 max-w-sm mx-auto leading-relaxed">
                    {processingState === "verifying" 
                      ? `We are securely validating your PAN details and connecting with our local regional officers in ${sanctuary}.`
                      : "Dedicating funds to critical feed channels, preparing organic grain purchases, and issuing standard certificates."
                    }
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="p-1.5 px-3 rounded-full uppercase tracking-wider bg-slate-100 border text-[9px] font-mono text-on-surface-variant">SECURE GATEWAY ENCRYPTION SYSTEM</span>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Step 4: Receipts / printable high-fidelity proof (Printable page) */}
        {step === 4 && (
          <div className="p-6 md:p-8 space-y-6 block">
            
            <div className="text-center py-4 flex flex-col items-center space-y-2 border-b border-dashed border-slate-200 pb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-1">
                <CheckCircle2 className="w-6 h-6 fill-current" />
              </div>
              <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-secondary text-center leading-none">
                Jai Gau Mata • Seva Completed Successfully
              </span>
              <h2 className="font-serif text-2xl font-bold text-on-surface text-center">
                Spiritual Receipt & Exemption Pass
              </h2>
            </div>

            {/* Receipt Box design (This is standard high quality formatting!) */}
            <div id="recharts-tax-receipt-proof" className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 space-y-5 text-left relative font-sans text-xs">
              
              {/* Trust watermark stamp */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-9xl text-primary font-bold">
                80G
              </div>

              {/* Logo / Metadata */}
              <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                <div>
                  <span className="font-serif font-bold text-sm text-primary">Gau Seva Trust Charity</span>
                  <p className="text-[10px] text-on-surface-variant uppercase font-semibold leading-none mt-1">
                    Reg No: F-49204 (ESTD 2012)
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10.5px] font-bold text-on-surface block leading-none">
                    Receipt: <span className="text-primary font-extrabold">{receiptId}</span>
                  </span>
                  <span className="text-[9.5px] text-on-surface-variant font-mono mt-1 block">
                    {new Date().toLocaleDateString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Donor particulars */}
              <div className="grid grid-cols-2 gap-4 text-[11px] leading-relaxed">
                <div>
                  <p className="text-on-surface-variant font-medium">Sponsor Name:</p>
                  <strong className="text-on-surface font-bold">
                    {firstName} {lastName}
                  </strong>
                </div>
                <div>
                  <p className="text-on-surface-variant font-medium">Donor PAN Number:</p>
                  <strong className="text-on-surface font-mono font-bold">
                    {panNo.toUpperCase() || "NOT APPLICABLE (NO 80G)"}
                  </strong>
                </div>
                <div>
                  <p className="text-on-surface-variant font-medium">Phone / Contact:</p>
                  <strong className="text-on-surface font-bold">
                    {phone}
                  </strong>
                </div>
                <div>
                  <p className="text-on-surface-variant font-medium">Sponsorship Sanctuary:</p>
                  <strong className="text-on-surface font-bold">
                    {sanctuary}
                  </strong>
                </div>
              </div>

              {/* Financial values */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/60 text-xs">
                <div className="flex justify-between border-b pb-2 mb-2 font-semibold">
                  <span>Particular Care Support Allocated</span>
                  <span className="text-right">Total Transferred Unit</span>
                </div>
                <div className="flex justify-between text-on-surface-variant leading-relaxed pb-1">
                  <span>{activePackage.name} Sponsoring Package ({activePackage.subtitle})</span>
                  <span className="text-on-surface font-bold">₹{finalDonationAmount.toLocaleString("en-IN")}.00</span>
                </div>
                {panNo.trim() && (
                  <div className="flex justify-between text-secondary pb-1 italic font-medium">
                    <span>provisional 80G Exemption deduction (50% value)</span>
                    <span>₹{(finalDonationAmount * 0.5).toLocaleString("en-IN")}.00</span>
                  </div>
                )}
                
                <div className="flex justify-between border-t pt-2 mt-2 font-bold text-on-surface text-sm">
                  <span>Total Gross Contribution paid:</span>
                  <span className="text-primary font-mono">₹{finalDonationAmount.toLocaleString("en-IN")}.00</span>
                </div>
              </div>

              {/* Footer advice */}
              <div className="space-y-1.5 border-t border-slate-200 pt-3">
                <div className="flex items-start gap-1">
                  <Star className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <p className="text-[10px] text-on-surface-variant leading-relaxed font-sans">
                    <strong>Devotee Prayer offerings:</strong> <span className="italic">"{prayer || "Om Namo Gau Mata. Blessed life."}"</span>
                  </p>
                </div>
                <p className="text-[9.5px] text-on-surface-variant/80 font-sans italic text-center">
                  This provisional receipt serves as genuine verification under Income Tax Act Section 80G. Official Form 10BE certificate will be shared automatically on bulk return filings.
                </p>
              </div>

            </div>

            {/* Action panel triggers */}
            <div className="flex gap-4">
              <button
                onClick={handlePrintReceipt}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-on-surface py-4 rounded-2xl font-sans font-bold text-sm cursor-pointer flex items-center justify-center gap-2 border shadow-sm"
              >
                <Printer className="w-4.5 h-4.5" />
                Print Receipt
              </button>
              
              <button
                onClick={onClose}
                className="flex-[2] btn-gradient text-white py-4 rounded-2xl font-sans font-bold text-sm hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4.5 h-4.5" />
                Finish & Go Home
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
