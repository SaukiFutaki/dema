import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-black border-t border-slate-800 px-4 md:px-10 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">
                  WEBSITE RESMI
                </div>
                <div className="text-sm font-bold leading-tight">
                  DESA LOSARI, KECAMATAN SUMOWONO
                </div>
                <div className="text-xs text-gray-400">KABUPATEN SEMARANG</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Organisasi mahasiswa yang berkomitmen untuk menjadi wadah aspirasi
              dan pengembangan potensi mahasiswa dalam berbagai bidang.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100073587124127&locale=id_ID"
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>

            {/* <div className="mt-6">
              <ThemeSwitcher />
            </div> */}
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/profil"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/profil/struktur"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Berita Terbaru
                </Link>
              </li>
           
              <li>
                <Link
                  href="/galeri"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Galeri
                </Link>
              </li>
          
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Kec. Sumowono, Kabupaten Semarang, Jawa Tengah 50611
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a
                  href="https://wa.me/6285236564119?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20mengenai%20sesuatu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +6285236564119
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">
                  kantordesalosari@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DESA LOSARI, KECAMATAN SUMOWONO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
