"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function HeroSection() {
  const [currentStation, setCurrentStation] = useState(0)
  const [showQRCode, setShowQRCode] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const retryCountRef = useRef(0)
  const maxRetries = 5

  const stations = [
    {
      title: "企业生产效率提升",
      value: "300%",
      description: "通过定制化软件解决方案",
    },
    {
      title: "高度定制化",
      value: "100%",
      description: "企业软件数字化方案",
    },
    {
      title: "免费咨询",
      value: "24h",
      description: "专业技术团队在线支持",
    },
  ]

  useEffect(() => {
    const stationTimer = setInterval(() => {
      setCurrentStation((prev) => (prev + 1) % stations.length)
    }, 4000)
    return () => clearInterval(stationTimer)
  }, [stations.length])

  useEffect(() => {
    const attemptPlay = () => {
      if (videoRef.current && retryCountRef.current < maxRetries) {
        videoRef.current
          .play()
          .then(() => {
            console.log("[v0] Hero video playing successfully")
            retryCountRef.current = 0
          })
          .catch((error) => {
            retryCountRef.current++
            console.log(`[v0] Hero video autoplay attempt ${retryCountRef.current} failed:`, error)
            if (retryCountRef.current < maxRetries) {
              setTimeout(attemptPlay, 1000 * retryCountRef.current)
            }
          })
      }
    }

    attemptPlay()

    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        if (video.paused) {
          attemptPlay()
        }
      }
      video.addEventListener("canplay", handleCanPlay)
      return () => video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  return (
    <section className="relative">
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl" />

      <div className="bg-card rounded-3xl shadow-xl border border-border/50 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full -translate-y-48 translate-x-48" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[450px] sm:min-h-[550px]">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <div className="space-y-2">
                  <div className="text-foreground">软件定制开发与</div>
                  <div className="text-blue-600 [background:linear-gradient(to_right,rgb(59_130_246),rgb(34_197_94))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] [supports(background-clip:text)]:text-transparent">
                    AI智能体服务专家
                  </div>
                </div>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  聚焦 <span className="text-primary font-semibold">AI + 软件创新</span>，赋能业务价值升级
                </p>
                <div>
                  <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        了解我们的服务，开启数字化转型之旅
                        <span className="ml-2">→</span>
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
          </div>

          {/* 右侧视频区域 */}
          <div className="relative flex items-center justify-center h-full min-h-[350px] sm:min-h-[450px]">
            <div className="relative w-full max-w-lg h-full flex items-center justify-center">
              <div className="absolute -top-4 -left-4 w-8 h-8 text-primary/30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 text-secondary/40 animate-pulse delay-1000">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"></svg>
              </div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 text-accent/50 animate-pulse delay-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </div>

              <video
                ref={videoRef}
                src="https://blobs.vusercontent.net/blob/u1774431695_Software_customization_development_and_AI_agents__1cc54faa-3377-4380-9708-66886f1f29b7_3-GKaSFEcgNG4E1sdHTtNWg57sdpEPs1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                className="w-full h-auto rounded-lg shadow-xl"
                style={{ maxHeight: "450px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-6 mt-4 sm:mt-8">
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-1 sm:p-6 text-center">
          <div className="text-sm sm:text-3xl font-bold text-blue-600 [background:linear-gradient(to_right,rgb(59_130_246),rgb(34_197_94))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] [supports(background-clip:text)]:text-transparent mb-1 sm:mb-2">
            100%
          </div>
          <div className="text-[10px] sm:text-sm text-muted-foreground whitespace-nowrap">业务对齐</div>
        </div>
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-1 sm:p-6 text-center">
          <div className="text-sm sm:text-3xl font-bold text-blue-600 [background:linear-gradient(to_right,rgb(59_130_246),rgb(34_197_94))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] [supports(background-clip:text)]:text-transparent mb-1 sm:mb-2">
            10+
          </div>
          <div className="text-[10px] sm:text-sm text-muted-foreground whitespace-nowrap">年技术经验</div>
        </div>
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-1 sm:p-6 text-center">
          <div className="text-sm sm:text-3xl font-bold text-blue-600 [background:linear-gradient(to_right,rgb(59_130_246),rgb(34_197_94))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] [supports(background-clip:text)]:text-transparent mb-1 sm:mb-2">
            &gt;0.5%
          </div>
          <div className="text-[10px] sm:text-sm text-muted-foreground whitespace-nowrap">故障率</div>
        </div>
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-1 sm:p-6 text-center">
          <div className="text-sm sm:text-3xl font-bold text-blue-600 [background:linear-gradient(to_right,rgb(59_130_246),rgb(34_197_94))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] [supports(background-clip:text)]:text-transparent mb-1 sm:mb-2">
            &gt;2h
          </div>
          <div className="text-[10px] sm:text-sm text-muted-foreground whitespace-nowrap">故障响应</div>
        </div>
      </div>
    </section>
  )
}
