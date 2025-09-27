import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="至索科技 Ultimate Exploration Technology"
                width={200}
                height={60}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-md">
              至索科技专注于软件开发与信息技术服务领域， 致力于为客户提供前沿、高效且定制化的软件解决方案。
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                广州市天河区
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                4001037431
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                contact@ultexplor.tech
              </div>
            </div>
          </div>

          {/* 服务项目 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">服务项目</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  软件定制开发
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  AI智能体开发
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  系统集成服务
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  移动应用开发
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  技术咨询服务
                </a>
              </li>
            </ul>
          </div>

          {/* 公司信息 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">公司信息</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  成功案例
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  新闻动态
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  招贤纳士
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">© 2025 广州至索科技有限公司. 保留所有权利.</p>
              <p className="text-sm text-gray-500 mt-1">
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  粤ICP备2025475520号-1
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                服务条款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
