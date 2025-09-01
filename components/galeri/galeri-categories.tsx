"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface Category {
  id: string
  name: string
  description: string
}

interface GaleriCategoriesProps {
  categories: Category[]
}

export function GaleriCategories({ categories }: GaleriCategoriesProps) {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Kategori Galeri</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan dan acara yang diselenggarakan oleh Desa Losari.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
