import Image from 'next/image'
import Feed from './components/global/Feed'
import { Suspense } from 'react'
import Loading from './components/global/Loading'
export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>
      <Feed/>
    </Suspense>
  )
}
