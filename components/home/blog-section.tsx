"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CreativeBtn from "../button/creative-button";
import { newsItems } from "@/lib/data";

export default function BlogSection() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="py-16 px-4 bg-white dark:bg-background  border-t border-border/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Berita Terbaru</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {newsItems.slice(-3).map((itemi) => (
            <motion.div
              key={itemi.id}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-border/10"
            >
              <div className="relative h-48">
                <Image
                  src={itemi.image}
                  alt={`News ${itemi.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-foreground/60 mb-2 dark:text-secondary">{itemi.date}</p>
                <h3 className="text-xl font-bold mb-2 dark:text-secondary">
                    {itemi.title}
                </h3>
               
                <Link
                  href={`${itemi.url}`}
                  target="_blank"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
       <CreativeBtn link="berita" title="Lihat Semua"/>
        </div>
      </div>
    </section>
  );
}
