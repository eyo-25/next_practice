import Link from 'next/link'
import styles from './layout.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해보세요",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/'>여성옷</Link>
        <Link href='/'>남성옷</Link>
      </nav>
      <section>
        {children}
      </section>
    </>
  )
}
