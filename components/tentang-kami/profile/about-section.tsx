"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-background" >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
        <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Tentang DESA LOSARI
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="dark:text-white mb-4">
              Desa Losari merupakan salah satu desa di Kecamatan Sumowono, Kabupaten Semarang, Jawa Tengah. Terletak di lereng barat Gunung Ungaran dengan ketinggian sekitar 900 mdpl, desa ini memiliki udara sejuk dengan suhu rata-rata harian 23–25°C.            </p>
            <p className=" mb-4 dark:text-white">
              Dengan luas wilayah 293,71 hektar, Desa Losari terbagi dalam 4 dusun: Dusun Bantir, Dusun Kalidukuh, Dusun Losari, dan Dusun Kaliliseng. Mayoritas penduduk bermata pencaharian sebagai petani, buruh, dan pelaku usaha kecil dengan hasil utama pertanian padi, palawija, kopi, serta peternakan ayam dan perikanan air tawar.
            </p>
            <p className="dark:text-white mb-4">
              Desa Losari berkomitmen untuk terus berkembang sebagai desa yang maju, mandiri, dan sejahtera, sekaligus menjaga tradisi, gotong royong, serta kearifan lokal masyarakatnya.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <Image
              src="/profil-page.jpg"
              alt="About Desa Losari"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
