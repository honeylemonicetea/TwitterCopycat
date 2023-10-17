import React from 'react'
import './Trend.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Trend = (props: Props) => {
  return (
    <div>
        <div className="trend__top">
            <span>
            1 · News · Trending
            </span>  
            <span>
              <FontAwesomeIcon icon={faEllipsis} className='text-gray-400'/>
            </span>
        </div>
        <h3>Trend Name</h3>
        <p className='trend__qty'>2.57M posts</p>
    </div>
  )
}

export default Trend