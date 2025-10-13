"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Phone, MessageCircle } from "lucide-react"

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
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/logov2.jpg"
              alt="至索科技 Extreme Exploration"
              width={240}
              height={60}
              className="h-10 w-auto"
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
            <a href="#industries" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              服务行业
            </a>
            <a href="#cases" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              成功案例
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              关于我们
            </a>
            <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                  联系我们
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex flex-col items-center justify-center p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">联系我们</h3>
                  <p className="text-gray-600 text-center">选择以下方式与我们取得联系</p>

                  <div className="w-full space-y-4">
                    <div
                      className="flex items-start gap-4 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone
                          className="w-6 h-6 text-white"
                          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white mb-1">拨打咨询电话</p>
                        <p className="text-lg font-bold text-white" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                          400-103-7431
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start gap-4 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                      style={{
                        background: "linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)",
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MessageCircle
                          className="w-6 h-6 text-white"
                          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white mb-1">在线咨询</p>
                        <p className="text-sm text-white">点击右侧浮窗联系客服</p>
                      </div>
                    </div>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a
                href="#services"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                服务项目
              </a>
              <a
                href="#advantages"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                核心优势
              </a>
              <a
                href="#process"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                服务流程
              </a>
              <a
                href="#industries"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                服务行业
              </a>
              <a
                href="#cases"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                成功案例
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                关于我们
              </a>
              <div className="px-3 py-2">
                <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      联系我们
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <div className="flex flex-col items-center justify-center p-8 space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">联系我们</h3>
                      <p className="text-gray-600 text-center">选择以下方式与我们取得联系</p>

                      <div className="w-full space-y-4">
                        <div
                          className="flex items-start gap-4 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                          style={{
                            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Phone
                              className="w-6 h-6 text-white"
                              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-white mb-1">拨打咨询电话</p>
                            <p
                              className="text-lg font-bold text-white"
                              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                            >
                              400-103-7431
                            </p>
                          </div>
                        </div>

                        <div
                          className="flex items-start gap-4 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                          style={{
                            background: "linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)",
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                            <MessageCircle
                              className="w-6 h-6 text-white"
                              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-white mb-1">在线咨询</p>
                            <p className="text-sm text-white">点击右侧浮窗联系客服</p>
                          </div>
                        </div>
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
