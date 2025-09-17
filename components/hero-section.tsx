"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Zap,
  TrendingUp,
  DollarSign,
  Sparkles,
  Code,
  Bot,
  Smartphone,
  Globe,
  Database,
  Shield,
} from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      icon: Code,
      title: "软件定制开发",
      description: "从业务逻辑出发的深度定制开发",
      features: ["需求深度拆解", "技术灵活适配", "全程跟踪服务"],
    },
    {
      icon: Bot,
      title: "AI智能体服务",
      description: "AI模型训练到应用落地全链条",
      features: ["模型训练优化", "智能应用开发", "持续迭代升级"],
    },
    {
      icon: Smartphone,
      title: "移动应用开发",
      description: "跨平台移动应用解决方案",
      features: ["iOS/Android开发", "跨平台方案", "用户体验优化"],
    },
    {
      icon: Globe,
      title: "Web应用开发",
      description: "现代化Web应用与网站建设",
      features: ["响应式设计", "高性能优化", "SEO友好"],
    },
    {
      icon: Database,
      title: "数据分析系统",
      description: "企业级数据处理与分析平台",
      features: ["数据可视化", "实时分析", "智能报表"],
    },
    {
      icon: Shield,
      title: "系统集成服务",
      description: "企业系统整合与安全防护",
      features: ["系统对接", "安全加固", "运维支持"],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [services.length])

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：一键咨询价值主张 */}
          <div className="space-y-8">
            <div className="bg-primary rounded-3xl p-8 text-center shadow-xl card-hover">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                <h1
                  className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  一键咨询
                </h1>

                <div className="text-xl text-white font-medium drop-shadow-md">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>=</span>
                    <span>专属软件</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>+</span>
                    <TrendingUp className="w-5 h-5" />
                    <span>效率暴涨</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>+</span>
                    <DollarSign className="w-5 h-5" />
                    <span>利润稳涨！</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-lg"
                >
                  立即免费咨询
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* 快速统计 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">年经验</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">2h</div>
                <div className="text-sm text-muted-foreground">快速响应</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">7×24</div>
                <div className="text-sm text-muted-foreground">技术支持</div>
              </div>
            </div>
          </div>

          {/* 右侧：核心服务轮播 */}
          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-8 shadow-xl card-hover">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary text-white px-4 py-2 text-sm font-medium">
                  <Zap className="mr-2 h-4 w-4" />
                  核心服务项目
                </div>

                {/* 轮播内容 */}
                <div className="min-h-[300px] transition-all duration-500 ease-in-out">
                  {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentService
                            ? "opacity-100 transform translate-y-0"
                            : "opacity-0 transform translate-y-4 absolute"
                        }`}
                      >
                        <div className="text-center space-y-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>

                          <h3 className="text-2xl font-bold text-card-foreground">{service.title}</h3>

                          <p className="text-lg text-muted-foreground">{service.description}</p>

                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* 轮播指示器 */}
                <div className="flex justify-center gap-2">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentService(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentService
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    查看案例
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    了解更多
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
