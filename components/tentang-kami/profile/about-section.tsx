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
              Tentang DEMA UIN Walisongo
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="dark:text-white mb-4">
              Dewan Eksekutif Mahasiswa Universitas Islam Negeri (UIN) Walisongo Semarang merupakan lembaga eksekutif mahasiswa tingkat universitas yang berperan penting dalam mewadahi aspirasi serta memfasilitasi pengembangan potensi mahasiswa.
            </p>
            <p className=" mb-4 dark:text-white">
              DEMA UIN Walisongo memiliki visi untuk membentuk mahasiswa yang aktif, kritis, dan berintegritas dalam menjawab tantangan zaman melalui kegiatan yang bersifat akademis, sosial, dan keagamaan.
            </p>
            <p className="dark:text-white mb-4">
              Dalam menjalankan fungsinya, DEMA berkomitmen menjaga nilai-nilai keislaman, kebangsaan, dan kemahasiswaan demi terciptanya kehidupan kampus yang dinamis, inklusif, serta berdampak positif bagi masyarakat luas.
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
              src="https://images.unsplash.com/photo-1746698100169-a8e3fc9cd123?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
              alt="About DEMA UIN Walisongo"
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
