import { useState } from "react";
import { Landmark, Info, ArrowUpRight, TrendingUp, HandCoins } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function TaxCalculator() {
  const [donationAmount, setDonationAmount] = useState<number>(10000);
  const [taxSlab, setTaxSlab] = useState<number>(30); // 30% tax slab default

  // Indian Section 80G rules:
  // - 50% of the donated amount is allowed as a deduction from taxable gross income.
  // - Deduction Benefit = Donation * 50%
  // - Tax Saved = Deduction Benefit * Tax Slab %
  // - Net Cost = Donation - Tax Saved
  
  const deductionBenefit = donationAmount * 0.5;
  const taxSaved = deductionBenefit * (taxSlab / 100);
  const effectiveCost = donationAmount - taxSaved;

  const quickPills = [2500, 5000, 10000, 25000, 50000];

  const chartData = [
    { name: "Tax Dollars Saved", value: Math.round(taxSaved), color: "#1b6d24" },
    { name: "Your Net Donation Cost", value: Math.round(effectiveCost), color: "#8f4e00" },
  ];

  return (
    <section id="tax-benefit" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
        
        {/* Header Heading */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Government Recognized Charity
          </span>
          <h2 className="font-serif text-3xl md:text-headline-lg font-bold text-on-surface mb-4">
            80G Tax Exemption Calculator
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto">
            All contributions to Gau Seva Trust are 100% genuine and fully eligible for tax exemption under Section 80G of the Indian Income Tax Act. Check your effective sponsorship cost.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left panel: Input Form fields */}
          <div className="lg:col-span-7 bg-white rounded-4xl p-6 md:p-10 border border-outline-variant/10 shadow-lg text-left flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex gap-2.5 items-center border-b border-slate-100 pb-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-extrabold text-on-surface leading-tight">
                    Verify Your Benefit
                  </h4>
                  <p className="text-[11px] font-sans text-on-surface-variant leading-none mt-1">
                    Applicable to individual Indian citizens & corporate tax filers.
                  </p>
                </div>
              </div>

              {/* Donation input */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs uppercase font-extrabold tracking-wider font-sans text-on-surface-variant">
                    Sponsorship / Donation Amount (INR)
                  </label>
                  <span className="text-sm font-extrabold text-primary font-sans">
                    ₹{donationAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                {/* Numeric dynamic input */}
                <input
                  type="number"
                  min={500}
                  max={500000}
                  value={donationAmount || ""}
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                  placeholder="Enter amount, minimum ₹500"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-sans mb-3 text-on-surface focus:outline-none focus:border-primary focus:bg-white"
                />
                
                {/* Quick select pills */}
                <div className="flex flex-wrap gap-2">
                  {quickPills.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setDonationAmount(amt)}
                      className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer ${
                        donationAmount === amt
                          ? "bg-primary text-white shadow-sm"
                          : "bg-slate-100 hover:bg-slate-200 text-on-surface-variant"
                      }`}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Income Tax Slab Rate select */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <label className="text-xs uppercase font-extrabold tracking-wider font-sans text-on-surface-variant">
                    Your Personal / Corporate Income Tax Slab Rate (%)
                  </label>
                  <span className="text-sm font-extrabold text-secondary font-sans font-mono">
                    {taxSlab}% Slab
                  </span>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {[10, 20, 30, 34].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setTaxSlab(rate)}
                      className={`py-3.5 rounded-xl text-xs font-sans font-bold transition-all border cursor-pointer ${
                        taxSlab === rate
                          ? "bg-secondary text-white border-secondary shadow-md"
                          : "bg-white border-slate-200 hover:bg-slate-50 text-on-surface"
                      }`}
                    >
                      {rate}% {rate === 34 ? "(Surcharge)" : ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Informative advice */}
              <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex gap-3 items-start">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] font-sans text-on-surface-variant leading-relaxed">
                  <strong>Standard Law Note:</strong> Cash sponsorships above ₹2,000 are not eligible for 80G tax deductions. Please use online mechanisms (Net Banking, Cards, UPI) inside the donation platform to maintain electronic transaction trail safety.
                </p>
              </div>

            </div>

            {/* Calculations summaries */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-50 p-3 rounded-2xl">
                <span className="text-[9px] uppercase tracking-wider font-bold text-on-surface-variant block mb-1">
                  80G Exemption
                </span>
                <span className="text-xs md:text-sm font-bold text-on-surface font-sans">
                  50% Allowed
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl">
                <span className="text-[9px] uppercase tracking-wider font-bold text-on-surface-variant block mb-1">
                  Taxable Reduction
                </span>
                <span className="text-xs md:text-sm font-bold text-secondary font-sans font-mono">
                  ₹{deductionBenefit.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl">
                <span className="text-[9px] uppercase tracking-wider font-bold text-on-surface-variant block mb-1">
                  Tax Saved Value
                </span>
                <span className="text-xs md:text-sm font-bold text-primary font-sans font-mono animate-pulse">
                  ₹{taxSaved.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

          </div>

          {/* Right panel: Visualization & Outputs */}
          <div className="lg:col-span-5 bg-white rounded-4xl p-6 md:p-10 border border-outline-variant/10 shadow-lg flex flex-col justify-between">
            
            <div className="text-left mb-6">
              <h4 className="font-serif text-lg font-bold text-on-surface mb-2 flex items-center gap-1.5 leading-none">
                <TrendingUp className="w-5 h-5 text-secondary" />
                Benefit Overview
              </h4>
              <p className="text-[11px] font-sans text-on-surface-variant leading-relaxed">
                Visualizing how tax deductions offset your total physical support commitment.
              </p>
            </div>

            {/* Recharts Pie Chart rendering */}
            <div className="h-60 w-full flex items-center justify-center relative">
              {donationAmount > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="55%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(val) => `₹${Number(val).toLocaleString("en-IN")}`}
                      contentStyle={{ fontFamily: "sans-serif", fontSize: "11px", borderRadius: "10px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-xs italic text-on-surface-variant font-sans">
                  Please enter a donation amount to plot benefit chart.
                </p>
              )}

              {/* Center value overlay */}
              {donationAmount > 0 && (
                <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
                  <span className="text-[10px] uppercase font-sans font-extrabold text-on-surface-variant">Sponsorship</span>
                  <p className="text-sm font-serif font-extrabold text-on-surface my-0.5">
                    ₹{donationAmount.toLocaleString("en-IN")}
                  </p>
                  <HandCoins className="w-4 h-4 text-primary mx-auto opacity-75" />
                </div>
              )}
            </div>

            {/* Explanatory details and effective result */}
            <div className="space-y-4 text-left border-t border-slate-100 pt-6">
              <div className="flex justify-between items-center bg-[#1b6d24]/5 p-3 rounded-2xl border border-[#1b6d24]/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1b6d24]"></div>
                  <span className="text-xs font-sans text-on-surface-variant font-semibold">Total Tax Saved Benefit:</span>
                </div>
                <span className="text-sm font-extrabold text-secondary font-sans font-mono">
                  - ₹{taxSaved.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between items-center bg-primary-fixed/30 p-4 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <span className="text-xs font-sans text-on-surface font-extrabold">Net Cost To You:</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold text-primary font-sans font-mono block">
                    ₹{effectiveCost.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[9px] uppercase font-sans font-bold text-on-surface-variant tracking-wider leading-none">
                    For a ₹{donationAmount.toLocaleString("en-IN")} impact
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[9.5px] font-sans text-center text-on-surface-variant/70 leading-normal mt-5 flex justify-center items-center gap-1">
              <span>Automatic digital certificates generated on transaction clearance</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
