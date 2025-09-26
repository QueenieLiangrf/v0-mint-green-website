"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
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
      title: "企业通讯录",
      category: "办公协作",
      image: "/images/case-contacts1.png",
      description: "企业内部通讯录系统，支持部门管理和员工查找",
      tech: ["React Native", "Express", "MongoDB"],
    },
    {
      id: 6,
      title: "团队协作平台",
      category: "办公协作",
      image: "/images/case-contacts2.png",
      description: "部门协作管理平台，支持团队沟通和项目管理",
      tech: ["Next.js", "GraphQL", "PostgreSQL"],
    },
  ]

  const createInfiniteColumn = (cases: typeof casesData) => {
    return [...cases, ...cases, ...cases] // 三倍重复确保无缝滚动
  }

  const caseColumns = [
    createInfiniteColumn([casesData[0], casesData[3]]), // 第一列
    createInfiniteColumn([casesData[1], casesData[4]]), // 第二列
    createInfiniteColumn([casesData[2], casesData[5]]), // 第三列
  ]

  useEffect(() => {
    const stationTimer = setInterval(() => {
      setCurrentStation((prev) => (prev + 1) % stations.length)
    }, 4000)
    return () => clearInterval(stationTimer)
  }, [stations.length])

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <div className="space-y-2">
                  <div className="text-foreground">软件定制开发与AI智能体</div>
                  <div className="text-primary">服务专家</div>
                </div>
              </h1>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  聚焦 <span className="text-primary font-semibold">AI + 软件创新</span>，赋能业务价值升级
                </p>
                <p>了解我们的服务，开启数字化转型之旅</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-4 rounded-full shadow-lg text-lg"
                  onClick={() => setIsChatOpen(true)}
                >
                  了解我们的服务
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">业务对齐</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">年技术经验</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">&gt;0.5%</div>
                <div className="text-sm text-muted-foreground">故障率</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">2h</div>
                <div className="text-sm text-muted-foreground">故障响应</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">成功案例展示</h3>
                <p className="text-muted-foreground">精选项目案例</p>
              </div>

              <div className="grid grid-cols-3 gap-4 h-80 overflow-hidden">
                {caseColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="relative overflow-hidden">
                    <div
                      className="infinite-scroll-column"
                      style={{
                        animationDelay: `${columnIndex * -2}s`, // 每列不同的延迟
                        animationDuration: `${15 + columnIndex * 3}s`, // 每列不同的速度
                      }}
                    >
                      {column.map((caseItem, itemIndex) => (
                        <div key={`${caseItem.id}-${itemIndex}`} className="case-item group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg bg-white shadow-sm h-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <Image
                              src={caseItem.image || "/placeholder.svg"}
                              alt={caseItem.title}
                              width={120}
                              height={160}
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

              <div className="text-center">
                <Button variant="outline" className="bg-transparent">
                  查看更多案例
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      <style jsx>{`
        /* 添加无缝滚动动画样式 */
        .infinite-scroll-column {
          display: flex;
          flex-direction: column;
          animation: infiniteScroll linear infinite;
          will-change: transform;
        }

        .case-item {
          height: 160px;
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        @keyframes infiniteScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-66.666%); /* 移动2/3的距离，因为我们有3倍重复 */
          }
        }

        .infinite-scroll-column:hover {
          animation-play-state: paused;
        }

        .paper-plane-container {
          position: relative;
          height: 120px;
          width: 100%;
        }

        .paper-plane {
          position: absolute;
          animation: fly 8s infinite linear;
          z-index: 20;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        @keyframes fly {
          0% {
            left: 10%;
            top: 60px;
            transform: rotate(45deg) scale(1);
          }
          25% {
            left: 30%;
            top: 20px;
            transform: rotate(35deg) scale(1.1);
          }
          50% {
            left: 50%;
            top: 40px;
            transform: rotate(45deg) scale(1);
          }
          75% {
            left: 70%;
            top: 20px;
            transform: rotate(35deg) scale(1.1);
          }
          100% {
            left: 90%;
            top: 60px;
            transform: rotate(45deg) scale(1);
          }
        }

        .stations-container {
          position: relative;
          height: 120px;
          width: 100%;
        }

        .station {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .station-1 {
          left: 25%;
          transform: translate(-50%, -50%);
        }

        .station-2 {
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .station-3 {
          left: 75%;
          transform: translate(-50%, -50%);
        }

        .station-marker {
          width: 16px;
          height: 16px;
          background: hsl(var(--primary));
          border-radius: 50%;
          animation: pulse 2s infinite;
          box-shadow: 0 0 0 0 hsla(var(--primary), 0.7);
          border: 2px solid white;
          position: relative;
        }

        .station-marker::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
        }

        .station-label {
          font-size: 10px;
          color: hsl(var(--primary));
          font-weight: 600;
          background: white;
          padding: 2px 6px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border: 1px solid hsl(var(--primary));
          opacity: 0.8;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 hsla(var(--primary), 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 12px hsla(var(--primary), 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 hsla(var(--primary), 0);
          }
        }
      `}</style>
    </section>
  )
}
