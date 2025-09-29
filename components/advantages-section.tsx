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

  // const stats = [
  //   { number: "100%", label: "业务对齐" },
  //   { number: "10+", label: "年技术经验" },
  //   { number: "<0.5%", label: "故障率" },
  //   { number: "<2h", label: "故障响应" },
  // ]

  const advantages = [
    {
      icon: () => (
        <video autoPlay loop muted playsInline className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-lg">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_technology_consulting_icon_--ar_7758_--video_1_21022898-08e4-420d-8ac7-355f8d364bc3_3-BKyVAtMJJdGcMlCmKusxn8hEyzOdpv.mp4" type="video/mp4" />
        </video>
      ),
      title: "需求深度拆解",
      description:
        "深入企业一线业务流程，梳理核心痛点（如数据孤岛、流程冗余、客户管理低效等），输出可视化需求文档，确保软件功能与业务目标100%对齐。",
    },
    {
      icon: () => (
        <video autoPlay loop muted playsInline className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-lg">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_system_integration_icon_--ar_7758_--video_1_fc165433-f436-4382-847f-3cb9134c80db_0-T606KA4ZJcTXFMN2YL1MFn2zWvQjfr.mp4" type="video/mp4" />
        </video>
      ),
      title: "技术灵活适配",
      description: '根据企业规模、预算及未来扩展性需求，灵活选择技术栈，既避免"过度技术投入"，也为后续升级预留空间。',
    },
    {
      icon: () => (
        <video autoPlay loop muted playsInline className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-lg">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_software_developing_personally_icon_--ar_7758_--v_05df03e0-68cd-40c0-8d91-6cb8ac587c81_2-cwpQI05YcZtvvRyXZsVKWihcHu5Xkr.mp4" type="video/mp4" />
        </video>
      ),
      title: "技术硬实力保障",
      description: "保障软件运行稳定（故障率低于0.5%）、数据安全（符合等保2.0标准）。",
    },
    {
      icon: () => (
        <video autoPlay loop muted playsInline className="w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-lg">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_ai_agent_icon_--ar_7758_--video_1_5a82ecc5-9d3d-4cc4-ab7e-0cc104777552_2-0TQyy801BhboPKXv0hovDRVnaOyDVI.mp4" type="video/mp4" />
        </video>
      ),
      title: "售后无死角",
      description:
        "上线后提供运维服务，7×24小时技术支持热线+在线工单系统，故障响应不超过2小时，紧急问题4小时内提供解决方案。",
    },
  ]

  return (
    <section id="advantages" className="py-12 sm:py-20 bg-[rgba(233,243,246,1)] rounded-xl shadow-lg" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[rgba(233,243,246,1)]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-4">
            我们的核心优势
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            不同于传统"模块化拼凑"的伪定制，我们坚持从企业实际业务逻辑出发
          </p>
        </div>

        {/* <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-4 gap-1 sm:gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-1 sm:p-4 bg-white/50 rounded-lg border border-primary/10 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div className="text-xs sm:text-xl font-bold text-primary mb-0 sm:mb-1">{stat.number}</div>
                <div className="text-[10px] sm:text-sm font-medium text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* 左侧：前2个优势卡片 */}
          <div className="space-y-4 sm:space-y-6">
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
                <CardHeader className="pb-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center flex-shrink-0">
                      {advantage.icon()}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg font-semibold text-foreground mb-0 mt-3">
                        {advantage.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed -mt-7">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 中间：视频 */}
          {/* <div className="flex justify-center order-first lg:order-none">
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
                className="w-full max-w-sm h-60 sm:h-80 object-cover rounded-xl shadow-lg mt-0 sm:mt-16"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_system_integration_icon_--ar_7758_--video_1_fc165433-f436-4382-847f-3cb9134c80db_0-T606KA4ZJcTXFMN2YL1MFn2zWvQjfr.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div> */}

          {/* 右侧：后2个优势卡片 */}
          <div className="space-y-4 sm:space-y-6">
            {advantages.slice(2, 4).map((advantage, index) => (
              <Card
                key={index + 2}
                className={`group hover:shadow-lg transition-all duration-700 border-border hover:border-primary/20 ${
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
                <CardHeader className="pb-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center flex-shrink-0">
                      {advantage.icon()}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base sm:text-lg font-semibold text-foreground mb-0 mt-3">
                        {advantage.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed -mt-7">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
