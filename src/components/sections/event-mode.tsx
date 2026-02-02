"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, QrCode, User } from 'lucide-react';
const EventMode = () => {
    const [username, setUsername] = React.useState('');
    const [isClaimed, setIsClaimed] = React.useState(false);

    const handleClaim = (e: React.FormEvent) => {
        e.preventDefault();
        if (username) {
            setIsClaimed(true);
        }
    };

    return (
        <section id="event" className="py-32 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d8c3a5] opacity-[0.03] blur-[100px] rounded-full" />

            <div className="max-w-[1000px] mx-auto relative z-10">
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[48px] p-12 md:p-24 text-center backdrop-blur-md overflow-hidden relative">

                    {/* Decorative Corner Lines */}
                    <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-white/20" />
                    <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-white/20" />
                    <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-white/20" />
                    <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-white/20" />

                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#d8c3a5]/10 border border-[#d8c3a5]/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d8c3a5] animate-pulse" />
                        <span className="text-[#d8c3a5] text-xs font-mono tracking-widest uppercase">Live @ Soft Launch</span>
                    </div>

                    <h2 className="text-[48px] md:text-[64px] font-display font-medium text-white mb-8 leading-tight">
                        Claim your username. <br />
                        <span className="text-[#d8c3a5]">Before the world does.</span>
                    </h2>

                    <p className="text-xl text-gray-400 font-light max-w-[600px] mx-auto mb-12">
                        This is your window. Skip the waitlist and secure your OG handle. Exclusive access closing in 48 hours.
                    </p>

                    {/* Interactive Form Area */}
                    <div className="h-[220px] w-full max-w-[500px] mx-auto flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isClaimed ? (
                                <motion.form
                                    key="claim-form"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    onSubmit={handleClaim}
                                    className="flex flex-col md:flex-row gap-4 w-full"
                                >
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="@yourusername"
                                        className="flex-1 bg-black/30 border border-white/10 rounded-full px-8 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d8c3a5]/50 transition-colors font-mono"
                                        required
                                    />
                                    <button type="submit" className="bg-[#d8c3a5] text-[#0f2f2f] px-10 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(216,195,165,0.2)] whitespace-nowrap">
                                        Claim
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="member-card"
                                    initial={{ rotateX: 90, opacity: 0 }}
                                    animate={{ rotateX: 0, opacity: 1 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                                    className="relative w-full max-w-[400px]"
                                >
                                    {/* Card Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-br from-[#d8c3a5] via-transparent to-[#d8c3a5] rounded-xl blur-lg opacity-40 animate-pulse" />

                                    {/* Actual Card */}
                                    <div className="relative bg-[#1a1a1a]/90 backdrop-blur-xl border border-[#d8c3a5]/30 rounded-xl p-6 flex items-center justify-between shadow-2xl overflow-hidden">
                                        {/* Background pattern on card */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#d8c3a5]/10 rounded-full blur-[40px] pointer-events-none" />

                                        <div className="flex items-center gap-4 z-10">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-black border-2 border-[#d8c3a5] flex items-center justify-center">
                                                <User className="text-[#d8c3a5] w-8 h-8" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-[#d8c3a5] text-xs uppercase tracking-widest font-bold mb-1">Founding Member</p>
                                                <h3 className="text-white font-mono text-xl">{username}</h3>
                                                <div className="flex items-center gap-1 text-green-400 text-xs mt-1">
                                                    <Check size={12} strokeWidth={3} />
                                                    <span>Reserved</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="z-10 bg-white p-1 rounded">
                                            <QrCode className="text-black w-10 h-10" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <p className="mt-8 text-xs text-gray-600 uppercase tracking-widest">
                        Limited availability • First come first served
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EventMode;
