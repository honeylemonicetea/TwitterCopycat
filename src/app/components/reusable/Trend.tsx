import React from 'react'
import './Trend.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Trend = (props: Props) => {
  return (
    <div className='trend'>
        <div className="trend__top">
            <span>
            1 · News · Trending
            </span>  
            <span>
              <FontAwesomeIcon icon={faEllipsis} className='text-gray-400'/>
            </span>
        </div>
        <h3 className='text-lg'>Trend Name</h3>
        <p className='trend__qty text-sm'>2.57M posts</p>
    </div>
  )
}

export default Trend