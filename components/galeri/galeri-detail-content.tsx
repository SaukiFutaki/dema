"use client"

import { Calendar, MapPin, Camera, Images } from "lucide-react"
import ImageGrid from "@/components/image-grid"

interface Gallery {
  id: string
  title: string
  date: string
  description: string
  location: string
  photographer: string
  images: { url: string; alt: string; caption: string }[]
}

export function GaleriDetailContent({ gallery }: { gallery: Gallery }) {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-border/10">
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-foreground/70">{gallery.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-foreground/70">{gallery.location}</span>
            </div>
            <div className="flex items-center">
              <Camera className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-foreground/70">{gallery.photographer}</span>
            </div>
            <div className="flex items-center">
              <Images className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm text-foreground/70">{gallery.images.length} foto</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p>{gallery.description}</p>
        </div>

        {/* Gallery Images */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Dokumentasi Foto</h3>
          <ImageGrid images={gallery.images} />
        </div>

        {/* Image Captions */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6">Keterangan Foto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gallery.images.map((image, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full min-w-[24px] text-center">
                  {index + 1}
                </span>
                <p className="text-sm text-foreground/80">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
