import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import kitty from '../../../../public/placeholders/kitty.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faComment, faHeart, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import './Tweet.css'
type Props = {}

function Tweet(props:{id: number,  text: string, authorHandler: string, authorID: number, likes: number, views: number, media: string, name: string}) {
  return (
    <div className='tweet'>
        <div className="tweet__pfp">
            {/* add a hover and a preview if possible */}
            <Image
                src={kitty}
                width={55}
                height={55}
                alt='pfp'
                className='pfp-mini'
            />
        </div>
        <div className="tweet__container">
            <div className="tweet__tweet-top">
                <Link href='/profile'>{props.name}</Link> 
                <p className="tweet__acc-handler text-gray-500 px-1">
                    {props.authorHandler}
                </p> 
                <p className='text-gray-500'> · 2h</p>
            </div>
            <div className="tweet__tweet-body">
            {props.text}
            </div>
            <div className="tweet__tweet-bottom">
                <button className='text-gray-500' title='reply'>
                    <FontAwesomeIcon icon={faComment}/>
                </button>
                <button className='text-gray-500' title='retweet'>
                    <FontAwesomeIcon icon={faRepeat}/>
                </button>
                <button className='text-gray-500' title='like'>
                    <FontAwesomeIcon icon={faHeart}/>
                </button>
                <button className='text-gray-500' title='view'>
                    <FontAwesomeIcon icon={faChartSimple}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Tweet