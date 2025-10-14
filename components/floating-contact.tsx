"use client"

import { useState } from "react"
import { MessageCircle, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 浮动联系按钮 */}
      null

      {/* 联系对话框 */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">联系我们</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p className="text-center text-gray-600 text-sm mb-6">选择以下方式与我们取得联系</p>

            {/* 拨打电话卡片 */}
            <div
              className="p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Phone
                    className="w-6 h-6 text-white"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">拨打电话</h3>
                  <p
                    className="text-white text-lg font-bold"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    400-103-7431
                  </p>
                </div>
              </div>
            </div>

            {/* 在线咨询卡片 */}
            <div
              className="p-6 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <MessageCircle
                    className="w-6 h-6 text-white"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">在线咨询</h3>
                  <p
                    className="text-white text-sm"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                  >
                    点击右侧浮窗联系客服
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
