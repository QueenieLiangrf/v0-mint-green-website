"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function AdvantagesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const advantages = [
    {
      icon: () => (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg opacity-20 blur-sm"></div>
          <div className="absolute top-1 left-1 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg transform rotate-12"></div>
          <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-lg transform -rotate-6"></div>
        </div>
      ),
      title: "需求深度拆解",
      description:
        "深入企业一线业务流程，梳理核心痛点（如数据孤岛、流程冗余、客户管理低效等），输出可视化需求文档，确保软件功能与业务目标100%对齐。",
      highlight: "100%业务对齐",
      number: "100%",
      numberLabel: "业务对齐",
    },
    {
      icon: () => (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full opacity-20 blur-sm"></div>
          <div className="absolute top-1 left-1 w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full"></div>
          <div className="absolute top-3 left-3 w-6 h-6 bg-white rounded-full opacity-80"></div>
        </div>
      ),
      title: "技术灵活适配",
      description: '根据企业规模、预算及未来扩展性需求，灵活选择技术栈，既避免"过度技术投入"，也为后续升级预留空间。',
      highlight: "灵活技术选型",
      number: "10+",
      numberLabel: "年技术经验",
    },
    {
      icon: () => (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-cyan-600 rounded-xl opacity-20 blur-sm"></div>
          <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-teal-300 to-cyan-500 rounded-xl transform rotate-45"></div>
          <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-white to-gray-100 rounded-lg transform -rotate-45"></div>
        </div>
      ),
      title: "技术硬实力保障",
      description: "保障软件运行稳定（故障率低于0.5%）、数据安全（符合等保2.0标准）。",
      highlight: "故障率<0.5%",
      number: "<0.5%",
      numberLabel: "故障率",
    },
    {
      icon: () => (
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl opacity-20 blur-sm"></div>
          <div className="absolute top-1 left-1 w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl transform rotate-6"></div>
          <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-xl transform -rotate-3"></div>
          <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full"></div>
        </div>
      ),
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">我们的核心优势</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            不同于传统"模块化拼凑"的伪定制，我们坚持从企业实际业务逻辑出发
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 左侧：前2个优势卡片 */}
          <div className="space-y-6">
            {advantages.slice(0, 2).map((advantage, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-700 border-border hover:border-primary/20 ${
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
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <advantage.icon />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">{advantage.title}</CardTitle>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl font-bold text-primary">{advantage.number}</div>
                        <div className="text-sm font-medium text-muted-foreground">{advantage.numberLabel}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
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
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-sm h-80 object-cover rounded-xl shadow-lg mt-16"
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
                className={`group hover:shadow-lg transition-all duration-700 border-border hover:border-primary/20 ${
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
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <advantage.icon />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">{advantage.title}</CardTitle>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-3xl font-bold text-primary">{advantage.number}</div>
                        <div className="text-sm font-medium text-muted-foreground">{advantage.numberLabel}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
