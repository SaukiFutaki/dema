"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl font-bold mb-4 uppercase ${montserrat.className}`}
      >
        Pemerintah Kabupaten Semarang
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-4xl md:text-6xl font-extrabold mb-8 max-w-4xl uppercase ${montserrat.className  }`}
      >
       Desa losari
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button className="bg-[#f5a425] hover:bg-[#f5a425]/90 text-white">
          <Link href="/tentang-kami/profil" className="text-white">
            Tentang Kami
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
