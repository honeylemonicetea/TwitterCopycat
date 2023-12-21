import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/global/Navbar'
const inter = Inter({ subsets: ['latin'] })
// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import RightSideBar from '../components/global/RightSideBar'
import AddTweetPopUp from '../components/global/AddTweetPopUp'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { UserType } from '@/customTypes'
import { SessionProvider, getSession } from 'next-auth/react'
config.autoAddCss = false


export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let moreNodes: React.ReactNode[] = []
  let session = await getServerSession(options)
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="body-wrapper">
        <Navbar session={session}/>
        <div className="children-wrapper">
        {children}
        </div>
        <RightSideBar/>
        </div>
       
        </body>
    </html>
  )
}
