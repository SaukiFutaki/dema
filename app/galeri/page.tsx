import { GaleriHeader } from "@/components/galeri/galeri-header"
import { GaleriCategories } from "@/components/galeri/galeri-categories"
import { GaleriGrid } from "@/components/galeri/galeri-grid"

export default function GaleriPage() {
  // Gallery categories

  //   "Semua",
  // "Pembangunan Desa",
  // "Kegiatan Sosial",
  // "Acara Budaya",
  // "Pertanian dan Perkebunan",
 const categories = [
 
  {
    id: "pembangunan-desa",
    name: "Pembangunan Desa",
    description: "Dokumentasi pembangunan fasilitas dan infrastruktur Desa Losari",
  },
  {
    id: "kegiatan-sosial",
    name: "Kegiatan Sosial",
    description: "Dokumentasi kegiatan sosial dan gotong royong warga Desa Losari",
  },
  {
    id: "acara-budaya",
    name: "Acara Budaya",
    description: "Dokumentasi acara adat dan budaya yang diselenggarakan di Desa Losari",
  },
  {
    id: "pertanian-perkebunan",
    name: "Pertanian & Perkebunan",
    description: "Dokumentasi aktivitas pertanian dan perkebunan di Desa Losari",
  },
];

  // Gallery data
 const galleryItems = [
  {
    id: 1,
    title: "Pembangunan Pos Kamling",
    category: "pembangunan-desa",
    date: "15 Mei 2023",
    description: "Dokumentasi gotong royong warga dalam membangun pos keamanan lingkungan di RT 03.",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Pembangunan+Pos+Kamling+1",
        alt: "Pembangunan Pos Kamling - 1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Pembangunan+Pos+Kamling+2",
        alt: "Pembangunan Pos Kamling - 2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Pembangunan+Pos+Kamling+3",
        alt: "Pembangunan Pos Kamling - 3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Pembangunan+Pos+Kamling+4",
        alt: "Pembangunan Pos Kamling - 4",
      },
    ],
  },
  {
    id: 2,
    title: "Kerja Bakti Bersihkan Saluran Air",
    category: "kegiatan-sosial",
    date: "20 April 2023",
    description: "Warga Desa Losari mengadakan kerja bakti rutin untuk membersihkan saluran air menjelang musim hujan.",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Kerja+Bakti+1",
        alt: "Kerja Bakti Bersihkan Saluran Air - 1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Kerja+Bakti+2",
        alt: "Kerja Bakti Bersihkan Saluran Air - 2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Kerja+Bakti+3",
        alt: "Kerja Bakti Bersihkan Saluran Air - 3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Kerja+Bakti+4",
        alt: "Kerja Bakti Bersihkan Saluran Air - 4",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Kerja+Bakti+5",
        alt: "Kerja Bakti Bersihkan Saluran Air - 5",
      },
    ],
  },
  {
    id: 3,
    title: "Sedekah Bumi Desa Losari",
    category: "acara-budaya",
    date: "10 Maret 2023",
    description: "Rangkaian acara adat Sedekah Bumi sebagai wujud syukur atas hasil panen melimpah.",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Sedekah+Bumi+1",
        alt: "Sedekah Bumi Desa Losari - 1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Sedekah+Bumi+2",
        alt: "Sedekah Bumi Desa Losari - 2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Sedekah+Bumi+3",
        alt: "Sedekah Bumi Desa Losari - 3",
      },
    ],
  },
  {
    id: 4,
    title: "Panen Padi Musim Tanam Kedua",
    category: "pertanian-perkebunan",
    date: "5 Februari 2023",
    description: "Kegiatan panen raya padi yang diikuti oleh para petani dan warga Desa Losari.",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Panen+Padi+1",
        alt: "Panen Padi Musim Tanam Kedua - 1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Panen+Padi+2",
        alt: "Panen Padi Musim Tanam Kedua - 2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Panen+Padi+3",
        alt: "Panen Padi Musim Tanam Kedua - 3",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Panen+Padi+4",
        alt: "Panen Padi Musim Tanam Kedua - 4",
      },
    ],
  },
  {
    id: 5,
    title: "Perbaikan Jalan Desa",
    category: "pembangunan-desa",
    date: "22 Januari 2023",
    description: "Kegiatan swadaya masyarakat untuk memperbaiki akses jalan utama di Desa Losari.",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800&text=Perbaikan+Jalan+1",
        alt: "Perbaikan Jalan Desa - 1",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Perbaikan+Jalan+2",
        alt: "Perbaikan Jalan Desa - 2",
      },
      {
        url: "/placeholder.svg?height=600&width=800&text=Perbaikan+Jalan+3",
        alt: "Perbaikan Jalan Desa - 3",
      },
    ],
  },
];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <GaleriHeader />

      {/* Gallery Categories */}
      <GaleriCategories categories={categories} />

      {/* Gallery Grid */}
      <GaleriGrid galleryItems={galleryItems} categories={categories} />
    </div>
  )
}
