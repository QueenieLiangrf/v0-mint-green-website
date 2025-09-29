import Image from "next/image"

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export function Footer() {
  return (
    <footer id="about" className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* 公司信息 */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="至索科技 Ultimate Exploration Technology"
                width={200}
                height={60}
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-md">
              至索科技专注于软件开发与信息技术服务领域， 致力于为客户提供前沿、高效且定制化的软件解决方案。
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPinIcon className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                广州市天河区
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <PhoneIcon className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                4001037431
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MailIcon className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                contact@ultexplor.tech
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* 服务项目 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">服务项目</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">软件定制开发</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">AI智能体开发</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">系统集成服务</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">移动应用开发</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">技术咨询服务</span>
                </li>
              </ul>
            </div>

            {/* 公司信息改为导航链接 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{"公司信息"}</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">服务项目</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">核心优势</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">服务流程</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">服务行业</span>
                </li>
                <li>
                  <span className="text-xs sm:text-sm text-gray-600">成功案例</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 whitespace-nowrap">© 2025 广州至索科技有限公司. 保留所有权利.</p>
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
            <div className="flex space-x-6">
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
