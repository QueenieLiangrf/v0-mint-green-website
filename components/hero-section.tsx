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
    <section className="relative overflow-hidden py-20 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 mb-12 -mt-[76px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                  <div className="space-y-2">
                    <div className="text-gray-900">软件定制开发与AI智能体</div>
                    <div className="text-teal-600">服务专家</div>
                  </div>
                </h1>

                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    聚焦 <span className="text-teal-600 font-semibold">AI + 软件创新</span>，赋能业务价值升级
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-teal-600 border-teal-600 hover:bg-teal-50 font-semibold px-6 py-3 rounded-full bg-transparent"
                    onClick={() => setIsChatOpen(true)}
                  >
                    了解我们的服务，开启数字化转型之旅
                    <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ height: "300px" }}>
                  <img
                    src="/tech-consulting-hero.png"
                    alt="技术咨询服务"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* 添加一个渐变遮罩以增强视觉效果 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">业务对齐</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">年技术经验</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-2">&gt;0.5%</div>
            <div className="text-sm text-gray-600">故障率</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-2">2h</div>
            <div className="text-sm text-gray-600">故障响应</div>
          </div>
        </div>
      </div>

      <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  )
}
