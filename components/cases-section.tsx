"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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

export default function CasesSection() {
  const createInfiniteColumn = (cases: typeof casesData) => {
    return [...cases, ...cases, ...cases] // 三倍重复确保无缝滚动
  }

  const caseColumns = [
    createInfiniteColumn([casesData[0], casesData[3]]), // 第一列
    createInfiniteColumn([casesData[1], casesData[4]]), // 第二列
    createInfiniteColumn([casesData[2], casesData[5]]), // 第三列
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">成功案例展示</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            精选项目案例，展示我们在各个领域的专业实力和创新能力
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 h-96 overflow-hidden max-w-4xl mx-auto">
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
                        width={200}
                        height={240}
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
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            联系我们咨询
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
          height: 240px;
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
      `}</style>
    </section>
  )
}
