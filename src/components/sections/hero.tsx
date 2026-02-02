"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { Sparkles, Ticket } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen px-6 text-center overflow-hidden bg-[#0f2f2f]">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#d8c3a5] rounded-full blur-[120px] opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2a9d8f] rounded-full blur-[100px] opacity-20"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[800px] w-full mx-auto">
        {/* Branding */}
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6 flex justify-center"
        >
          <div className="relative w-[140px] h-[50px] md:w-[180px] md:h-[60px]">
            <Image
              src="/logo.png"
              alt="Charcha Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Soft Launch Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full inline-flex items-center backdrop-blur-md shadow-xl"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
          <p className="text-[11px] md:text-[13px] font-medium text-white/90 tracking-[0.2em] uppercase">
            Soft Launch 2026
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 text-white text-[42px] md:text-[84px] font-semibold leading-[1.1] md:leading-[1.05] tracking-[-0.04em] font-display"
        >
          India, meet your <br className="hidden md:block" /> new <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8c3a5] to-[#ece4d9]">video adda</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-10 text-gray-300 text-base md:text-xl leading-[1.6] font-normal font-body max-w-[600px] px-4"
        >
          We’re building the future of desi storytelling. No corporate algorithms, just pure creativity. Join the community before we go global.
        </motion.p>

        {/* Waitlist Form */}
        <div className="w-full mb-12 flex justify-center items-center px-4">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="relative flex flex-col md:flex-row items-center w-full max-w-[480px] gap-4 md:gap-0"
              >
                <div className="relative w-full shadow-2xl rounded-2xl md:rounded-full overflow-hidden border border-white/10 hover:border-[#d8c3a5]/50 transition-colors duration-300 bg-white/5 backdrop-blur-xl group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-[60px] md:h-[72px] pl-6 md:pl-8 pr-6 md:pr-[180px] bg-transparent border-none text-lg md:text-xl focus:ring-0 transition-all outline-none text-white placeholder:text-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="hidden md:flex absolute right-2 top-2 bottom-2 px-8 bg-[#d8c3a5] text-[#0f2f2f] text-[16px] font-bold rounded-full hover:bg-white transition-all items-center gap-2"
                  >
                    Join the Party
                  </button>
                </div>

                {/* Mobile Button - Visible only on mobile */}
                <button
                  type="submit"
                  className="md:hidden w-full h-[56px] bg-[#d8c3a5] text-[#0f2f2f] text-[16px] font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Join the Party
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative group cursor-default w-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d8c3a5] to-[#bfa07a] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6 px-6 py-6 md:px-10 md:py-5 bg-[#0f2f2f] border border-[#d8c3a5]/50 rounded-xl shadow-2xl">
                  <div className="w-14 h-14 rounded-full bg-[#d8c3a5]/10 flex items-center justify-center border border-[#d8c3a5] shadow-[0_0_15px_rgba(216,195,165,0.3)] shrink-0">
                    <Ticket className="text-[#d8c3a5] w-7 h-7" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <h3 className="text-[#d8c3a5] font-bold text-lg md:text-xl tracking-wide">YOU'RE ON THE LIST</h3>
                      <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    </div>
                    <p className="text-gray-400 text-sm font-mono mt-1">Position: <span className="text-white font-bold">#2,401</span></p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-[3px] border-[#0f2f2f] overflow-hidden relative shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={48} height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-12 h-12 rounded-full border-[3px] border-[#0f2f2f] overflow-hidden relative shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={48} height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-12 h-12 rounded-full border-[3px] border-[#0f2f2f] overflow-hidden relative shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={48} height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-12 h-12 rounded-full border-[3px] border-[#0f2f2f] overflow-hidden relative shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={48} height={48}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-[14px] text-white/40 font-medium tracking-wide">
            Join <span className="text-white font-bold">2,400+ creators</span> waiting for the drop
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;