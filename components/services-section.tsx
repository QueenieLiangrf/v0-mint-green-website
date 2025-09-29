"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

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

  const services = [
    {
      title: "软件定制开发",
      description: "基于企业实际业务逻辑的深度定制开发",
      detailedDescription: "基于企业实际业务逻辑的深度定制开发，从需求分析到产品交付的全流程服务",
      features: ["需求深度拆解", "技术灵活适配", "多端适配支持", "云端/本地部署", "敏捷开发流程", "质量保证体系"],
      gradient: "from-primary to-secondary",
      bgPattern: "bg-white",
    },
    {
      title: "AI智能体",
      description: "AI模型训练与智能应用开发",
      detailedDescription: "基于最新AI技术，为企业打造智能化解决方案，提升业务效率和用户体验",
      features: ["自然语言处理", "机器学习模型", "智能对话系统", "数据分析预测"],
      gradient: "from-secondary to-accent",
      bgPattern: "bg-white",
    },
    {
      title: "系统集成",
      description: "企业级系统集成解决方案",
      detailedDescription: "整合企业现有系统，实现数据互通和业务流程优化，提升整体运营效率",
      features: ["API接口开发", "数据同步", "流程自动化", "系统监控"],
      gradient: "from-accent to-primary",
      bgPattern: "bg-white",
    },
    {
      title: "技术咨询服务",
      description: "专业技术咨询与解决方案",
      detailedDescription: "提供专业的技术咨询服务，帮助企业制定技术战略，优化技术架构，解决技术难题",
      features: ["技术架构设计", "性能优化建议", "技术选型指导", "团队技术培训", "代码审查服务", "技术风险评估"],
      gradient: "from-primary/80 to-secondary/80",
      bgPattern: "bg-white",
    },
    {
      title: "移动应用",
      description: "跨平台移动应用开发",
      detailedDescription: "原生和跨平台移动应用开发，覆盖iOS和Android平台，提供优质用户体验",
      features: ["原生开发", "跨平台方案", "UI/UX设计", "应用商店发布", "性能优化", "用户体验测试"],
      gradient: "from-secondary/80 to-accent/80",
      bgPattern: "bg-white",
    },
    {
      title: "Web应用",
      description: "现代化Web应用开发",
      detailedDescription: "响应式Web应用开发，采用最新前端技术，确保性能和用户体验的完美平衡",
      features: ["响应式设计", "前端框架", "性能优化", "SEO优化", "安全防护", "云端部署"],
      gradient: "from-accent/80 to-primary/80",
      bgPattern: "bg-white",
    },
  ]

  const renderServiceItems = () => {
    const items = []

    items.push(
      <Card
        key="service-0"
        className={`border-0 shadow-lg relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${services[0].bgPattern} hover:shadow-2xl hover:-translate-y-2 h-80 sm:col-span-2 lg:col-span-2`}
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 blur-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-secondary/20 blur-sm" />

        <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
          <div className="flex items-start justify-between h-full">
            <div className="w-1/2 pr-4">
              <h3 className="font-extrabold text-black text-sm mb-3 group-hover:text-black/90 transition-colors tracking-tight">
                {services[0].title}
              </h3>
              <p className="text-black/70 text-xs leading-relaxed">{services[0].detailedDescription}</p>
            </div>

            <div className="w-1/2 pl-4">
              <div className="transition-all duration-500 ease-out opacity-100 max-h-40 translate-y-0 overflow-hidden">
                <div className="space-y-2">
                  {services[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                      <span className="text-black/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>,
    )

    items.push(
      <div key="video-1" className="flex items-center justify-center lg:col-span-2">
        <video autoPlay loop muted playsInline className="w-full h-80 object-cover rounded-lg">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_web_icon_--ar_7758_--video_1_1bc8d9c9-a839-459d-ace8-1827f06477d4_0-iv2Av8mqyoirLbd3ziT6DuWdFFuDbc.mp4" type="video/mp4" />
        </video>
      </div>,
    )

    items.push(
      <Card
        key="service-1"
        className={`border-0 shadow-lg relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${services[1].bgPattern} hover:shadow-2xl hover:-translate-y-2 h-80 sm:col-span-2 lg:col-span-2`}
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-secondary/10 blur-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-accent/20 blur-sm" />

        <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
          <div className="flex items-start justify-between h-full">
            <div className="w-1/2 pr-4">
              <h3 className="font-extrabold text-black text-sm mb-3 group-hover:text-black/90 transition-colors tracking-tight">
                {services[1].title}
              </h3>
              <p className="text-black/70 text-xs leading-relaxed">{services[1].detailedDescription}</p>
            </div>

            <div className="w-1/2 pl-4">
              <div className="transition-all duration-500 ease-out opacity-100 max-h-40 translate-y-0 overflow-hidden">
                <div className="space-y-2">
                  {services[1].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full flex-shrink-0" />
                      <span className="text-black/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>,
    )

    items.push(
      <Card
        key="service-2"
        className={`border-0 shadow-lg relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${services[2].bgPattern} hover:shadow-2xl hover:-translate-y-2 h-80 sm:col-span-2 lg:col-span-2`}
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent/10 blur-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-primary/20 blur-sm" />

        <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
          <div className="flex items-start justify-between h-full">
            <div className="w-1/2 pr-4">
              <h3 className="font-extrabold text-black text-sm mb-3 group-hover:text-black/90 transition-colors tracking-tight">
                {services[2].title}
              </h3>
              <p className="text-black/70 text-xs leading-relaxed">{services[2].detailedDescription}</p>
            </div>

            <div className="w-1/2 pl-4">
              <div className="transition-all duration-500 ease-out opacity-100 max-h-40 translate-y-0 overflow-hidden">
                <div className="space-y-2">
                  {services[2].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0" />
                      <span className="text-black/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>,
    )

    items.push(
      <Card
        key="service-3"
        className={`border-0 shadow-lg relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${services[3].bgPattern} hover:shadow-2xl hover:-translate-y-2 h-80 sm:col-span-2 lg:col-span-2`}
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 blur-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-secondary/20 blur-sm" />

        <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
          <div className="flex items-start justify-between h-full">
            <div className="w-1/2 pr-4">
              <h3 className="font-extrabold text-black text-sm mb-3 group-hover:text-black/90 transition-colors tracking-tight">
                {services[3].title}
              </h3>
              <p className="text-black/70 text-xs leading-relaxed">{services[3].detailedDescription}</p>
            </div>

            <div className="w-1/2 pl-4">
              <div className="transition-all duration-500 ease-out opacity-100 max-h-40 translate-y-0 overflow-hidden">
                <div className="space-y-2">
                  {services[3].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                      <span className="text-black/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>,
    )

    items.push(
      <Card
        key="service-4"
        className={`border-0 shadow-lg relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${services[4].bgPattern} hover:shadow-2xl hover:-translate-y-2 h-80 sm:col-span-2 lg:col-span-2`}
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-secondary/10 blur-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-accent/20 blur-sm" />

        <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
          <div className="flex items-start justify-between h-full">
            <div className="w-1/2 pr-4">
              <h3 className="font-extrabold text-black text-sm mb-3 group-hover:text-black/90 transition-colors tracking-tight">
                {services[4].title}
              </h3>
              <p className="text-black/70 text-xs leading-relaxed">{services[4].detailedDescription}</p>
            </div>

            <div className="w-1/2 pl-4">
              <div className="transition-all duration-500 ease-out opacity-100 max-h-40 translate-y-0 overflow-hidden">
                <div className="space-y-2">
                  {services[4].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full flex-shrink-0" />
                      <span className="text-black/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>,
    )

    items.push(
      <Card
        key="service-5"
        className={`border-0 shadow-lg relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out ${services[5].bgPattern} hover:shadow-2xl hover:-translate-y-2 h-80 sm:col-span-2 lg:col-span-2`}
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent/10 blur-lg" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-primary/20 blur-sm" />

        <CardContent className="p-4 h-full flex flex-col justify-between relative z-10">
          <div className="flex items-start justify-between h-full">
            <div className="w-1/2 pr-4">
              <h3 className="font-extrabold text-black text-sm mb-3 group-hover:text-black/90 transition-colors tracking-tight">
                {services[5].title}
              </h3>
              <p className="text-black/70 text-xs leading-relaxed">{services[5].detailedDescription}</p>
            </div>

            <div className="w-1/2 pl-4">
              <div className="transition-all duration-500 ease-out opacity-100 max-h-40 translate-y-0 overflow-hidden">
                <div className="space-y-2">
                  {services[5].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0" />
                      <span className="text-black/70 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>,
    )

    return items
  }

  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u1774431695_apps_icon_--ar_7758_--video_1_bb8f0470-625e-4006-a976-f27afe1771c6_2-yk01iHKFNZtizKq1ccm03V0zlg33r8.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl float-animation" />
      <div
        className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl float-animation"
        style={{ animationDelay: "2s" }}
      />

      <div className="fusion-card-large relative z-10">
        <div id="services" className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-xs font-medium rounded-full mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
            核心服务项目
          </div>
          <h2 className="text-sm sm:text-sm lg:text-sm font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            发现数字化转型的
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">无限可能</span>
          </h2>
          <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            从软件定制开发到AI智能体服务，我们提供全方位的技术解决方案，助力企业实现数字化转型
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-tr from-accent/5 via-primary/3 to-transparent rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24" />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {renderServiceItems()}
        </div>
      </div>

      {/* 核心优势部分 */}
    </section>
  )
}
