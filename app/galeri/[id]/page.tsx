/* eslint-disable @typescript-eslint/no-unused-vars */
import { GaleriDetailHeader } from "@/components/galeri/galeri-detail-header"
import { GaleriDetailContent } from "@/components/galeri/galeri-detail-content"
import { GaleriRelated } from "@/components/galeri/galeri-related"

// This function would typically fetch data from an API
async function getGalleryData(id: string) {
  // Mock data for example purposes
   const galleryData = {
    "1": {
      id: "1",
      title: "Pembangunan Pos Kamling",
      date: "15 Mei 2023",
      category: "pembangunan-desa",
      description: "Dokumentasi gotong royong warga dalam membangun pos keamanan lingkungan di RT 03 Desa Losari, Sumowono.",
      location: "RT 03, Desa Losari",
      photographer: "Tim Dokumentasi Desa Losari",
      images: [
        {
          url: "/img-3158-6886f400ed641536b4370822.jpg",
          alt: "Pembangunan Pos Kamling - Gotong Royong",
          caption: "Warga bekerja sama membangun fondasi pos kamling",
        },
        {
          url: "/img-3165-688a3dceed641552693d4522.jpg",
          alt: "Pembangunan Pos Kamling - Pemasangan Atap",
          caption: "Pemasangan atap secara swadaya",
        },
        {
          url: "/whatsapp-image-2025-08-24-at-17-06-36-68aae7ecc925c42be3584e63.jpeg",
          alt: "Pembangunan Pos Kamling - Finishing",
          caption: "Pengecatan akhir pos kamling",
        },
        {
          url: "/whatsapp-image-2025-08-24-at-17-47-44-68ab2721c925c40a8e5ec632.jpeg",
          alt: "Pembangunan Pos Kamling - Selesai",
          caption: "Pos kamling yang telah selesai dibangun",
        },
      ],
    },
    "2": {
      id: "2",
      title: "Kerja Bakti Bersihkan Saluran Air",
      date: "20 April 2023",
      category: "kegiatan-sosial",
      description: "Warga Desa Losari mengadakan kerja bakti rutin untuk membersihkan saluran air menjelang musim hujan, demi mencegah banjir.",
      location: "Sepanjang jalan Desa Losari",
      photographer: "Tim Dokumentasi Desa Losari",
      images: [
        {
          url: "/pkk-1-688c10cdc925c4350f3516e2.jpeg",
          alt: "Kerja Bakti - Persiapan",
          caption: "Persiapan alat-alat kebersihan",
        },
        {
          url: "/whatsapp-image-2025-08-15-at-22-25-02-689f51aced641512ff2195f2.jpeg",
          alt: "Kerja Bakti - Membersihkan Sampah",
          caption: "Warga membersihkan sampah yang menyumbat saluran air",
        },
        {
          url: "/whatsapp-image-2025-08-24-at-22-35-19-68ab3a6934777c3c70134c03.jpeg",
          alt: "Kerja Bakti - Gotong Royong",
          caption: "Gotong royong membersihkan parit",
        },
        {
          url: "/whatsapp-image-2025-08-25-at-09-44-16-68abce4734777c3ad80f4922.jpeg",
          alt: "Kerja Bakti - Selesai",
          caption: "Saluran air yang sudah bersih",
        },
      ],
    },
    "3": {
      id: "3",
      title: "Sedekah Bumi Desa Losari",
      date: "10 Maret 2023",
      category: "acara-budaya",
      description: "Rangkaian acara adat Sedekah Bumi sebagai wujud syukur atas hasil panen melimpah, diisi dengan pertunjukan seni lokal.",
      location: "Balai Desa Losari",
      photographer: "Tim Dokumentasi Desa Losari",
      images: [
        {
          url: "/profil-page.jpg",
          alt: "Sedekah Bumi - Kirab",
          caption: "Kirab gunungan hasil bumi",
        },
        {
          url: "/Test.jpg",
          alt: "Sedekah Bumi - Pertunjukan Seni",
          caption: "Pertunjukan tari tradisional",
        },
        {
          url: "/demo.png",
          alt: "Sedekah Bumi - Doa Bersama",
          caption: "Doa bersama tokoh masyarakat",
        },
      ],
    },
    "4": {
      id: "4",
      title: "Panen Padi Musim Tanam Kedua",
      date: "5 Februari 2023",
      category: "pertanian-perkebunan",
      description: "Kegiatan panen raya padi yang diikuti oleh para petani dan warga Desa Losari, sebagai salah satu sumber mata pencaharian utama.",
      location: "Sawah Desa Losari",
      photographer: "Tim Dokumentasi Desa Losari",
      images: [
        {
          url: "/demo_2.png",
          alt: "Panen Padi - Petani",
          caption: "Petani sedang memanen padi",
        },
        {
          url: "/logo-smg.jpg",
          alt: "Panen Padi - Hasil Panen",
          caption: "Hasil panen padi yang melimpah",
        },
        {
          url: "/logo.png",
          alt: "Panen Padi - Kebersamaan",
          caption: "Kebersamaan warga saat memanen",
        },
      ],
    },
  };

   return galleryData[id as keyof typeof galleryData] || null;
}

// This function would typically fetch data from an API
async function getRelatedGalleries(id: string, category: string) {
  // Mock related galleries
  const allGalleries = [
 {
      id: 1,
      title: "Pembangunan Pos Kamling",
      date: "15 Mei 2023",
      imageCount: 4,
      thumbnail: "/placeholder.svg?height=300&width=400&text=Pembangunan+Pos+Kamling",
    },
    {
      id: 2,
      title: "Kerja Bakti Bersihkan Saluran Air",
      date: "20 April 2023",
      imageCount: 5,
      thumbnail: "/placeholder.svg?height=300&width=400&text=Kerja+Bakti",
    },
    {
      id: 3,
      title: "Sedekah Bumi Desa Losari",
      date: "10 Maret 2023",
      imageCount: 3,
      thumbnail: "/placeholder.svg?height=300&width=400&text=Sedekah+Bumi",
    },
    {
      id: 4,
      title: "Panen Padi Musim Tanam Kedua",
      date: "5 Februari 2023",
      imageCount: 4,
      thumbnail: "/placeholder.svg?height=300&width=400&text=Panen+Padi",
    },
    {
      id: 5,
      title: "Perbaikan Jalan Desa",
      date: "22 Januari 2023",
      imageCount: 3,
      thumbnail: "/placeholder.svg?height=300&width=400&text=Perbaikan+Jalan",
    },
  ];

  return allGalleries.filter((gallery) => gallery.id.toString() !== id).slice(0, 3)
}

export default async function GaleriDetailPage({ params }: { params: { id: string } }) {
  const gallery = await getGalleryData(params.id)

  if (!gallery) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Galeri tidak ditemukan</h1>
        <p className="text-muted-foreground">Galeri yang Anda cari tidak tersedia.</p>
      </div>
    )
  }

  const relatedGalleries = await getRelatedGalleries(params.id, gallery.category)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <GaleriDetailHeader gallery={gallery} />

      {/* Gallery Content */}
      <GaleriDetailContent gallery={gallery} />

      {/* Related Galleries */}
      <GaleriRelated relatedGalleries={relatedGalleries} />
    </div>
  )
}
