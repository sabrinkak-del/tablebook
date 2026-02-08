import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Toaster } from "sonner"
import { ChatWidget } from "@/components/chat-widget"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "TableBook - Restaurant Reservations",
  description:
    "Book tables at the best restaurants. Real-time availability, instant confirmation.",
}

export const viewport: Viewport = {
  themeColor: "#a0522d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <ChatWidget />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
