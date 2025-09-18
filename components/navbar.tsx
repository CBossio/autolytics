"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/autolytics-robot.png" alt="Autolytics Robot" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold" style={{ color: "#461b6a" }}>
              Autolytics
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-[#461b6a] transition-colors font-medium cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#461b6a] transition-colors font-medium cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#461b6a] transition-colors font-medium cursor-pointer"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-semibold"
              style={{ backgroundColor: "#03ccd0", color: "white" }}
            >
              Diagnóstico Gratuito
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" style={{ color: "#461b6a" }}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-[#461b6a] transition-colors font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-[#461b6a] transition-colors font-medium py-2"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-[#461b6a] transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full font-semibold mt-2"
                style={{ backgroundColor: "#03ccd0", color: "white" }}
              >
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
