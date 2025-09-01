"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react"

interface Category {
  id: string
  name: string
  description: string
}

interface GalleryImage {
  url: string
  alt: string
}

interface GalleryItem {
  id: number
  title: string
  category: string
  date: string
  description: string
  images: GalleryImage[]
}

interface GaleriGridProps {
  galleryItems: GalleryItem[]
  categories: Category[]
}

export function GaleriGrid({ galleryItems, categories }: GaleriGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredGallery =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const nextImage = () => {
    if (!selectedGallery) return
    setCurrentImageIndex((prev) => (prev === selectedGallery.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    if (!selectedGallery) return
    setCurrentImageIndex((prev) => (prev === 0 ? selectedGallery.images.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Dokumentasi Kegiatan</h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-white max-w-3xl">
            Dokumentasi berbagai kegiatan dan acara yang diselenggarakan oleh Desa Losari.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="mb-8 flex flex-wrap h-auto p-1">
            <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
              Semua
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} onClick={() => setSelectedCategory(category.id)}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((gallery, index) => (
                <motion.div
                  key={gallery.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden">
                    <Link href={`/galeri/${gallery.id}`}>
                      <div className="relative h-48 cursor-pointer">
                        <Image
                          src={gallery.images[0].url || "/placeholder.svg"}
                          alt={gallery.images[0].alt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {gallery.images.length} foto
                        </div>
                      </div>
                    </Link>
                    <CardHeader>
                      <CardTitle>
                        <Link href={`/galeri/${gallery.id}`} className="hover:text-primary transition-colors">
                          {gallery.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {gallery.date}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{gallery.description}</p>
                      <Link
                        href={`/galeri/${gallery.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                      >
                        Lihat galeri lengkap <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Gallery Dialog */}
      {selectedGallery && (
        <Dialog open={!!selectedGallery} onOpenChange={(open) => !open && setSelectedGallery(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
            <div className="relative h-[70vh]">
              <Image
                src={selectedGallery.images[currentImageIndex].url || "/placeholder.svg"}
                alt={selectedGallery.images[currentImageIndex].alt}
                fill
                className="object-contain"
              />

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedGallery(null)
                }}
                className="absolute right-4 top-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedGallery.images.length}
              </div>
            </div>

            <DialogHeader className="p-4">
              <DialogTitle>{selectedGallery.title}</DialogTitle>
              <DialogDescription>{selectedGallery.date}</DialogDescription>
            </DialogHeader>

            <div className="p-4 pt-0">
              <p>{selectedGallery.description}</p>
            </div>

            {/* Thumbnails */}
            <div className="p-4 overflow-x-auto">
              <div className="flex space-x-2">
                {selectedGallery.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 flex-shrink-0 cursor-pointer ${
                      index === currentImageIndex ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
