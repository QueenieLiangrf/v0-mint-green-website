import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Code, Rocket, Settings, CheckCircle, Play } from "lucide-react"

export function ProcessSection() {
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
      duration: "4-12周",
      time: "第4-16周",
    },
    {
      icon: Rocket,
      title: "测试上线",
      description: "全面测试，平滑上线部署",
      duration: "1-2周",
      time: "第17-18周",
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

        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="relative">
                {/* 时间线主线 */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

                <div className="space-y-8">
                  {processes.map((process, index) => (
                    <div key={index} className="relative flex flex-col group">
                      {/* 时间线节点 */}
                      <div className="relative z-10 flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <div className="w-3 h-3 bg-background rounded-full"></div>
                        </div>

                        <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {process.time}
                        </div>
                      </div>

                      <div className="ml-6 pl-6 border-l border-primary/20 pb-8 last:border-l-0 last:pb-0">
                        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-sm group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shadow-lg transform perspective-1000 group-hover:rotate-y-12 transition-transform duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/20 rounded-xl flex items-center justify-center shadow-inner">
                                  <process.icon className="h-6 w-6 text-primary" />
                                </div>
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {process.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed mb-3">{process.description}</p>
                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full">
                                <span className="text-xs font-medium text-muted-foreground">耗时:</span>
                                <span className="text-sm font-semibold text-primary">{process.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">全程透明可追溯，确保项目成功交付</span>
          </div>
        </div>
      </div>
    </section>
  )
}
