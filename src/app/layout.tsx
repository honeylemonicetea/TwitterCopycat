import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/global/Navbar'
const inter = Inter({ subsets: ['latin'] })

// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import RightSideBar from './components/global/RightSideBar'
import AddTweetPopUp from './components/global/AddTweetPopUp'
config.autoAddCss = false


export const metadata: Metadata = {
  title: 'Create Next App',
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
        <div className="body-wrapper">
        <Navbar/>
        <div className="children-wrapper">
        {children}
        </div>
        <RightSideBar/>
        </div>
       
        </body>
    </html>
  )
}
