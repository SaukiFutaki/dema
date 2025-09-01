"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
                  &#34;Terwujudnya Desa Losari sebagai desa yang tentram, damai,
                  sehat, aman, dan sejahtera melalui sektor
                  agrobisnis dan pertanian.&#34;
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
                    Meningkatkan kualitas sumber daya manusia yang beriman,
                    sehat, cerdas, dan berdaya saing.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mengembangkan produk unggulan berbasis potensi lokal,
                    terutama di bidang pertanian.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Menciptakan pemerintahan desa yang bersih, transparan,
                    profesional, dan akuntabel.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Membangun infrastruktur merata untuk mendukung pelayanan
                    dasar dan pembangunan ekonomi.
                  </li>

                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mendorong partisipasi masyarakat dalam pembangunan dengan
                    menjunjung kesetaraan dan perlindungan anak.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mengelola sumber daya alam secara berkelanjutan dengan
                    menjaga kelestarian lingkungan.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Meningkatkan kesadaran hukum, kesehatan, dan keamanan
                    melalui kegiatan sosial dan edukatif.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
