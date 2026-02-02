import React from 'react';
import Image from 'next/image';
import { Heart, Music2, Share2, MoreHorizontal } from 'lucide-react';

const ProductPreview = () => {
    return (
        <section className="relative w-full py-32 overflow-hidden flex items-center justify-center perspective-distant">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d8c3a5] opacity-5 rounded-full blur-[120px]" />

            <div className="container relative z-10 flex flex-col items-center">
                {/* Intro Text */}
                <div className="text-center mb-24 max-w-[600px] px-6">
                    <h2 className="text-[40px] md:text-[56px] font-display font-medium text-white mb-6 leading-[1.1]">
                        Immersive, <br /> not addictive.
                    </h2>
                    <p className="text-[#a1a1aa] text-lg font-light leading-relaxed">
                        We stripped away the noise. No cluttered overlays, no distracting metrics. Just you and the story.
                    </p>
                </div>

                {/* The Device */}
                <div className="relative group">
                    {/* Phone Frame */}
                    <div className="relative w-[340px] md:w-[380px] h-[750px] bg-black/80 rounded-[56px] border-[8px] border-[#2a2a2e] shadow-2xl overflow-hidden backdrop-blur-2xl transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">

                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-8 text-white/90 text-sm font-medium">
                            <span>22:04</span>
                            <div className="flex gap-1.5 opacity-80">
                                <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                                <div className="w-0.5 h-2.5 bg-white rounded-[1px]" />
                            </div>
                        </div>

                        {/* Video Feed Placeholder */}
                        <div className="absolute inset-0 bg-gray-900">
                            <Image
                                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800"
                                alt="Video Feed"
                                fill
                                className="object-cover opacity-80"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                        </div>

                        {/* UI Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                            {/* Top Nav (Minimal) */}
                            <div className="mt-14 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <span className="font-display font-bold text-white text-lg">C</span>
                                </div>
                                <div className="px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-xs font-medium text-white/80">
                                    Following
                                </div>
                            </div>

                            {/* Bottom Content Info */}
                            <div className="mb-8">
                                <div className="flex flex-col gap-4 mb-6">
                                    {/* Sidebar Actions */}
                                    <div className="self-end flex flex-col gap-6 items-center">
                                        <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all group-hover/icon:bg-white/20">
                                                <Heart className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-[10px] font-medium text-white">4.2k</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all group-hover/icon:bg-white/20">
                                                <MoreHorizontal className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 group/icon cursor-pointer">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all group-hover/icon:bg-white/20">
                                                <Share2 className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-[10px] font-medium text-white">Share</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/30 p-0.5 mt-2 animate-spin-slow">
                                            <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100"
                                                    alt="Music"
                                                    width={40}
                                                    height={40}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="pr-16">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full border border-white/50 overflow-hidden">
                                            <Image
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100"
                                                alt="Avatar"
                                                width={32}
                                                height={32}
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-white font-medium text-sm">@priyacreates</span>
                                        <span className="text-white/50 text-xs">•</span>
                                        <span className="text-white/70 text-xs">Subscribe</span>
                                    </div>
                                    <p className="text-white/90 text-[15px] leading-snug font-light">
                                        Morning rituals in Varanasi. The silence before the city wakes up is pure magic. ✨ #IncredibleIndia #Varanasi
                                    </p>
                                    <div className="mt-3 flex items-center gap-2 text-white/60 text-xs">
                                        <Music2 size={12} />
                                        <span>Original Audio - Priya Creates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shadow/Reflection */}
                    <div className="absolute -bottom-16 left-10 right-10 h-8 bg-black/40 blur-2xl rounded-[100%]" />
                </div>
            </div>
        </section>
    );
};

export default ProductPreview;
