"use client"
import { Search, FileText, Code, Rocket, Settings, CheckCircle, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function ProcessSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const processes = [
    {
      icon: Search,
      title: "需求调研",
      description: "深入了解业务流程，识别核心痛点",
      duration: "1-2周",
      time: "第1-2周",
    },
    {
      icon: FileText,
      title: "方案设计",
      description: "输出详细技术方案和项目计划",
      duration: "1周",
      time: "第3周",
    },
    {
      icon: Code,
      title: "开发实施",
      description: "敏捷开发，定期交付可用版本",
      duration: "按需",
      time: "按需",
    },
    {
      icon: Rocket,
      title: "测试上线",
      description: "全面测试，平滑上线部署",
      duration: "按需",
      time: "按需",
    },
    {
      icon: Settings,
      title: "运维支持",
      description: "7×24小时技术支持和维护",
      duration: "持续",
      time: "持续服务",
    },
    {
      icon: CheckCircle,
      title: "迭代升级",
      description: "基于反馈持续优化和功能扩展",
      duration: "按需",
      time: "按需迭代",
    },
  ]

  const extendedProcesses = [...processes, ...processes, ...processes]

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollProgress((prev) => (prev + 0.5) % 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">全流程定制服务</h2>
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

        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-background/95 backdrop-blur-sm border-0 shadow-2xl">
            <div className="flex gap-2 animate-scroll-horizontal hover:pause-animation">
              {extendedProcesses.map((process, index) => (
                <div key={index} className="flex-shrink-0 w-80 p-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      {/* 图标 */}
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shadow-lg mb-4 hover:scale-110 transition-transform duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center shadow-inner">
                          <process.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      {/* 时间标签 */}
                      <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                        {process.time}
                      </div>

                      {/* 标题 */}
                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors duration-300">
                        {process.title}
                      </h3>

                      {/* 描述 */}
                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{process.description}</p>

                      {/* 耗时 */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                        <span className="text-xs font-medium text-muted-foreground">耗时:</span>
                        <span className="text-sm font-semibold text-primary">{process.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-md bg-muted/30 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">全程透明可追溯，确保项目成功交付</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-horizontal {
          animation: scroll-horizontal 20s linear infinite;
        }
        
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
