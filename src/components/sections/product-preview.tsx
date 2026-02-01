import React from 'react';
import Image from 'next/image';
import { Heart, MessageCircle } from 'lucide-react';

const ProductPreview = () => {
    return (
        <section className="relative w-full overflow-hidden py-[100px] flex items-center justify-center bg-[#FDFBF7]">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#FF9933]/20 via-[#3730A3]/10 to-transparent rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 flex flex-col items-center px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-display font-medium text-[#1A1A2E] mb-4">
                        More than just a feed.
                    </h2>
                    <p className="text-[#6B7280] max-w-[500px] mx-auto text-lg">
                        An interface designed for immersion, not addiction.
                    </p>
                </div>

                {/* Abstract Mobile Interface */}
                <div className="relative w-[320px] md:w-[360px] h-[700px] bg-white rounded-[48px] border-[8px] border-[#1A1A2E] shadow-2xl overflow-hidden flex flex-col">
                    {/* Status Bar */}
                    <div className="h-12 w-full flex items-center justify-between px-6 pt-2">
                        <div className="text-[12px] font-bold text-[#1A1A2E]">9:41</div>
                        <div className="flex gap-1.5">
                            <div className="w-4 h-2.5 bg-[#1A1A2E] rounded-[2px]" />
                            <div className="w-0.5 h-2.5 bg-[#1A1A2E]/30 rounded-[1px]" />
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 py-4 flex items-center justify-between">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="font-display font-bold text-[#3730A3]">C</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 bg-gray-50 rounded-full" />
                            <div className="w-8 h-8 bg-gray-50 rounded-full" />
                        </div>
                    </div>

                    {/* Abstract Content Feed */}
                    <div className="flex-1 px-4 flex flex-col gap-4 overflow-hidden relative">
                        {/* Main Featured Card */}
                        <div className="w-full aspect-[4/5] bg-black rounded-[24px] relative overflow-hidden group">
                            {/* Real Image Placeholder */}
                            <Image
                                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800"
                                alt="Video Feed"
                                fill
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                <p className="text-white font-medium text-sm mb-1 drop-shadow-md">Varanasi Morning Vibes 🌅</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border border-white/50">
                                        <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&h=50" width={20} height={20} alt="User" />
                                    </div>
                                    <span className="text-white/80 text-xs">@adityatravels</span>
                                </div>
                            </div>

                            {/* Floating bubbles for interaction */}
                            <div className="absolute right-4 bottom-20 flex flex-col gap-3 z-10">
                                <div className="w-10 h-10 bg-white/10 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-white" />
                                </div>
                                <div className="w-10 h-10 bg-white/10 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <div className="w-10 h-10 bg-[#FF9933] rounded-full shadow-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Teaser Cards Below */}
                        <div className="flex gap-4 opacity-50">
                            <div className="w-32 h-32 bg-gray-100 rounded-[20px]" />
                            <div className="w-32 h-32 bg-gray-100 rounded-[20px]" />
                        </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 pb-4">
                        <div className="w-6 h-6 bg-[#3730A3] rounded-full" />
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        <div className="w-12 h-12 bg-black rounded-full -mt-8 border-4 border-white flex items-center justify-center shadow-lg">
                            <div className="w-4 h-4 bg-white rounded-[2px]" />
                        </div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPreview;
