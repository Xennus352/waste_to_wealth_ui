"use client";

import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-slate-400"
    //   style={{ 
    //     backgroundImage:
    //       "url('https://images.unsplash.com/photo-1606741965420-1f04d2b4c177?auto=format&fit=crop&w=1920&q=80')", // Feel free to replace with your own
    //   }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 p-8 px-12 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col items-center gap-6 text-white"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Leaf className="w-12 h-12 text-emerald-300" />
        </motion.div>

        <h1 className="text-3xl font-bold tracking-wide">Waste to Wealth</h1>
        <p className="text-sm text-emerald-100 max-w-md text-center">
          Turning trash into treasure — building a cleaner, greener future.
        </p>

        <div className="flex items-center space-x-1">
          <motion.div
            className="w-2 h-2 bg-emerald-300 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-emerald-300 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-emerald-300 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
