import React from 'react'
import Image from 'next/image'
import './Feed.css'
import kitty from '../../../../public/placeholders/kitty.jpg'
import Tweet from '../reusable/Tweet'
import TweetInput from './TweetInput'
type Props = {}

const Feed = (props: Props) => {
  return (
    <div className='feed'>
        <div className="feed__header">
            <h1 className='text-2xl text-white px-2 font-bold'>Home</h1>
        </div>
       <TweetInput/>
        <div className="feed-container">
             <Tweet/>
             <Tweet/>
        </div>
    </div>
  )
}

export default Feed