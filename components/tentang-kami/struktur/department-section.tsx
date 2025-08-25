"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Member {
  position: string
  name: string
  faculty: string
  image: string
}

interface Department {
  name: string
  description: string
  members: Member[]
}

interface DepartmentSectionProps {
  department: Department
  isEven: boolean
}

export function DepartmentSection({ department, isEven }: DepartmentSectionProps) {
  return (
    <section className={`py-16 px-4 ${isEven ? "bg-white" : "bg-gray-50 dark:bg-background"}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{department.name}</h2>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-gray-700 max-w-3xl dark:text-white">{department.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {department.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden w-full">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover rounded-md mx-4" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                 <Badge 
                    className={`${member.position.includes("Kepala") ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"} text-white font-medium mb-2`}
                  >
                    {member.position}
                  </Badge>
                  <p className="text-muted-foreground text-sm">{member.faculty}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
