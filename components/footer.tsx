import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ThemeSwitcher } from "./switch-theme";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="https://placehold.co/48x48.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">
                  BADAN EKSEKUTIF MAHASISWA
                </div>
                <div className="text-sm font-bold leading-tight">
                  KELUARGA MAHASISWA
                </div>
                <div className="text-xs text-gray-400">
                  UIN WALISONGO SEMARANG
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Organisasi mahasiswa yang berkomitmen untuk menjadi wadah aspirasi
              dan pengembangan potensi mahasiswa dalam berbagai bidang.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
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
            
            <div className="mt-6">
            
              <ThemeSwitcher />
            </div>
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
                  href="/kajian"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Kajian
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
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Kontak
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
                  Jl. Raya Semarang No. 1, Semarang, Jawa Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">+62 274 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-400">info@bemuinws.ac.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BEM UIN Walisongo Semarang. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
