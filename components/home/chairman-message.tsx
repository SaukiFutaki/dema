"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { roboto } from "../fonts";
export default function ChairmanMessage() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-background ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Sambutan Kepala Desa
          </h2>
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
              src="/kades.png"
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
            <h3 className="text-2xl font-bold mb-4 dark:text-white">
             SYARIFUDIN
            </h3>
            <p className="text-foreground/80 mb-4 dark:text-white">
              Assalamualaikum Wr. Wb. dan Salam Sejahtera,
            </p>
            <p
              className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}
            >
              Puji syukur kita panjatkan ke hadirat Allah SWT, karena berkat
              rahmat dan karunia-Nya, website resmi Desa Lorasri, Kecamatan
              Sumowono dapat hadir sebagai sarana informasi dan komunikasi bagi
              seluruh masyarakat.
            </p>
            <p
              className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}
            >
              Website ini kami bangun sebagai upaya meningkatkan transparansi
              dan pelayanan publik, sekaligus sebagai media untuk memperkenalkan
              potensi Desa Lorasri kepada masyarakat luas. Melalui laman ini,
              warga dapat mengakses informasi terkait pemerintahan desa, program
              pembangunan, kegiatan kemasyarakatan, serta berbagai potensi desa
              baik di bidang pertanian, pariwisata, seni budaya, maupun ekonomi
              kreatif.
            </p>
            <p
              className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}
            >
              Kami berharap, keberadaan website ini dapat menjadi jembatan
              komunikasi antara pemerintah desa dan masyarakat, sekaligus
              sebagai ruang partisipasi untuk bersama-sama membangun Desa
              Lorasri yang lebih maju, mandiri, dan sejahtera.
            </p>
            <p
              className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}
            >
              Akhir kata, saya mengajak seluruh warga Desa Lorasri untuk terus
              menjaga persatuan, gotong royong, dan semangat kebersamaan dalam
              setiap langkah pembangunan. Mari kita wujudkan Desa Lorasri
              sebagai desa yang unggul, berdaya saing, dan berkarakter.
            </p>
            <p
              className={`text-foreground/80 mb-4 dark:text-white ${roboto.className}`}
            >
              Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
