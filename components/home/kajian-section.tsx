"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import CreativeBtn from '../button/creative-button'

export default function Kajiansection() {

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
  <section className="py-16 px-4 bg-white dark:bg-background  border-t border-border/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Kajian</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[1, 2].map((items) => (
              <motion.div
                key={items}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-border/10"
              >
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={`https://images.unsplash.com/photo-1746083984990-ba2a8cabc88e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D`}
                    alt={`Study ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2  dark:text-secondary">Judul Kajian {items}</h3>
                  <p className="text-foreground/70 mb-4  dark:text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/kajian/${items}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
          <CreativeBtn link='kajian' title='Lihat Semua' />
          </div>
        </div>
      </section>
  )
}
