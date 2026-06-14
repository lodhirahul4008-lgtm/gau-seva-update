import { motion } from "motion/react";
import { Play, Award, CheckCircle } from "lucide-react";

interface HeroProps {
  onDonateClick: () => void;
  onWatchStoryClick: () => void;
}

export default function Hero({ onDonateClick, onWatchStoryClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        {/* Left Side Content Area (Overlaying) */}
        <div className="w-full md:w-1/2 h-full bg-background relative z-10 hidden md:block">
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        {/* Right Side Visual Area (Full bleed on mobile) */}
        <div className="w-full md:w-1/2 h-full relative">
          <img
            className="w-full h-full object-cover"
            alt="A serene golden-hour cinematic shot of a healthy Gir cow and its small calf"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbHIwk2IKLakXa0_CKutxet6uVpDfHMrT2eqMIw7y6bxVj-jPj7BgbuDFOeqmamUL9HTYGrRZL5u4k4M4D9HhxUN26eyNMYep9Px-UWNwmbsYROMFeZHysaDZkAx_3Mb3eR_k5C4MNuNT07VrcYwWsv6qq8E4CU_QRVPT0SbamR5HFCd-JFCO_J8XHmO2a98bLOBW5hOl0_3beYrc-eran6UfAd-Rbg81HcmcmaETVbLXE6D_6BccqmLuLeqsL2zQl7Z8xnXybiUI"
          />
          {/* Subtle vignette/fade bottom on mobile, side-fade on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent md:bg-none"></div>
        </div>
      </div>

      <div className="relative z-20 px-4 md:px-margin-desktop max-w-container-max mx-auto w-full pt-12 md:pt-0">
        <div className="max-w-2xl">
          {/* Slogan pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full font-sans font-bold text-xs md:text-sm mb-6 md:mb-8 shadow-sm"
          >
            <CheckCircle className="w-4 h-4 text-primary" />
            Preserving Bharat's Spiritual Heritage
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-display-lg text-on-surface mb-6 md:mb-8 leading-[1.1] tracking-tight"
          >
            Every Soul Deserves <br />
            <span className="text-primary italic font-serif font-bold">Divine Care.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base md:text-body-lg text-on-surface-variant mb-8 md:mb-12 max-w-lg leading-relaxed"
          >
            Protecting Bharat's sacred cows through compassionate stewardship. Join a community dedicated to the health, dignity, and spiritual preservation of our gentle Gau Mata.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 md:gap-6 items-center"
          >
            <button
              onClick={onDonateClick}
              className="btn-gradient text-on-primary px-8 py-4 md:px-10 md:py-5 rounded-2xl font-sans font-bold text-base shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Start Your Seva
            </button>
            
            <button
              onClick={onWatchStoryClick}
              className="flex items-center gap-3 font-sans font-bold text-primary hover:text-primary-fixed-dim transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </motion.div>

          {/* Devotees counter widget */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 md:mt-16 flex items-center gap-6 pt-6 md:pt-8 border-t border-outline-variant/30 max-w-md"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-300 overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Devotee"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwm7_-q1w4eGiOF9HBb2k4GdtzH5fqFyKUI7T4EOg9pimC70ocMLq59jBCJqSTeykRAGzvAcbyRuurT5rdidvZl5mHd_mWuu6aa7uALJhqjwJjFiUsjcCt4-Cjwhnp9mAAr7RDp305Wv9X_pRmCdxwNLfw4aBvTgrv4xMHtXecOsqNjOYJuPLVnWPRTv987rbz7nlOCCPRF7KEDOYoA2v6RFlLdk6KClgJvqIVTUIWqM524gAU0Up09IYjtt44ZXpB4wjC62Dhgl8"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-300 overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Devotee"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH_pHe_9L-v5F6GRt6TcEK9-z7L5hzIQH4kPwkod-7sgAIGSf-TgwYeteL0lMcy9-SKNuB5d8XqgGZVds2M0CbrAqiRizefl6qVTh3xtCsOXGLV4khYIhgcQgMwsZrlyqZHcGQo6kjhxt_h6DYSpSX3316NYuR84LEqMqFQQEf_qz30l8gqmdsp32uqjsVgoHFS2AiDmZBA8-nxC4wwf8hMYhDreyRU5qqB94B5ujpDRxqqJznQB9zgzzzpMXuR_e0m83DqokmL80"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-300 overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Devotee"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgqdBG2Zlo6PJQUI9O3GnLD52juCQ9rByhW-7NK2vO8nJ3CVCEtsq60P3HtIe8Pd4aABgzCDdxecGj-gNaCWnxMIrY-wi--qNrPRBFkR4X4SoVDfjgwbwa8p22UsKo4lYtk6FupYHhvBihDbkYi6KXCPxnz6bqXDE3um0CRcGrTsZkxbrza8XBZol3cZ3wmelrr_V7qrUhG6IJvQCiJIpQKN-NaERnczViB0ge11MzyslYuYSbKu1qADwpxDDqnT7vZBCIo8ikR6g"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-sans font-semibold text-on-surface-variant tracking-wider leading-relaxed">
                Join <span className="font-extrabold text-on-surface text-sm">5,000+</span> National Devotees
                <br />
                Contributing to Cow Care this month
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
