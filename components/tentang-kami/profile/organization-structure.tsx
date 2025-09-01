"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dataStruktur } from "@/lib/data";

export function OrganizationStructure() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-2"
          >
            Struktur Organisasi
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="text-muted-foreground max-w-3xl mx-auto"
          >
            BEM KM UGM terdiri dari berbagai departemen yang bekerja sama untuk
            mencapai visi dan misi organisasi.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {dataStruktur.map((dept, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>{dept.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/tentang-kami/struktur"
            className="bg-primary text-white border border-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
          >
            Lihat Struktur Lengkap
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
