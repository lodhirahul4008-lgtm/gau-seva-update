import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageCircle, Facebook, Instagram, Share2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Seva Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // EmailJS credentials from environment variables or hardcoded user-provided fallbacks
    const envVars = (import.meta as any).env || {};
    const serviceId = envVars.VITE_EMAILJS_SERVICE_ID || "service_hhxgjo";
    // If VITE_EMAILJS_TEMPLATE_ID is empty, fall back to QUICK_TEMPLATE_ID or template_rosul5
    const templateId = envVars.VITE_EMAILJS_TEMPLATE_ID || envVars.VITE_EMAILJS_QUICK_TEMPLATE_ID || "template_rosul5";
    const publicKey = envVars.VITE_EMAILJS_PUBLIC_KEY || "4X8Tgms0rIcHcVh";

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "lodhirahul7002@gmail.com",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Seva Inquiry",
        message: "",
      });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      // Even if there is an error (e.g. quota list, network, dev server config mismatch), 
      // we ensure a beautiful user experience by falling back gracefully or showing a descriptive message
      setStatus("error");
      setErrorMessage(error?.text || "Temporary mail delivery failure. Please try again or reach out on WhatsApp/direct mail.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mandala-pattern"></div>
      
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10">
        
        {/* Head Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Seek Blessings & Connect
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Get In Touch With Gau Seva Trust
          </h2>
          <p className="font-sans text-xs md:text-base text-slate-600 leading-relaxed">
            Have queries about 80G tax benefits, direct calf sponsorships, fodder delivery status, or want to register for a physical Vrindavan gaushala visit? Send us a message instantly.
          </p>
        </div>

        {/* Outer Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info Cards and Social Portals */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Direct Trust Connections
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:lodhirahul7002@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Official Email
                    </span>
                    <span className="text-xs font-semibold text-slate-800 font-mono break-all group-hover:text-primary transition-colors">
                      lodhirahul7002@gmail.com
                    </span>
                  </div>
                </a>

                <div 
                  className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Support Hotline
                    </span>
                    <span className="text-xs font-semibold text-slate-800 font-mono">
                      +91 70020 00000 / +91 94350 00000
                    </span>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors" target="_blank">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      HQ Sanidham
                    </span>
                    <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                      Krishna Seva Dham, Raman Reti Path, Vrindavan, UP - 281121
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Link Blocks */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Official Social Communities
              </h3>
              <p className="text-xs font-sans text-slate-500 leading-relaxed">
                Join our ever-growing digital Sangha networks for daily visual updates, morning prayers (Aarti) broadcasts, and instant feedback.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {/* WhatsApp Community */}
                <a 
                  href="https://wa.me/917002000000?text=Radhe%20Radhe%21%20I%20want%20to%20support%20the%20trust%20for%20Cow%20welfare."
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 transition-colors group text-center"
                >
                  <MessageCircle className="w-6 h-6 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">WhatsApp</span>
                </a>

                {/* Facebook Community */}
                <a 
                  href="https://facebook.com/GauSevaTrustOfficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group text-center"
                >
                  <Facebook className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wide">Facebook</span>
                </a>

                {/* Instagram Community */}
                <a 
                  href="https://instagram.com/GauSevaTrustOfficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-rose-50 border border-rose-100 hover:bg-rose-100 transition-colors group text-center"
                >
                  <Instagram className="w-6 h-6 text-rose-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wide">Instagram</span>
                </a>
              </div>

              {/* Cow Seva Video Showcase */}
              <div className="space-y-2">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left">
                  Featured Sanctuary Video
                </span>
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-slate-950 aspect-video relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/hab0z3UESHs?mute=1&autoplay=0&controls=1"
                    title="Official Gau Seva Sanctuary Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Alert for direct support */}
              <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 text-left">
                <span className="text-amber-800 text-[11px] leading-relaxed block font-medium">
                  🌟 <strong>Quick Note:</strong> Our caretakers are active on WhatsApp 24/7 to clear doubts about online payment receipts and Tax Deductible 80G receipts.
                </span>
              </div>
            </div>

          </div>

          {/* Column 2: Digital Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm relative">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2 text-left">
                Direct Seva Inquiry Form
              </h3>
              <p className="text-xs text-slate-500 mb-8 text-left">
                Use this secure mail portal synced directly to our administrative office to express support or ask legal compliance questions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Rahul Lodhi"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., rahul@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs font-sans"
                    />
                  </div>

                  {/* Subject type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2" htmlFor="subject">
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs font-sans"
                    >
                      <option value="General Seva Inquiry">General Seva Inquiry</option>
                      <option value="Fodder & Medicine Sponsoring">Fodder & Medicine Sponsoring</option>
                      <option value="80G Tax Exemption Query">80G Tax Exemption Query</option>
                      <option value="Vrindavan Sanctuary Visit">Vrindavan Sanctuary Visit</option>
                      <option value="Cattle Rescue Support">Cattle Rescue Support</option>
                    </select>
                  </div>
                </div>

                {/* Message body */}
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2" htmlFor="message">
                    Detailed Message & Blessing Note *
                    </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your query here... Let us know how you would love to support the blessed native cow breeds of cow shelters."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-xs font-sans resize-none"
                  ></textarea>
                </div>

                {/* Submit button / alerts status */}
                <div className="space-y-4 pt-2">
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-bold">Message Delivered Successfully!</p>
                          <p className="mt-0.5 text-emerald-700">Thank you for seeking blessings. Our Gau Seva executive team has received your message and will revert on {formData.email || 'your email'} shortly.</p>
                        </div>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-bold">Error Sending Message</p>
                          <p className="mt-0.5 text-rose-700">{errorMessage}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-gradient w-full py-4 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Delivering Blessings Form...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Mail & Get Blessings</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
