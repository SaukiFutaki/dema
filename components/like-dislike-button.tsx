"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { motion } from "framer-motion"

interface LikeDislikeButtonsProps {
  initialLikes?: number
  initialDislikes?: number
}

export default function LikeDislikeButtons({ initialLikes = 0, initialDislikes = 0 }: LikeDislikeButtonsProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [userAction, setUserAction] = useState<"like" | "dislike" | null>(null)

  const handleLike = () => {
    if (userAction === "like") {
      // User is unliking
      setLikes(likes - 1)
      setUserAction(null)
    } else {
      // User is liking
      setLikes(likes + 1)
      if (userAction === "dislike") {
        // If previously disliked, remove the dislike
        setDislikes(dislikes - 1)
      }
      setUserAction("like")
    }
  }

  const handleDislike = () => {
    if (userAction === "dislike") {
      // User is un-disliking
      setDislikes(dislikes - 1)
      setUserAction(null)
    } else {
      // User is disliking
      setDislikes(dislikes + 1)
      if (userAction === "like") {
        // If previously liked, remove the like
        setLikes(likes - 1)
      }
      setUserAction("dislike")
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
          userAction === "like"
            ? "bg-primary/10 text-primary"
            : "bg-background hover:bg-background/80 text-foreground/70"
        }`}
        aria-label="Like"
      >
        <motion.div whileTap={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <ThumbsUp size={18} />
        </motion.div>
        <span>{likes}</span>
      </button>

      <button
        onClick={handleDislike}
        className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
          userAction === "dislike"
            ? "bg-destructive/10 text-destructive"
            : "bg-background hover:bg-background/80 text-foreground/70"
        }`}
        aria-label="Dislike"
      >
        <motion.div whileTap={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <ThumbsDown size={18} />
        </motion.div>
        <span>{dislikes}</span>
      </button>
    </div>
  )
}
