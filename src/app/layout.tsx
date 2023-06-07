import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'
import { Metadata } from 'next'
import { Inter } from "@next/font/google"
import { Nanum_Gothic } from "@next/font/google"

const inter = Inter({subsets: ["latin"]})
const nanumGothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className={styles.header}>
          <h1 className={nanumGothic.className}>Demo Note App</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
