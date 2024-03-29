import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SignUp from './page'
const inter = Inter({ subsets: ['latin'] })

// fontawesome


export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let moreNodes: React.ReactNode[] = []
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}  
      </body>
    </html>
  )
}
