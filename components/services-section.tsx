"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Database, Smartphone, Globe, Shield } from "lucide-react"

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
      icon: Code,
      title: "软件定制开发",
      description: "基于企业实际业务逻辑的深度定制开发",
      features: ["需求深度拆解", "技术灵活适配", "多端适配支持", "云端/本地部署"],
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
    },
    {
      icon: Brain,
      title: "AI智能体开发",
      description: "AI模型训练、算法优化到智能应用落地",
      features: ["AI模型训练", "算法优化", "智能应用开发", "业务场景适配"],
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/25",
    },
    {
      icon: Database,
      title: "系统集成服务",
      description: "企业级系统集成与数据互通解决方案",
      features: ["ERP/CRM对接", "数据同步", "接口开发", "系统整合"],
      gradient: "from-green-500 to-emerald-500",
      shadowColor: "shadow-green-500/25",
    },
    {
      icon: Smartphone,
      title: "移动应用开发",
      description: "小程序、APP、H5多端应用开发",
      features: ["微信小程序", "iOS/Android APP", "H5应用", "跨平台开发"],
      gradient: "from-orange-500 to-red-500",
      shadowColor: "shadow-orange-500/25",
    },
    {
      icon: Globe,
      title: "Web应用开发",
      description: "现代化Web应用与管理系统开发",
      features: ["响应式设计", "管理后台", "用户系统", "数据可视化"],
      gradient: "from-indigo-500 to-blue-500",
      shadowColor: "shadow-indigo-500/25",
    },
    {
      icon: Shield,
      title: "技术咨询服务",
      description: "技术架构设计与数字化转型咨询",
      features: ["架构设计", "技术选型", "性能优化", "安全评估"],
      gradient: "from-teal-500 to-cyan-500",
      shadowColor: "shadow-teal-500/25",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      <style jsx>{`
        @keyframes spreadFromCenter {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }
        
        .card-spread {
          animation: spreadFromCenter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .card-spread-delay-1 { animation-delay: 0.1s; }
        .card-spread-delay-2 { animation-delay: 0.2s; }
        .card-spread-delay-3 { animation-delay: 0.3s; }
        .card-spread-delay-4 { animation-delay: 0.4s; }
        .card-spread-delay-5 { animation-delay: 0.5s; }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">核心服务项目</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            从软件定制开发到AI智能体服务，我们提供全方位的技术解决方案
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 
                           hover:-translate-y-2 bg-card/80 backdrop-blur-sm relative overflow-hidden
                           ${index % 2 === 1 ? "lg:mt-8" : ""}
                           ${isVisible ? `card-spread card-spread-delay-${index}` : "opacity-0"}`}
                style={{
                  transformOrigin: "center center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative">
                  <div className="relative mb-4">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} 
                                    shadow-lg ${service.shadowColor} group-hover:shadow-xl group-hover:scale-110 
                                    transition-all duration-500 relative overflow-hidden`}
                    >
                      {/* 内部光泽效果 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute top-1 left-1 w-6 h-6 bg-white/20 rounded-full blur-sm" />
                      <service.icon className="h-8 w-8 text-white relative z-10 drop-shadow-sm" />
                    </div>
                    {/* 图标阴影 */}
                    <div
                      className={`absolute top-2 left-2 h-16 w-16 rounded-2xl bg-gradient-to-br ${service.gradient} 
                                    opacity-20 blur-md -z-10 group-hover:blur-lg transition-all duration-500`}
                    />
                  </div>

                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 
                                        shadow-sm group-hover:shadow-md transition-all duration-300`}
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-6 h-1 w-0 bg-gradient-to-r ${service.gradient} rounded-full 
                                 group-hover:w-full transition-all duration-700 ease-out`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
