import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import kitty from '../../../../public/placeholders/kitty.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faComment, faHeart, faChartSimple } from '@fortawesome/free-solid-svg-icons';
type Props = {}

function Tweet({}: Props) {
  return (
    <div className='tweet'>
        <div className="tweet__pfp">
            {/* add a hover and a preview if possible */}
            <Image
                src={kitty}
                width={50}
                height={50}
                alt='pfp'
            />
        </div>
        <div className="tweet__container">
            <div className="tweet__tweet-top">
                <Link href='/'>Account Name</Link>
                <p className="tweet__acc-handler">
                    @account_handler
                </p>
                <p>2h</p>
            </div>
            <div className="tweet__tweet-body">
            Enter all monsters let us twist another fairy tale.
            </div>
            <div className="tweet__tweet-bottom">
                <button>
                    <FontAwesomeIcon icon={faComment}/>
                    <FontAwesomeIcon icon={faRepeat}/>
                    <FontAwesomeIcon icon={faHeart}/>
                    <FontAwesomeIcon icon={faChartSimple}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Tweet