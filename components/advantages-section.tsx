import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Wrench, Shield, Headphones } from "lucide-react"

export function AdvantagesSection() {
  const advantages = [
    {
      icon: Target,
      title: "需求深度拆解",
      description:
        "深入企业一线业务流程，梳理核心痛点（如数据孤岛、流程冗余、客户管理低效等），输出可视化需求文档，确保软件功能与业务目标100%对齐。",
      highlight: "100%业务对齐",
      number: "100%",
      numberLabel: "业务对齐",
    },
    {
      icon: Wrench,
      title: "技术灵活适配",
      description: '根据企业规模、预算及未来扩展性需求，灵活选择技术栈，既避免"过度技术投入"，也为后续升级预留空间。',
      highlight: "灵活技术选型",
      number: "10+",
      numberLabel: "年技术经验",
    },
    {
      icon: Shield,
      title: "技术硬实力保障",
      description:
        "保障软件运行稳定（故障率低于0.5%）、数据安全（符合等保2.0标准）。",
      highlight: "故障率<0.5%",
      number: "<0.5%",
      numberLabel: "故障率",
    },
    {
      icon: Headphones,
      title: "售后无死角",
      description:
        "上线后提供运维服务，7×24小时技术支持热线+在线工单系统，故障响应不超过2小时，紧急问题4小时内提供解决方案。",
      highlight: "2小时响应",
      number: "2h",
      numberLabel: "故障响应",
    },
  ]

  return (
    <section id="advantages" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">我们的核心优势</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            不同于传统"模块化拼凑"的伪定制，我们坚持从企业实际业务逻辑出发
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">{advantage.title}</CardTitle>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-3xl font-bold text-primary">{advantage.number}</div>
                      <div className="text-sm font-medium text-muted-foreground">{advantage.numberLabel}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
