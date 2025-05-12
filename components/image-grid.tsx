"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ImageDialog from "./image-dialog"

interface ImageGridProps {
  images: {
    url: string
    alt: string
  }[]
  className?: string
}

export default function ImageGrid({ images, className = "" }: ImageGridProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openDialog = (index: number) => {
    setSelectedImageIndex(index)
    setIsDialogOpen(true)
  }

  // If no images, don't render anything
  if (!images || images.length === 0) {
    return null
  }

  // Determine how many images to show in the grid
  const visibleImages = images.slice(0, 4)
  const remainingCount = Math.max(0, images.length - 4)

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 ${className}`}>
        {visibleImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-sm border border-border"
            onClick={() => openDialog(index)}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Show "+X more" overlay on the last visible image if there are more */}
            {index === visibleImages.length - 1 && remainingCount > 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 dark:bg-background/80 text-foreground font-bold text-xl">
                +{remainingCount} Lainnya
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Image Dialog */}
      <ImageDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        images={images}
        initialIndex={selectedImageIndex}
      />
    </>
  )
}
