import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function KajianPage() {
  // Sample studies data
  const studyItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Judul Kajian ${i + 1}`,
    date: `${5 + i} Mei 2023`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: `https://placehold.co/300x300.png?text=Kajian ${i + 1}`,
  }))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="relative h-64 md:h-80">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x400.png"
            alt="Studies header"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kajian</h1>
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Kajian</span>
          </div>
        </div>
      </div>

      {/* Studies List */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8">
            {studyItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <Link
                    href={`/kajian/${item.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Baca selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex">
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-l-md"
              >
                Prev
              </Link>
              <Link href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-primary text-white">
                1
              </Link>
              <Link
                href="#"
                className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              >
                2
              </Link>
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-r-md"
              >
                Next
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
