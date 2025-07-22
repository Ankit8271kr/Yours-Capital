import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToastProvider } from "@/components/toast-provider"
import { QuickActions } from "@/components/quick-actions"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aamukh Capital - Smart Investment for Brighter Future",
  description:
    "Empowering startups built in Bharat for the world. We provide smart investment solutions and comprehensive support for early-stage startups.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <QuickActions />
        </ToastProvider>
      </body>
    </html>
  )
}
