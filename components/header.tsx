"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="至索科技 Extreme Exploration"
              width={300}
              height={80}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              服务项目
            </a>
            <a href="#advantages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              核心优势
            </a>
            <a href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              服务流程
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              关于我们
            </a>
            <Button className="bg-primary hover:bg-primary/90">联系我们</Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#services" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                服务项目
              </a>
              <a
                href="#advantages"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                核心优势
              </a>
              <a href="#process" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                服务流程
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
                关于我们
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90">联系我们</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
