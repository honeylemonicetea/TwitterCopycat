import React from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import kitty from '../../../public/placeholders/kitty.jpg'
import Link from 'next/link'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='profile'>
        <div className="profile__top">
            <button><FontAwesomeIcon icon={faArrowLeft}/></button>
            <div className="profile__top-name">
               <p className="profile__top-name__top">
               Bella✨🦇🎃
                </p> 
                <p className="profile__top-name__bottom">
                    1, 384 tweets
                </p>
            </div>
        </div>
        <div className="profile__header">

        </div>
        <div className="profile__bio">
            <Image
                src={kitty}
                width={100}
                height={100}
                alt='profile pic'
            />
            <button>Edit profile</button>
            <div className="profile__bio-container">
                <p className="profile__name">Bella✨🦇🎃</p>
                <p className="profile__handler">@account_handler</p>
                <p className="profile__bio">the user's bio goes here</p>
                <p className="profile__reg-date"><FontAwesomeIcon icon={faCalendar}/> Joined August 2020</p>
                <div className="profile__follows">
                    <p className="profile__following"><span>16</span> Following</p>
                    <p className="profile__followers"><span>1</span> Follower</p>
                </div>
            </div>
            <div className="profile__tabs">
                <Link href='/'></Link>
            </div>
        </div>
    </div>
  )
}

export default page