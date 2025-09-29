"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChatDialog } from "./chat-dialog"

export function HeroSection() {
  const [currentStation, setCurrentStation] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)

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

  return (
    <section className="relative">
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl" />

      <div className="fusion-card-large relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full -translate-y-48 translate-x-48" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <div className="space-y-2">
                  <div className="text-foreground">软件定制开发与</div>
                  <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    AI智能体服务专家
                  </div>
                </div>
              </h1>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  聚焦 <span className="text-primary font-semibold">AI + 软件创新</span>，赋能业务价值升级
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsChatOpen(true)}
                >
                  了解我们的服务，开启数字化转型之旅
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>

          {/* 右侧视频区域 */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/30 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-secondary/40 animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-accent/50 animate-pulse delay-500" />

              <video
                src="https://blobs.vusercontent.net/blob/u1774431695_Software_customization_development_and_AI_agents__1cc54faa-3377-4380-9708-66886f1f29b7_3-GKaSFEcgNG4E1sdHTtNWg57sdpEPs1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="fusion-card p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            100%
          </div>
          <div className="text-sm text-muted-foreground">业务对齐</div>
        </div>
        <div className="fusion-card p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            10+
          </div>
          <div className="text-sm text-muted-foreground">年技术经验</div>
        </div>
        <div className="fusion-card p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            &gt;0.5%
          </div>
          <div className="text-sm text-muted-foreground">故障率</div>
        </div>
        <div className="fusion-card p-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            2h
          </div>
          <div className="text-sm text-muted-foreground">故障响应</div>
        </div>
      </div>

      <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  )
}
