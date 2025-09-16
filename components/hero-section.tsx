import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, DollarSign, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：一键咨询价值主张 */}
          <div className="space-y-8">
            <div className="bg-primary rounded-3xl p-8 text-center shadow-xl card-hover">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight drop-shadow-lg">一键咨询</h1>

                <div className="text-xl text-white font-medium drop-shadow-md">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>=</span>
                    <span>专属软件</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>+</span>
                    <TrendingUp className="w-5 h-5" />
                    <span>效率暴涨</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>+</span>
                    <DollarSign className="w-5 h-5" />
                    <span>利润稳涨！</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-lg"
                >
                  立即免费咨询
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* 快速统计 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">年经验</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">2h</div>
                <div className="text-sm text-muted-foreground">快速响应</div>
              </div>
              <div className="bg-card rounded-2xl p-4 text-center shadow-md card-hover">
                <div className="text-2xl font-bold text-primary">7×24</div>
                <div className="text-sm text-muted-foreground">技术支持</div>
              </div>
            </div>
          </div>

          {/* 右侧：公司介绍 */}
          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-8 shadow-xl card-hover">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Zap className="mr-2 h-4 w-4" />
                  不止于做软件，更懂做业务
                </div>

                <h2 className="text-3xl font-bold text-card-foreground">
                  软件定制开发与
                  <span className="text-primary">AI智能体</span>
                  服务专家
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  广州至索科技专注于为企业提供前沿、高效且定制化的软件解决方案，
                  从需求深度拆解到技术灵活适配，构建从AI模型训练到智能应用落地的全链条服务能力。
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-xl p-4">
                    <h3 className="font-semibold text-card-foreground mb-2">软件定制开发</h3>
                    <p className="text-sm text-muted-foreground">从业务逻辑出发的深度定制</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <h3 className="font-semibold text-card-foreground mb-2">AI智能体服务</h3>
                    <p className="text-sm text-muted-foreground">AI模型训练到应用落地</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    查看案例
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    了解更多
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
