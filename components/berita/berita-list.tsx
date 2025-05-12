"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
}

interface BeritaListProps {
  newsItems: NewsItem[]
}

export function BeritaList({ newsItems }: BeritaListProps) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {newsItems.map((items, index) => (
        <motion.div
          key={items.id}
          variants={item}
          custom={index}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-border/10"
        >
          <div className="relative h-48">
            <Image src={items.image || "/placeholder.svg"} alt={items.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <p className="text-sm text-foreground/60 mb-2">{items.date}</p>
            <h3 className="text-xl font-bold mb-2">{items.title}</h3>
            <p className="text-foreground/70 mb-4">{items.excerpt}</p>
            <Link
              href={`/berita/${items.id}`}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
