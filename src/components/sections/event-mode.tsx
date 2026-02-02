"use client";

import React from 'react';

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
                    <div className="h-[80px] w-full max-w-[500px] mx-auto">
                        {!isClaimed ? (
                            <form onSubmit={handleClaim} className="flex flex-col md:flex-row gap-4 w-full">
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
                            </form>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#d8c3a5]/10 border border-[#d8c3a5]/30 rounded-full animate-in fade-in zoom-in duration-300">
                                <span className="text-[#d8c3a5] font-mono text-lg tracking-wide">
                                    Username <span className="font-bold text-white">{username}</span> reserved!
                                </span>
                            </div>
                        )}
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
