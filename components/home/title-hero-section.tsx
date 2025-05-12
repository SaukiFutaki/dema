"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {


  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        Selamat Datang di Official Website
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl"
      >
       DEWAN EKSEKUTIF MAHASISWA UIN WALISONGO SEMARANG
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
      <Button>

        <Link href="/tentang-kami/profil" className="text-white">
          Tentang Kami
        </Link>
      </Button>
      </motion.div>
    </div>
  );
}
