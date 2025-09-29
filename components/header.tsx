"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showQRCode, setShowQRCode] = useState(false)

  const handleNavClick = () => {
    setIsMenuOpen(false) // 关闭移动端菜单
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logov2.jpg"
              alt="至索科技 Extreme Exploration"
              width={200}
              height={50}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              服务项目
            </a>
            <a href="#advantages" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              核心优势
            </a>
            <a href="#process" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              服务流程
            </a>
            <a href="#industries" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              服务行业
            </a>
            <a href="#cases" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              成功案例
            </a>
            <a href="#about" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              关于我们
            </a>
            <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-xs px-3 py-1 h-8">
                  联系我们
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex flex-col items-center justify-center p-6">
                  <img
                    src="/customer-service-qr.png"
                    alt="Customer Service QR Code"
                    className="w-full max-w-sm h-auto"
                  />
                  <div className="mt-4 text-center space-y-2">
                    <p className="text-sm font-medium text-foreground">请用微信扫描二维码咨询客服</p>
                    <p className="text-xs text-muted-foreground">或者拨打咨询电话：4001037431</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-1 pb-2 space-y-1 sm:px-3 border-t">
              <a
                href="#services"
                onClick={handleNavClick}
                className="block px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary"
              >
                服务项目
              </a>
              <a
                href="#advantages"
                onClick={handleNavClick}
                className="block px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary"
              >
                核心优势
              </a>
              <a
                href="#process"
                onClick={handleNavClick}
                className="block px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary"
              >
                服务流程
              </a>
              <a
                href="#industries"
                onClick={handleNavClick}
                className="block px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary"
              >
                服务行业
              </a>
              <a
                href="#cases"
                onClick={handleNavClick}
                className="block px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary"
              >
                成功案例
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="block px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary"
              >
                关于我们
              </a>
              <div className="px-3 py-1.5">
                <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-sm h-8">
                      联系我们
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <div className="flex flex-col items-center justify-center p-6">
                      <img
                        src="/customer-service-qr.png"
                        alt="Customer Service QR Code"
                        className="w-full max-w-sm h-auto"
                      />
                      <div className="mt-4 text-center space-y-2">
                        <p className="text-sm font-medium text-foreground">请用微信扫描二维码咨询客服</p>
                        <p className="text-xs text-muted-foreground">或者拨打咨询电话：4001037431</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
