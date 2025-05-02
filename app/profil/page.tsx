import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ProfilPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="relative h-64 md:h-80">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Profile header"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Kami</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Profil</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Tentang BEM KM uin ws</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-700 mb-4">
                Badan Eksekutif Mahasiswa Keluarga Mahasiswa Universitas islam negeri Walisongo merupakan organisasi
                mahasiswa tertinggi di tingkat universitas yang berperan sebagai eksekutif dalam keluarga mahasiswa uin ws.
              </p>
              <p className="text-gray-700 mb-4">
                BEM KM uin ws didirikan dengan tujuan untuk menjadi wadah aspirasi dan pengembangan potensi mahasiswa dalam
                berbagai bidang, serta menjadi jembatan komunikasi antara mahasiswa dengan pihak universitas dan
                masyarakat luas.
              </p>
              <p className="text-gray-700 mb-4">
                Dalam menjalankan tugasnya, BEM KM uin ws berpedoman pada nilai-nilai integritas, profesionalisme, inovasi,
                dan kepedulian sosial. Kami berkomitmen untuk terus memberikan kontribusi positif bagi kemajuan kampus
                dan masyarakat.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="About BEM KM uin ws"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Visi & Misi</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Visi</h3>
              <p className="text-gray-700 text-center">
                &ldquo;Menjadi organisasi mahasiswa yang unggul, inovatif, dan berkontribusi nyata dalam pengembangan potensi
                mahasiswa serta pembangunan masyarakat Indonesia yang berkeadilan.&rdquo;
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Misi</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Mengembangkan potensi dan kreativitas mahasiswa melalui berbagai program kerja yang inovatif.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Menjadi wadah aspirasi mahasiswa dan menjembatani komunikasi dengan pihak universitas.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Menjalin kerjasama dengan berbagai pihak untuk meningkatkan kualitas program kerja.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Berkontribusi dalam pembangunan masyarakat melalui program pengabdian dan advokasi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Struktur Organisasi</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              BEM KM uin ws terdiri dari berbagai departemen yang bekerja sama untuk mencapai visi dan misi organisasi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Ketua & Wakil Ketua",
              "Sekretaris Jenderal",
              "Bendahara Umum",
              "Departemen Komunikasi & Informasi",
              "Departemen Pengembangan Sumber Daya Mahasiswa",
              "Departemen Sosial Politik",
            ].map((dept, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-center">{dept}</h3>
                <p className="text-gray-700 text-center">
                  Bertanggung jawab dalam {index < 3 ? "pengelolaan organisasi" : "pelaksanaan program kerja"} sesuai
                  dengan bidangnya.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/profil/struktur"
              className="bg-white text-primary border border-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
            >
              Lihat Struktur Lengkap
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
