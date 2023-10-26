import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";
import './Feed.css'
import kitty from '../../../../public/placeholders/kitty.jpg'
import Tweet from '../reusable/Tweet'
import TweetInput from './TweetInput'
type Props = {}
import tw from './tweets.json'
import { TweetType } from '@/customTypes';

const getTweets = async () =>{
  try{
    const res = await fetch("http://localhost:3000/api/Tweets", {
      cache: "no-store"
    });
    console.log("heeeey")
    return res.json()
  } catch (error){
    console.log("failed to get tweets", error)
  }
}

const Feed = async (props: Props) => {
  const {tweets} = await getTweets()   //TODO: ENABLE LATER
  tweets.reverse()
  console.log(tweets)
  return (
    <div className='feed'>
        <div className="feed__header">
            <h1 className='text-2xl text-white px-2 font-bold'>Home</h1>
        </div>
       <TweetInput/>
        <div className="feed-container">
           {tweets?tweets.map((tweet:TweetType, _index:number)=><Tweet key={tweet.id} text={tweet.text} id={tweet.id} authorHandler={tweet.authorHandler} authorID={tweet.authorID} likes={tweet.likes} views={tweet.views} media={tweet.media}/>):""}
           
        </div>
    </div>
  )
}

export default Feed