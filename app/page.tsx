import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1080.png"
            alt="Students of the organization"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Selamat Datang di Official Website</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl">
            BADAN EKSEKUTIF MAHASISWA KELUARGA MAHASISWA
          </h2>
          <Link
            href="/profil"
            className="bg-gradient-to-r from-primary to-primary-foreground hover:from-primary/80 hover:to-primary-foreground/80 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg"
          >
            Profil Kami
          </Link>
        </div>
      </div>

      {/* Chairman's Message */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Sambutan Ketua</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="https://placehold.co/300x400.png"
                alt="Chairman"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Nama Ketua</h3>
              <p className="text-gray-700 mb-4">Assalamualaikum Wr. Wb. dan Salam Sejahtera,</p>
              <p className="text-gray-700 mb-4">
                Dengan penuh rasa syukur dan kerendahan hati, saya menyambut Anda di website resmi Badan Eksekutif
                Mahasiswa Keluarga Mahasiswa. Organisasi ini didirikan dengan visi untuk menjadi wadah aspirasi dan
                pengembangan potensi mahasiswa dalam berbagai bidang.
              </p>
              <p className="text-gray-700 mb-4">
                Kami berkomitmen untuk terus berinovasi dan memberikan kontribusi positif bagi kemajuan kampus dan
                masyarakat. Melalui berbagai program kerja dan kegiatan, kami berupaya mengembangkan jiwa kepemimpinan,
                kreativitas, dan kepedulian sosial di kalangan mahasiswa.
              </p>
              <p className="text-gray-700">
                Mari bersama-sama membangun masa depan yang lebih baik melalui kolaborasi dan semangat kebersamaan.
              </p>
              <div className="mt-6">
                <Link
                  href="/profil/ketua"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News/Blog Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Berita Terbaru</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://placehold.co/300x200.png?text=News+${item}`}
                    alt={`News ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">12 Mei 2023</p>
                  <h3 className="text-xl font-bold mb-2">Judul Berita {item}</h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/berita/${item}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/berita"
              className="bg-white text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* Studies/Research Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Kajian</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="md:w-2/5 relative h-48 md:h-auto">
                  <Image
                    src={`https://placehold.co/300x200.png?text=Study+${item}`}
                    alt={`Study ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-2">Judul Kajian {item}</h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/kajian/${item}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/kajian"
              className="bg-white text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
            >
              Lihat Semua Kajian
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
