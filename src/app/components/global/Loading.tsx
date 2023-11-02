import './Loading.css'
import Image from 'next/image'
import spinner from '../../../../public/icons/spinner.svg'

export default function Loading() {
    // Or a custom loading skeleton component
    return <div className="loading-screen">
        <Image
         src={spinner}
         width={100}
         height={100}
         alt="f"
         className="loading-circle"
         /> 
      
    </div>
  }