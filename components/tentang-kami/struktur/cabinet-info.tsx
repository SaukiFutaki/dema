"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


interface CabinetInfoProps {
  cabinetData: {
    name: string
    period: string
    motto: string
    description: string
  }
  executiveBoard: {
    position: string
    name: string
    faculty: string
    image: string
    quote: string
  }[]
}

export function CabinetInfo({ cabinetData, executiveBoard }: CabinetInfoProps) {
  return (
    <section className="py-16 px-4 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">{cabinetData.name}</h2>
          <p className="text-xl text-primary mb-4 dark:text-primary-foreground">Periode {cabinetData.period}</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg italic mb-6">&#34;{cabinetData.motto}&rdquo;</p>
          <p className="dark:text-pr max-w-3xl mx-auto">{cabinetData.description}</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {executiveBoard.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            
            >
             <Card className="overflow-hidden w-96">
                <div className="relative h-96 mx-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover rounded-md" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
          
                  <Badge className="">{member.position}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.faculty}</p>
                  <div className="w-16 h-1 bg-primary my-4"></div>
                  <p className="italic">&#34;{member.quote}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
