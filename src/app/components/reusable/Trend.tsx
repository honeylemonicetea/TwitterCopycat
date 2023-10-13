import React from 'react'

type Props = {}

const Trend = (props: Props) => {
  return (
    <div>
        <div className="trend__top">
            1 · News · Trending
        </div>
        <h3>Trend Name</h3>
        <p className='trend__qty'>2.57M posts</p>
    </div>
  )
}

export default Trend