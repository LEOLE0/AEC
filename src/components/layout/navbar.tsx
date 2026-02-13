"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Expertises", href: "/expertises" },
  { name: "Méthodologie", href: "/methodologie" },
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-4 inset-x-0 z-50 mx-auto w-[95%] max-w-6xl">
      <nav
        className="relative flex items-center justify-between px-4 py-1 sm:px-6 sm:py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/20 transition-all"
        aria-label="Global"
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 sm:w-11 sm:h-11">
              <Image 
                src="/LOGO.png" 
                alt="Logo AEC" 
                fill 
                sizes="(max-width: 640px) 32px, 44px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                pathname === item.href ? "text-secondary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="default" className="rounded-full bg-primary hover:bg-primary/90">
            <Link href="/etude-en-ligne">Étude en ligne</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in-20">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block px-4 py-2 text-base font-medium rounded-lg hover:bg-gray-50",
                pathname === item.href ? "text-secondary bg-green-50" : "text-gray-900"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Button asChild className="w-full rounded-full bg-primary" onClick={() => setIsOpen(false)}>
              <Link href="/etude-en-ligne">Commencer mon étude</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
