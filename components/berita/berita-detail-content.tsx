"use client"

import { Calendar, User, Tag } from "lucide-react"
import LikeDislikeButtons from "@/components/like-dislike-button"
import ImageGrid from "@/components/image-grid"
import { motion } from "framer-motion"

interface Article {
  id: string
  title: string
  date: string
  author: string
  category: string
  content: string
  images: { url: string; alt: string }[]
  likes: number
  dislikes: number
}

export function BeritaDetailContent({ article }: { article: Article }) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section 
      initial="hidden" 
      animate="visible"
      variants={containerVariants}
      className="py-12 px-4 bg-white dark:text-secondary"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-border/10"
        >
          <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Calendar className="h-4 w-4 mr-2 text-primary dark:text-secondary" />
              <span className="text-sm text-foreground/70 dark:text-secondary">{article.date}</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <User className="h-4 w-4 mr-2 text-primary dark:text-secondary" />
              <span className="text-sm text-foreground/70 dark:text-secondary">{article.author}</span>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Tag className="h-4 w-4 mr-2 text-primary dark:text-secondary" />
              <span className="text-sm text-foreground/70 dark:text-secondary">{article.category}</span>
            </motion.div>
          </div>
          <motion.div variants={itemVariants}>
            <LikeDislikeButtons initialLikes={article.likes} initialDislikes={article.dislikes} />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></motion.div>

        {/* Documentation Images */}
        {article.images && article.images.length > 0 && (
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-bold mb-4"
            >
              Dokumentasi
            </motion.h3>
            <motion.div
              variants={itemVariants}
              whileInView={{ 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.1 
                } 
              }}
            >
              <ImageGrid images={article.images} />
            </motion.div>
          </motion.div>
        )}

        {/* Tags */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-border/10"
        >
          <div className="flex flex-wrap gap-2">
            {["BEM", "Mahasiswa", "Kegiatan", "Kampus"].map((tag) => (
              <motion.span 
                key={tag}
                
                variants={itemVariants}
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                transition={{ duration: 0.2 }}
                className="px-3 py-1 bg-background text-foreground/80 text-sm rounded-full cursor-pointer"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}