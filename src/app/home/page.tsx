import Image from 'next/image'
import Feed from '../components/global/Feed'
import { Suspense } from 'react'
import Loading from '../components/global/Loading'
import { getServerSession } from 'next-auth/next'
import {options} from '../api/auth/[...nextauth]/options'

export default async function Home() {
  let session = await getServerSession(options)
  console.log(session?.user)
  return (
    <Suspense fallback={<Loading/>}>
      <Feed user={session?.user}/>
    </Suspense>
  )
}