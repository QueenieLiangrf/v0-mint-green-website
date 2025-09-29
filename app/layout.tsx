import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "至索科技 | Ultimate Exploration - 软件定制开发与AI智能体服务",
  description:
    "广州至索科技专注软件定制化开发和AI智能体定制化开发，不止于做软件，更懂做业务。提供从需求分析到技术实现的全链条服务。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
