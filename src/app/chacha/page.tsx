"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ChachaWaitlist() {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-sans text-white"
            style={{ backgroundColor: "#0a0a16" }}
        >
            {/* Background Gradients/Blobs */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                {/* Magenta/Violet Blob */}
                <motion.div
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -40, 20, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] opacity-40"
                />

                {/* Cyan Blob */}
                <motion.div
                    animate={{
                        x: [0, -40, 20, 0],
                        y: [0, 30, -30, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-[10%] right-[-10%] w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"
                />

                {/* Saffron/Orange Blob */}
                <motion.div
                    animate={{
                        x: [0, 20, -20, 0],
                        y: [0, 20, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute top-[30%] left-[20%] w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] bg-orange-500 rounded-full mix-blend-screen filter blur-[90px] opacity-20"
                />
            </div>

            {/* Main Content Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[380px] px-6"
            >
                {/* Glass Card */}
                <div className="w-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-[32px] p-8 flex flex-col items-center text-center overflow-hidden">

                    {/* Logo Container */}
                    <div className="relative w-24 h-24 mb-6 drop-shadow-lg flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                        <Image
                            src="/logo.png"
                            alt="Chacha Logo"
                            fill
                            className="object-contain relative z-10"
                            priority
                        />
                    </div>

                    {/* Brand Name */}
                    <h1 className="text-4xl font-bold text-white mb-8 tracking-tight drop-shadow-md">
                        Chacha
                    </h1>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-purple-500/25 transition-all cursor-pointer border border-white/10"
                    >
                        Get Early Access
                    </motion.button>

                    {/* Micro-copy */}
                    <p className="mt-4 text-xs text-white/50 font-medium">
                        Takes less than 10 seconds
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
