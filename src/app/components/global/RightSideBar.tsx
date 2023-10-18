import React from 'react'
import SearchBar from '../reusable/SearchBar'
import Trend from '../reusable/Trend'
import Link from 'next/link'
import './RightSideBar.css'
type Props = {}

function RightSideBar({}: Props) {
  return (
    <aside className='right-sidebar'>
        <div className="right-sidebar__container">
            <SearchBar/>
            <div className="right-sidebar__trends">
                <h2 className='text-2xl mb-2 font-bold'>Trends</h2>
                <Trend/>
                <Trend/>    
            </div>
            <div className="right-sidebar__footer">
              <Link href=''>Terms of Service</Link>
              <Link href=''>Privacy Policy</Link>
              <Link href=''>Cookie Policy</Link>
              <Link href=''>Accessibility</Link>
              <Link href=''>Ads info</Link>
              <Link href=''>More</Link>
              <p>© 2023 Twitter Corp.</p>
            </div>
        </div>
    </aside>
  )
}

export default RightSideBar