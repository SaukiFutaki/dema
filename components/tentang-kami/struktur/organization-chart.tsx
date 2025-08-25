"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface Member {
  position: string
  name: string
  faculty: string
  image: string
  quote?: string
}

interface OrganizationChartProps {
  executiveBoard: Member[]
  coreTeam: Member[]
}

export function OrganizationChart({ executiveBoard, coreTeam }: OrganizationChartProps) {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Bagan Organisasi</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="dark:text-white  max-w-3xl mx-auto">
            Struktur kepengurusan BEM KM UGM yang bekerja sama untuk mewujudkan visi dan misi organisasi.
          </p>
        </motion.div>

        {/* Organization Chart */}
        <div className="relative mt-16 mb-24">
          {/* Executive Board */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-2 gap-8 w-full max-w-3xl">
              {executiveBoard.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-primary">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-center">{member.name}</h3>
                  <p className="text-primary text-center">{member.position}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connecting Line */}
          <div className="absolute left-1/2 top-32 w-0.5 h-16 bg-gray-300 -translate-x-1/2"></div>

          {/* Core Team */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
              {coreTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4">
                    <div className="flex justify-center mb-3">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-secondary">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <CardContent className="p-0">
                      <h3 className="text-base font-bold">{member.name}</h3>
                      <p className="text-secondary text-sm">{member.position}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connecting Line */}
          <div className="absolute left-1/2 top-[13rem] w-0.5 h-16 bg-gray-300 -translate-x-1/2"></div>

          {/* Departments */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
              {Array.from({ length: 6 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <h4 className="font-semibold">Departemen {i + 1}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="hidden md:block absolute left-1/2 top-[22rem] w-4/5 h-0.5 bg-gray-300 -translate-x-1/2"></div>
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="hidden md:block absolute top-[22rem] w-0.5 h-8 bg-gray-300"
              style={{ left: `${25 + i * 25}%` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
