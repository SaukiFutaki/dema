"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface RelatedGallery {
  id: number
  title: string
  date: string
  imageCount: number
  thumbnail: string
}

export function GaleriRelated({ relatedGalleries }: { relatedGalleries: RelatedGallery[] }) {
  // Animation variants for related galleries
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-12 px-4 bg-background border-t border-border/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-8">Galeri Terkait</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {relatedGalleries.map((gallery) => (
            <motion.div key={gallery.id} variants={item} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <Link href={`/galeri/${gallery.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border/10">
                  <div className="relative h-48">
                    <Image
                      src={gallery.thumbnail || "/placeholder.svg"}
                      alt={gallery.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {gallery.imageCount} foto
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-[#f59e0b] mb-1">{gallery.date}</p>
                    <h3 className="text-lg font-bold mb-2 text-black">{gallery.title}</h3>
                    <div className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm">
                      Lihat galeri <ChevronRight className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
