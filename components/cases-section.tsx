"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const casesData = [
  {
    id: 1,
    title: "AI家政服务",
    category: "移动应用",
    image: "/images/case-ai-home.png",
    description: "智能家政服务平台，提供VIP会员体系和便民服务",
    tech: ["React Native", "AI算法", "云服务"],
  },
  {
    id: 2,
    title: "电商ERP系统",
    category: "企业管理",
    image: "/images/case-erp.png",
    description: "全功能电商ERP管理系统，支持退货管理和数据分析",
    tech: ["Vue.js", "Node.js", "MySQL"],
  },
  {
    id: 3,
    title: "智能CRM系统",
    category: "数据分析",
    image: "/images/case-crm.png",
    description: "AI驱动的客户关系管理系统，提供智能分析和预测",
    tech: ["React", "Python", "TensorFlow"],
  },
  {
    id: 4,
    title: "鲜配达",
    category: "生活服务",
    image: "/images/case-delivery.png",
    description: "新鲜食材配送平台，用户积分体系和配送管理",
    tech: ["Flutter", "Spring Boot", "Redis"],
  },
  {
    id: 5,
    title: "办公协同系统",
    category: "办公协作",
    image: "/images/case-contacts1.png",
    description: "智能办公协同平台，集成审批、日程、AI助手等功能，提供数据概览和效率优化建议",
    tech: ["React Native", "AI算法", "数据分析"],
  },
  {
    id: 6,
    title: "企业应用中心",
    category: "办公协作",
    image: "/images/case-contacts2.png",
    description: "企业级应用中心平台，整合办公应用、AI工具和数据服务，提供一站式工作解决方案",
    tech: ["Next.js", "微服务", "AI集成"],
  },
]

export default function CasesSection() {
  const [showQRCode, setShowQRCode] = useState(false)

  const createInfiniteColumn = (cases: typeof casesData) => {
    return [...cases, ...cases, ...cases]
  }

  const caseColumns = [
    createInfiniteColumn([casesData[0], casesData[3]]),
    createInfiniteColumn([casesData[1], casesData[4]]),
    createInfiniteColumn([casesData[2], casesData[5]]),
  ]

  return (
    <section id="cases" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">成功案例展示</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            精选部分项目案例，展示我们在各个领域的专业实力和创新能力
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 h-[800px] overflow-hidden max-w-4xl mx-auto">
          {caseColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="relative overflow-hidden">
              <div
                className="infinite-scroll-column"
                style={{
                  animationDelay: `${columnIndex * -2}s`,
                  animationDuration: `${15 + columnIndex * 3}s`,
                }}
              >
                {column.map((caseItem, itemIndex) => (
                  <div key={`${caseItem.id}-${itemIndex}`} className="case-item group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-white shadow-sm h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <Image
                        src={caseItem.image || "/placeholder.svg"}
                        alt={caseItem.title}
                        width={200}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h4 className="font-bold text-white text-sm mb-2">{caseItem.title}</h4>
                        <p className="text-xs text-white/80 mb-2">{caseItem.category}</p>
                        <p className="text-xs text-white/70 mb-3 line-clamp-2">{caseItem.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {caseItem.tech.slice(0, 2).map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">想了解更多案例详情或讨论您的项目需求？</p>
          <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
              >
                联系我们咨询
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="flex flex-col items-center justify-center p-6">
                <img src="/customer-service-qr.png" alt="Customer Service QR Code" className="w-full max-w-sm h-auto" />
                <div className="mt-4 text-center space-y-2">
                  <p className="text-sm font-medium text-foreground">请用微信扫描二维码咨询客服</p>
                  <p className="text-xs text-muted-foreground">或者拨打咨询电话：4001037431</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <style jsx>{`
        .infinite-scroll-column {
          display: flex;
          flex-direction: column;
          animation: infiniteScroll linear infinite;
          will-change: transform;
        }

        .case-item {
          height: 600px;
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        @keyframes infiniteScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-66.666%);
          }
        }

        .infinite-scroll-column:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
