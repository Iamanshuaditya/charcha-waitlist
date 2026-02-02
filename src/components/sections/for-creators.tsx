import React from 'react';

const ForCreators = () => {
    return (
        <section id="creators" className="py-32 relative overflow-hidden">
            {/* Divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

                    {/* Left: Content */}
                    <div className="flex-1 max-w-[500px]">
                        <div className="inline-block mb-6">
                            <span className="text-[#d8c3a5] font-mono text-xs tracking-[0.2em] uppercase border-b border-[#d8c3a5]/30 pb-1">
                                Creator Economy 2.0
                            </span>
                        </div>

                        <h2 className="text-[48px] md:text-[64px] font-display font-medium text-white leading-tight mb-8">
                            Your content. <br />
                            <span className="text-white/30">Your empire.</span>
                        </h2>

                        <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                            The platform era is over. Welcome to the ownership era.
                            We built Chacha to flip the model: you create the value, so you should keep the wealth.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-[#d8c3a5] font-display text-2xl">01</span>
                                <div>
                                    <h4 className="text-white font-medium text-lg mb-1">90/10 Split</h4>
                                    <p className="text-gray-500 font-light text-sm">Industry-leading revenue share. No hidden fees.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-[#d8c3a5] font-display text-2xl">02</span>
                                <div>
                                    <h4 className="text-white font-medium text-lg mb-1">Data Ownership</h4>
                                    <p className="text-gray-500 font-light text-sm">Export your audience data anytime. You own the relationship.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-[#d8c3a5] font-display text-2xl">03</span>
                                <div>
                                    <h4 className="text-white font-medium text-lg mb-1">Direct Brand Deals</h4>
                                    <p className="text-gray-500 font-light text-sm">Integrated marketplace with zero middleware commissions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Stats Grid */}
                    <div className="flex-1 w-full relative">
                        {/* Abstract Geometric Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#d8c3a5]/10 rounded-full" />

                        <div className="relative z-10 grid grid-cols-2 gap-6">
                            <div className="bg-[#0f2f2f] border border-white/10 p-8 aspect-square flex flex-col justify-end hover:border-[#d8c3a5]/50 transition-colors duration-500 group">
                                <div className="text-[48px] md:text-[56px] font-display text-white mb-2 group-hover:text-[#d8c3a5] transition-colors">90%</div>
                                <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">Revenue Share</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 aspect-square flex flex-col justify-end translate-y-12 backdrop-blur-sm">
                                <div className="text-[48px] md:text-[56px] font-display text-white/40 mb-2">24h</div>
                                <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">Payout Cycles</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ForCreators;
