"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMainCardHovered, setIsMainCardHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("services")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const mainService = {
    title: "软件定制开发",
    subtitle: "CUSTOM DEVELOPMENT",
    description: "基于企业实际业务逻辑的深度定制开发，从需求分析到产品交付的全流程服务",
    shortDescription: "基于企业实际业务逻辑的深度定制开发",
    features: ["需求深度拆解", "技术灵活适配", "多端适配支持", "云端/本地部署"],
    image: "/professional-software-developer-working-on-compute.jpg",
    gradient: "from-green-500 to-green-600",
  }

  const services = [
    {
      title: "软件定制开发",
      description: "基于企业实际业务逻辑的深度定制开发",
      detailedDescription: "基于企业实际业务逻辑的深度定制开发，从需求分析到产品交付的全流程服务",
      features: ["需求深度拆解", "技术灵活适配", "多端适配支持", "云端/本地部署", "敏捷开发流程", "质量保证体系"],
      gradient: "from-cyan-400 to-blue-500",
      bgPattern: "bg-gradient-to-br from-cyan-400/80 to-blue-500/90",
    },
    {
      title: "AI智能体",
      description: "AI模型训练与智能应用开发",
      detailedDescription: "基于最新AI技术，为企业打造智能化解决方案，提升业务效率和用户体验",
      features: ["自然语言处理", "机器学习模型", "智能对话系统", "数据分析预测"],
      gradient: "from-teal-400 to-teal-600",
      bgPattern: "bg-gradient-to-br from-teal-400/80 to-teal-600/90",
    },
    {
      title: "系统集成",
      description: "企业级系统集成解决方案",
      detailedDescription: "整合企业现有系统，实现数据互通和业务流程优化，提升整体运营效率",
      features: ["API接口开发", "数据同步", "流程自动化", "系统监控"],
      gradient: "from-green-400 to-green-600",
      bgPattern: "bg-gradient-to-br from-green-400/80 to-green-600/90",
    },
    {
      title: "技术咨询服务",
      description: "专业技术咨询与解决方案",
      detailedDescription: "提供专业的技术咨询服务，帮助企业制定技术战略，优化技术架构，解决技术难题",
      features: ["技术架构设计", "性能优化建议", "技术选型指导", "团队技术培训", "代码审查服务", "技术风险评估"],
      gradient: "from-blue-500 to-blue-700",
      bgPattern: "bg-gradient-to-br from-blue-500/80 to-blue-700/90",
    },
    {
      title: "移动应用",
      description: "跨平台移动应用开发",
      detailedDescription: "原生和跨平台移动应用开发，覆盖iOS和Android平台，提供优质用户体验",
      features: ["原生开发", "跨平台方案", "UI/UX设计", "应用商店发布", "性能优化", "用户体验测试"],
      gradient: "from-emerald-400 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-emerald-400/80 to-emerald-600/90",
    },
    {
      title: "Web应用",
      description: "现代化Web应用开发",
      detailedDescription: "响应式Web应用开发，采用最新前端技术，确保性能和用户体验的完美平衡",
      features: ["响应式设计", "前端框架", "性能优化", "SEO优化", "安全防护", "云端部署"],
      gradient: "from-cyan-500 to-teal-500",
      bgPattern: "bg-gradient-to-br from-cyan-500/80 to-teal-500/90",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 text-card bg-primary">
            核心服务项目
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            发现数字化转型的
            <br />
            无限可能
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            从软件定制开发到AI智能体服务，我们提供全方位的技术解决方案，助力企业实现数字化转型
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700 rounded-full px-8 py-6 text-base font-medium">
            了解我们的服务
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-none relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${service.bgPattern} hover:shadow-xl ${
                  hoveredCard === index ? "h-64" : "h-32"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

                <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="w-full">
                      <h3 className="font-bold text-white text-lg mb-3 group-hover:text-white/90 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {hoveredCard === index ? service.detailedDescription : service.description}
                      </p>

                      <div
                        className={`transition-all duration-500 ease-out ${
                          hoveredCard === index
                            ? "opacity-100 max-h-40 translate-y-0"
                            : "opacity-0 max-h-0 translate-y-4"
                        } overflow-hidden`}
                      >
                        <div className="space-y-2 mt-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                              <span className="text-white/80 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          size="sm"
                          className="mt-4 bg-white/20 text-white hover:bg-white/30 border-white/30 rounded-full text-xs"
                        >
                          了解更多
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* 装饰性图案 */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/20 rounded-full blur-sm" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
