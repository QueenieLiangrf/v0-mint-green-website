"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const industries = [
  {
    id: 1,
    name: "金融科技",
    description: "智能风控、数字支付、区块链应用",
    image: "/modern-financial-technology-office-with-digital-sc.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "医疗健康",
    description: "远程诊疗、智能诊断、健康管理",
    image: "/modern-hospital-with-digital-health-technology-and.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    name: "教育培训",
    description: "在线教育、智能评测、个性化学习",
    image: "/modern-classroom-with-digital-learning-technology-.jpg",
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    name: "电商零售",
    description: "智能推荐、供应链优化、全渠道营销",
    image: "/modern-retail-store-with-digital-commerce-technolo.jpg",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "制造业",
    description: "工业4.0、智能制造、设备监控",
    image: "/modern-smart-factory-with-industrial-iot-and-autom.jpg",
    color: "from-gray-500 to-slate-500",
  },
  {
    id: 6,
    name: "物流运输",
    description: "智能调度、路径优化、实时追踪",
    image: "/modern-logistics-center-with-automated-sorting-and.jpg",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 7,
    name: "房地产",
    description: "VR看房、智能营销、物业管理",
    image: "/modern-real-estate-office-with-vr-technology-and-d.jpg",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 8,
    name: "餐饮服务",
    description: "智能点餐、供应链管理、客户分析",
    image: "/modern-restaurant-with-digital-ordering-system-and.jpg",
    color: "from-yellow-500 to-orange-500",
  },
]

export function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [showQRCode, setShowQRCode] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6">
              各行各业数字化解决方案
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              深耕多个行业领域，为不同行业提供定制化的数字化转型解决方案，助力企业实现智能化升级
            </p>
          </div>
        </div>

        {/* 行业网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={industry.id}
              className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* 图片区域 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* 悬停时的遮罩 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">了解更多</p>
                  </div>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>

                {/* 底部装饰线 */}
                <div
                  className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${industry.color} transition-all duration-500 rounded-full`}
                ></div>
              </div>
            </Card>
          ))}
        </div>

        {/* 底部行动区域 */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-lg text-muted-foreground mb-6">无论您处于哪个行业，我们都能为您提供专业的数字化解决方案</p>
          <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
            <DialogTrigger asChild>
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                咨询行业解决方案
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="flex flex-col items-center justify-center p-6">
                <img src="/customer-service-qr.png" alt="Customer Service QR Code" className="w-full max-w-sm h-auto" />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
