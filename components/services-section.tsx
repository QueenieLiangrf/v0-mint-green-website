import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Database, Smartphone, Globe, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "软件定制开发",
      description: "基于企业实际业务逻辑的深度定制开发",
      features: ["需求深度拆解", "技术灵活适配", "多端适配支持", "云端/本地部署"],
    },
    {
      icon: Brain,
      title: "AI智能体开发",
      description: "AI模型训练、算法优化到智能应用落地",
      features: ["AI模型训练", "算法优化", "智能应用开发", "业务场景适配"],
    },
    {
      icon: Database,
      title: "系统集成服务",
      description: "企业级系统集成与数据互通解决方案",
      features: ["ERP/CRM对接", "数据同步", "接口开发", "系统整合"],
    },
    {
      icon: Smartphone,
      title: "移动应用开发",
      description: "小程序、APP、H5多端应用开发",
      features: ["微信小程序", "iOS/Android APP", "H5应用", "跨平台开发"],
    },
    {
      icon: Globe,
      title: "Web应用开发",
      description: "现代化Web应用与管理系统开发",
      features: ["响应式设计", "管理后台", "用户系统", "数据可视化"],
    },
    {
      icon: Shield,
      title: "技术咨询服务",
      description: "技术架构设计与数字化转型咨询",
      features: ["架构设计", "技术选型", "性能优化", "安全评估"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">核心服务项目</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            从软件定制开发到AI智能体服务，我们提供全方位的技术解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
