"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export function BeritaHeader() {
  return (
    <div className="relative h-64 md:h-80">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="News header"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Berita
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center text-sm"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span>Berita</span>
        </motion.div>
      </div>
    </div>
  )
}
