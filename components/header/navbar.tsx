"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import RichNavigationMenu from "./navmenu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Mendeteksi scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll)
    
    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header 
      className={`fixed w-full z-50 text-white px-4 md:px-10 transition-all duration-300 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-md py-1 shadow-lg" 
          : "bg-[#1F1F1F]/80 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}>
          {/* Logo and Organization Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className={`relative transition-all duration-300 ${
              scrolled ? "h-10 w-10" : "h-12 w-12"
            }`}>
              <Image src="/fix_logo.png" alt="Logo"  width={1000} height={1000} className="" sizes="40" />
            </div>
            <div className="hidden md:block">
              <div className={`font-bold leading-tight transition-all duration-300 ${
                scrolled ? "text-xs" : "text-sm"
              }`}>DEWAN EKSEKUTIF MAHASISWA </div>
              <div className={`font-bold leading-tight transition-all duration-300 ${
                scrolled ? "text-xs" : "text-sm"
              }`}>KABINET REVOLUSI</div>
              <div className={`transition-all duration-300 ${
                scrolled ? "text-[10px]" : "text-xs"
              }`}>UIN WALISONGO</div>
            </div>
          </Link>

        
          {/* Desktop Navigation - positioned to center with auto margins */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex justify-center">
              <RichNavigationMenu />
            </div>
          </div>

          {/* Search Button - now a separate element to maintain layout */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleSearch}
              className="text-white hover:text-primary transition-colors ml-4 cursor-pointer"
              aria-label="Search"
            >
              <Search size={scrolled ? 18 : 20} className="transition-all duration-300" />
            </button>
          </div>

          {/* Mobile Menu and Search Buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-white cursor-pointer" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 py-3 px-4"
          >
            <div className="container mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari berita atau kajian..."
                  className="w-full py-2 px-4 pr-10 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/kajian" className="text-white hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Kajian
            </Link>
            <Link href="/berita" className="text-white hover:text-primary transition-colors py-2" onClick={toggleMenu}>
              Berita
            </Link>
            <Link
              href="/tentang-kami"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Tentang Kami
            </Link>
            <Link
              href="/kegiatan"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Kegiatan
            </Link>
            <Link
              href="/advokasi"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Advokasi
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}