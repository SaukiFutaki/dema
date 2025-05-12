"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { roboto } from "../fonts";
export default function ChairmanMessage() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-background ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Sambutan Ketua</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <Image
              src="https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNpZGVudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Chairman"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Nama Ketua</h3>
            <p className="text-foreground/80 mb-4 dark:text-white">
              Assalamualaikum Wr. Wb. dan Salam Sejahtera,
            </p>
            <p className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}>
              Dengan penuh rasa syukur dan kerendahan hati, saya menyambut Anda
              di website resmi Badan Eksekutif Mahasiswa Keluarga Mahasiswa.
              Organisasi ini didirikan dengan visi untuk menjadi wadah aspirasi
              dan pengembangan potensi mahasiswa dalam berbagai bidang.
            </p>
            <p className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}>
              Kami berkomitmen untuk terus berinovasi dan memberikan kontribusi
              positif bagi kemajuan kampus dan masyarakat. Melalui berbagai
              program kerja dan kegiatan, kami berupaya mengembangkan jiwa
              kepemimpinan, kreativitas, dan kepedulian sosial di kalangan
              mahasiswa.
            </p>
            <p className={`text-foreground/80 dark:text-white ${roboto.className}`}>
              Mari bersama-sama membangun masa depan yang lebih baik melalui
              kolaborasi dan semangat kebersamaan.
            </p>
            <div className="mt-6">
              <Link
                href="/profil/ketua"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium dark:text-primary"
              >
                Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
