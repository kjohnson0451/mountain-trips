import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.css"
import Header from "@/app/ui/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mountain Trips",
  description: "Go explore the Mountains of the Northeast US and be outdoors!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
