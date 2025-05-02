"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Organization Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12">
              <Image src="https://placehold.co/48x48.png" alt="Logo" fill className="object-contain" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold leading-tight">BADAN EKSEKUTIF MAHASISWA</div>
              <div className="text-sm font-bold leading-tight">KELUARGA MAHASISWA</div>
              <div className="text-xs">
                UIN WALISONGO SEMARANG
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary hover:text-white transition-colors">
              Beranda
            </Link>
            <Link href="/profil" className="text-white hover:text-primary transition-colors">
              Profil
            </Link>
            <Link href="/berita" className="text-white hover:text-primary transition-colors">
              Artikel
            </Link>
            <Link href="/kajian" className="text-white hover:text-primary transition-colors">
              Kajian
            </Link>
            <Link href="/sop" className="text-white hover:text-primary transition-colors">
              SOP
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-primary hover:text-white transition-colors py-2" onClick={toggleMenu}>
              Beranda
            </Link>
            <Link href="/profil" className="text-white hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Profil
            </Link>
            <Link href="/berita" className="text-white hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Artikel
            </Link>
            <Link href="/kajian" className="text-white hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Kajian
            </Link>
            <Link href="/sop" className="text-white hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              SOP
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
