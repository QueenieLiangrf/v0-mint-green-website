"use client"
import { useState, useEffect } from "react"
import { Search, Lightbulb, Code, TestTube, Headphones, TrendingUp, Play, CheckCircle } from "lucide-react"

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const ProcessIcon = ({ type, isActive }: { type: string; isActive: boolean }) => {
  const iconClasses = `w-10 h-10 transition-all duration-700 ${isActive ? "text-blue-600 scale-110" : "text-blue-500"}`

  switch (type) {
    case "research":
      return <Search className={iconClasses} />
    case "design":
      return <Lightbulb className={iconClasses} />
    case "development":
      return <Code className={iconClasses} />
    case "testing":
      return <TestTube className={iconClasses} />
    case "support":
      return <Headphones className={iconClasses} />
    case "upgrade":
      return <TrendingUp className={iconClasses} />
    default:
      return null
  }
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % processes.length)
      }, 3000) // 每3秒切换一次

      return () => clearInterval(interval)
    }
  }, [isHovered])

  const processes = [
    {
      iconType: "research",
      title: "需求调研",
      description: "深入了解业务流程，识别核心痛点",
      duration: "1-2周",
    },
    {
      iconType: "design",
      title: "方案设计",
      description: "输出详细技术方案和项目计划",
      duration: "1周",
    },
    {
      iconType: "development",
      title: "开发实施",
      description: "敏捷开发，定期交付可用版本",
      duration: "按需",
    },
    {
      iconType: "testing",
      title: "测试上线",
      description: "全面测试，平滑上线部署",
      duration: "按需",
    },
    {
      iconType: "support",
      title: "运维支持",
      description: "7×24小时技术支持和维护",
      duration: "持续",
    },
    {
      iconType: "upgrade",
      title: "迭代升级",
      description: "基于反馈持续优化和功能扩展",
      duration: "按需",
    },
  ]

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(240,249,255,1)] rounded-xl shadow-lg"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-4 -ml-[189px]">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">全流程定制服务</h2>
            </div>
            <div className="flex gap-1">
              <Play className="h-6 w-6 text-primary fill-primary" />
              <Play className="h-5 w-5 text-primary/70 fill-primary/70" />
              <Play className="h-6 w-6 text-primary fill-primary" />
              <Play className="h-5 w-5 text-primary/70 fill-primary/70" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            从0到1，全程可控，让企业无需担心"需求落地偏差"和"进度失控"等问题
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-background/95 backdrop-blur-sm border-0 shadow-2xl">
            <div className="p-8 bg-card">
              <div className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4 relative">
                    {processes.map((process, index) => {
                      const isActive = activeIndex === index
                      const isPrevious = activeIndex > index
                      const isNext = activeIndex < index

                      return (
                        <div key={index} className="flex flex-col items-center relative">
                          {/* 流程步骤卡片 */}
                          <div
                            className={`relative transition-all duration-700 cursor-pointer ${
                              isActive
                                ? "transform scale-110 z-20"
                                : isPrevious
                                  ? "transform scale-95 opacity-70"
                                  : "transform scale-100 opacity-80"
                            }`}
                            onMouseEnter={() => setActiveIndex(index)}
                          >
                            {/* 步骤编号圆圈 */}
                            <div
                              className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 z-30 ${
                                isActive
                                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50 scale-110"
                                  : isPrevious
                                    ? "bg-primary/80 text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {index + 1}
                            </div>

                            <div
                              className={`backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-700 shadow-lg hover:shadow-xl w-full h-64 flex flex-col items-center text-center relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-green-500/10 ${
                                isActive
                                  ? "shadow-2xl shadow-blue-500/30 bg-gradient-to-br from-blue-500/20 to-green-500/15"
                                  : isPrevious
                                    ? "shadow-lg shadow-blue-500/20 bg-gradient-to-br from-blue-500/15 to-green-500/10"
                                    : ""
                              }`}
                            >
                              {/* 背景装饰 */}
                              {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/15 opacity-50"></div>
                              )}

                              <div className="relative z-10 flex flex-col items-center h-full">
                                <div
                                  className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-4 transition-all duration-700 overflow-hidden ${
                                    isActive
                                      ? "bg-gradient-to-br from-blue-500/40 to-green-500/30 scale-110 shadow-blue-500/30"
                                      : isPrevious
                                        ? "bg-gradient-to-br from-blue-500/30 to-green-500/20 scale-105"
                                        : "bg-gradient-to-br from-blue-500/20 to-green-500/10"
                                  }`}
                                >
                                  <ProcessIcon type={process.iconType} isActive={isActive} />
                                </div>

                                {/* 标题 */}
                                <h3
                                  className={`text-lg font-bold mb-3 transition-all duration-500 gradient-text-blue-green ${
                                    isActive ? "scale-105" : ""
                                  }`}
                                >
                                  {process.title}
                                </h3>

                                {/* 描述 */}
                                <p
                                  className={`text-sm leading-relaxed mb-4 flex-1 transition-all duration-500 text-pretty ${
                                    isActive ? "text-gray-600" : isPrevious ? "text-gray-500" : "text-gray-500"
                                  }`}
                                >
                                  {process.description}
                                </p>

                                {/* 耗时 */}
                                <div
                                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ${
                                    isActive
                                      ? "bg-primary/30 border-2 border-primary/50 shadow-md"
                                      : isPrevious
                                        ? "bg-primary/20 border border-primary/30"
                                        : "bg-muted/50 border border-muted"
                                  }`}
                                >
                                  {/* 耗时标签 */}
                                  <span className="text-xs font-medium text-gray-500">耗时:</span>
                                  <span
                                    className={`text-sm font-bold transition-all duration-500 ${
                                      isActive ? "text-blue-600" : isPrevious ? "text-blue-500" : "text-blue-500"
                                    }`}
                                  >
                                    {process.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* 进度指示器 */}
                  <div className="flex justify-center mt-8 gap-2">
                    {processes.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                          activeIndex === index
                            ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                            : activeIndex > index
                              ? "bg-primary/60"
                              : "bg-muted/50"
                        }`}
                        onClick={() => setActiveIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full backdrop-blur-sm">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">全程透明可追溯，确保项目成功交付</span>
          </div>
        </div>
      </div>
    </section>
  )
}
