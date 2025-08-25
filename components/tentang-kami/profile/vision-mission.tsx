"use client"

import { motion } from "framer-motion"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

export function VisionMission() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Visi & Misi</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-center text-3xl">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  &#34;Terwujudnya DEMA UIN Walisongo Semarang sebagai organisasi mahasiswa yang progresif, responsif, dan
                  berlandaskan nilai-nilai keislaman dalam mewujudkan kampus yang inklusif dan berdampak.&#34;
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-center text-3xl">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Meningkatkan kualitas kaderisasi dan kepemimpinan mahasiswa berbasis nilai-nilai keislaman dan keindonesiaan.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Menjadi saluran aspirasi mahasiswa dan memperkuat advokasi terhadap isu-isu kampus dan sosial.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mendorong kolaborasi lintas fakultas dan organisasi untuk menciptakan gerakan mahasiswa yang solutif dan kolaboratif.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mewujudkan program kerja yang inklusif, edukatif, dan berdampak nyata bagi sivitas akademika dan masyarakat.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}