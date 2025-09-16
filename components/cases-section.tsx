"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Clock, DollarSign, Target, Zap } from "lucide-react"

const cases = [
  {
    id: 1,
    type: "CRM开发",
    title: "某跨境电商CRM系统",
    client: "跨境电商企业",
    painPoint: "30万会员分散在Excel+邮件，复购率仅8%",
    solution: "定制CRM+RFM模型+自动化营销，对接Amazon、Shopify API",
    result: "3个月复购率→21%，客服人效提升40%",
    icon: Users,
    metrics: [
      { label: "复购率提升", value: "8% → 21%", icon: TrendingUp },
      { label: "人效提升", value: "40%", icon: Zap },
    ],
  },
  {
    id: 2,
    type: "PaaS开发",
    title: "华东物联网孵化器PaaS平台",
    client: "物联网孵化器",
    painPoint: "20家硬件初创各自建后台，成本高、数据孤岛",
    solution: "交付统一PaaS（设备管理+OTA+计费），多租户隔离，低代码生成应用",
    result: "平均节省60%后台研发费，新功能上线周期从30天→3天",
    icon: Target,
    metrics: [
      { label: "研发费节省", value: "60%", icon: DollarSign },
      { label: "上线周期", value: "30天 → 3天", icon: Clock },
    ],
  },
  {
    id: 3,
    type: "OA开发",
    title: "连锁口腔集团OA系统",
    client: "连锁口腔集团（120家门店）",
    painPoint: "审批流跨院区，纸质签字平均4.5天",
    solution: "自研OA+电子签+移动审批，流程模板可拖拽",
    result: "审批时长→0.8天，年节省纸张费用约35万元",
    icon: Clock,
    metrics: [
      { label: "审批时长", value: "4.5天 → 0.8天", icon: Clock },
      { label: "年节省费用", value: "35万元", icon: DollarSign },
    ],
  },
  {
    id: 4,
    type: "CMS开发",
    title: "省级卫视融媒体CMS",
    client: "省级卫视",
    painPoint: "6频道内容需同步APP/小程序/电视/微博，人工发布易错",
    solution: "CMS统一编辑器+一键分发+权限审核，支持4K视频秒级转码",
    result: "发布效率提升5倍，全年运营人力减少18人",
    icon: Zap,
    metrics: [
      { label: "效率提升", value: "5倍", icon: TrendingUp },
      { label: "人力减少", value: "18人", icon: Users },
    ],
  },
  {
    id: 5,
    type: "EPMS开发",
    title: "新能源电池工厂EPMS",
    client: "新能源电池工厂",
    painPoint: "设备参数、质检、工艺文件分散，追溯慢",
    solution: "EPMS（工程过程管理系统）+PLC实时采集+SPC分析，打通MES与PLM",
    result: "异常追溯时间由4小时→15分钟，客户审核通过率100%",
    icon: Target,
    metrics: [
      { label: "追溯时间", value: "4小时 → 15分钟", icon: Clock },
      { label: "审核通过率", value: "100%", icon: TrendingUp },
    ],
  },
  {
    id: 6,
    type: "ERP开发",
    title: "快消品分销ERP系统",
    client: "快消品区域分销龙头",
    painPoint: "多品牌、多仓、多价格策略，日单量3万+，原系统卡顿",
    solution: "云原生ERP+分布式库存+AI预测补货，秒级结算",
    result: "库存周转天数↓12天，每年减少资金占用约2000万",
    icon: DollarSign,
    metrics: [
      { label: "周转天数减少", value: "12天", icon: Clock },
      { label: "资金节省", value: "2000万", icon: DollarSign },
    ],
  },
  {
    id: 7,
    type: "APP开发",
    title: "大学生技能交换平台",
    client: "教育科技公司",
    painPoint: "原生外包报价高，迭代慢",
    solution: "Flutter混合开发，单代码库输出iOS/Android，后台用Node微服务",
    result: "同时节省40%开发费，双端同步发版，上线2个月注册用户15万",
    icon: Users,
    metrics: [
      { label: "开发费节省", value: "40%", icon: DollarSign },
      { label: "注册用户", value: "15万", icon: Users },
    ],
  },
  {
    id: 8,
    type: "小程序开发",
    title: "社区团购菜到家小程序",
    client: "社区团购平台",
    painPoint: "公众号H5加载慢，转化率低",
    solution: "独立小程序+团长端+供应链中台，支持秒杀+直播+自提",
    result: "页面首屏<1.5秒，下单转化率↑38%，月GMV破800万",
    icon: TrendingUp,
    metrics: [
      { label: "转化率提升", value: "38%", icon: TrendingUp },
      { label: "月GMV", value: "800万", icon: DollarSign },
    ],
  },
  {
    id: 9,
    type: "Web应用开发",
    title: "SaaS电子合同平台",
    client: "法务科技公司",
    painPoint: "高并发签署峰值5万份/小时，传统架构撑不住",
    solution: "Web端React+后端Spring Cloud Alibaba，分布式签章+区块链存证",
    result: "峰值并发提升至10万份/小时，全年SLI达99.98%",
    icon: Zap,
    metrics: [
      { label: "并发提升", value: "5万 → 10万份/小时", icon: TrendingUp },
      { label: "SLI", value: "99.98%", icon: Target },
    ],
  },
  {
    id: 10,
    type: "AI智能体开发",
    title: "市政务热线AI智能体",
    client: "市政府",
    painPoint: "日均来电4万，坐席不足，等待>3分钟",
    solution: "AI语音智能体（语义+声纹+情绪识别），7×24秒级响应，复杂工单自动派给对应部门",
    result: "接通率↑至96%，每年节省人力成本约600人天",
    icon: Target,
    metrics: [
      { label: "接通率", value: "96%", icon: TrendingUp },
      { label: "人力节省", value: "600人天", icon: Users },
    ],
  },
]

const caseTypes = [
  "全部",
  "CRM开发",
  "PaaS开发",
  "OA开发",
  "CMS开发",
  "EPMS开发",
  "ERP开发",
  "APP开发",
  "小程序开发",
  "Web应用开发",
  "AI智能体开发",
]

export default function CasesSection() {
  const [selectedType, setSelectedType] = useState("全部")

  const filteredCases = selectedType === "全部" ? cases : cases.filter((caseItem) => caseItem.type === selectedType)

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">成功案例</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            深耕软件定制开发领域，为各行业客户提供专业解决方案，用实际成效证明我们的专业实力
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {caseTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(type)}
              className="transition-all duration-200"
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => {
            const IconComponent = caseItem.icon
            return (
              <Card
                key={caseItem.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {caseItem.type}
                    </Badge>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 text-balance">{caseItem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">客户：{caseItem.client}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-destructive mb-1">痛点</h4>
                      <p className="text-sm text-muted-foreground text-pretty">{caseItem.painPoint}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-primary mb-1">方案</h4>
                      <p className="text-sm text-muted-foreground text-pretty">{caseItem.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-chart-3 mb-2">成效</h4>
                      <p className="text-sm text-muted-foreground mb-3 text-pretty">{caseItem.result}</p>

                      <div className="grid grid-cols-1 gap-2">
                        {caseItem.metrics.map((metric, index) => {
                          const MetricIcon = metric.icon
                          return (
                            <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                              <MetricIcon className="w-4 h-4 text-primary" />
                              <span className="text-xs text-muted-foreground">{metric.label}:</span>
                              <span className="text-xs font-medium text-foreground">{metric.value}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">想了解更多案例详情或讨论您的项目需求？</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            联系我们咨询
          </Button>
        </div>
      </div>
    </section>
  )
}
