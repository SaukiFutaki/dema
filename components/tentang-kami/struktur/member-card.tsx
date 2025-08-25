"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MemberCardProps {
  name: string
  position: string
  faculty: string
  image: string
  delay?: number
}

export function MemberCard({ name, position, faculty, image, delay = 0 }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-2">{position}</p>
        <p className="text-gray-600 text-sm">{faculty}</p>
      </div>
    </motion.div>
  )
}
