"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { Target, Settings, ShieldCheck, Headphones } from "lucide-react"

export function AdvantagesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const retryCountRef = useRef(0)
  const maxRetries = 5

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current && isVisible) {
      const attemptPlay = () => {
        if (videoRef.current && retryCountRef.current < maxRetries) {
          videoRef.current
            .play()
            .then(() => {
              console.log("[v0] Advantages video playing successfully")
              retryCountRef.current = 0
            })
            .catch((error) => {
              retryCountRef.current++
              console.log(`[v0] Advantages video autoplay attempt ${retryCountRef.current} failed:`, error)
              if (retryCountRef.current < maxRetries) {
                setTimeout(attemptPlay, 1000 * retryCountRef.current)
              }
            })
        }
      }

      const video = videoRef.current
      if (video) {
        attemptPlay()

        const handleLoadedMetadata = () => attemptPlay()
        const handleLoadedData = () => attemptPlay()
        const handleCanPlay = () => {
          if (video.paused) {
            attemptPlay()
          }
        }
        const handleCanPlayThrough = () => attemptPlay()

        video.addEventListener("loadedmetadata", handleLoadedMetadata)
        video.addEventListener("loadeddata", handleLoadedData)
        video.addEventListener("canplay", handleCanPlay)
        video.addEventListener("canplaythrough", handleCanPlayThrough)

        // 监听用户交互事件来触发播放（Safari需要）
        const handleUserInteraction = () => {
          if (video.paused) {
            attemptPlay()
          }
        }

        document.addEventListener("click", handleUserInteraction, { once: true })
        document.addEventListener("touchstart", handleUserInteraction, { once: true })
        document.addEventListener("scroll", handleUserInteraction, { once: true })

        return () => {
          video.removeEventListener("loadedmetadata", handleLoadedMetadata)
          video.removeEventListener("loadeddata", handleLoadedData)
          video.removeEventListener("canplay", handleCanPlay)
          video.removeEventListener("canplaythrough", handleCanPlayThrough)
          document.removeEventListener("click", handleUserInteraction)
          document.removeEventListener("touchstart", handleUserInteraction)
          document.removeEventListener("scroll", handleUserInteraction)
        }
      }
    }
  }, [isVisible])

  const advantages = [
    {
      icon: Target,
      title: "需求深度拆解",
      description:
        "深入企业一线业务流程，梳理核心痛点（如数据孤岛、流程冗余、客户管理低效等），输出可视化需求文档，确保软件功能与业务目标100%对齐。",
      highlight: "100%业务对齐",
      number: "100%",
      numberLabel: "业务对齐",
    },
    {
      icon: Settings,
      title: "技术灵活适配",
      description: '根据企业规模、预算及未来扩展性需求，灵活选择技术栈，既避免"过度技术投入"，也为后续升级预留空间。',
      highlight: "灵活技术选型",
      number: "10+",
      numberLabel: "年技术经验",
    },
    {
      icon: ShieldCheck,
      title: "技术硬实力保障",
      description: "保障软件运行稳定（故障率低于0.5%）、数据安全（符合等保2.0标准）。",
      highlight: "故障率<0.5%",
      number: "<0.5%",
      numberLabel: "故障率",
    },
    {
      icon: Headphones,
      title: "售后无死角",
      description:
        "上线后提供运维服务，7×24小时技术支持热线+在线工单系统，故障响应不超过2小时，紧急问题4小时内提供解决方案。",
      highlight: "2小时响应",
      number: "2h",
      numberLabel: "故障响应",
    },
  ]

  return (
    <section id="advantages" className="py-20 bg-[rgba(233,243,246,1)] rounded-xl shadow-lg" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[rgba(233,243,246,1)]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">我们的核心优势</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            不同于传统"模块化拼凑"的伪定制，我们坚持从企业实际业务逻辑出发
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 左侧：前2个优势卡片 */}
          <div className="space-y-6">
            {advantages.slice(0, 2).map((advantage, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg bg-white relative overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                    : "opacity-0 translate-x-0 translate-y-0 scale-75"
                }`}
                style={{
                  transform: isVisible ? "translate(0, 0) scale(1)" : "translate(-50px, -30px) scale(0.8)",
                  transitionDelay: `${index * 150}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-500/10 blur-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-green-500/20 blur-sm" />

                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-green-100 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-green-200 transition-colors flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</CardTitle>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl font-bold gradient-text-blue-green">{advantage.number}</div>
                        <div className="text-sm font-medium text-gray-600">{advantage.numberLabel}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 中间：视频 */}
          <div className="flex justify-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDelay: "300ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full max-w-sm h-80 object-cover rounded-xl shadow-lg mt-16 pointer-events-none select-none"
                style={{
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_system_integration_icon_--ar_7758_--video_1_fc165433-f436-4382-847f-3cb9134c80db_0-T606KA4ZJcTXFMN2YL1MFn2zWvQjfr.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>

          {/* 右侧：后2个优势卡片 */}
          <div className="space-y-6">
            {advantages.slice(2, 4).map((advantage, index) => (
              <Card
                key={index + 2}
                className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg bg-white relative overflow-hidden ${
                  index === 1 ? "min-h-[280px]" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                    : "opacity-0 translate-x-0 translate-y-0 scale-75"
                }`}
                style={{
                  transform: isVisible ? "translate(0, 0) scale(1)" : "translate(50px, -30px) scale(0.8)",
                  transitionDelay: `${(index + 2) * 150}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-500/10 blur-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-green-500/20 blur-sm" />

                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-green-100 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-green-200 transition-colors flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</CardTitle>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl font-bold gradient-text-blue-green">{advantage.number}</div>
                        <div className="text-sm font-medium text-gray-600">{advantage.numberLabel}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
