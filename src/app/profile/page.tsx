
import React from "react";
import "../components/global/Profile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import kitty from "../../../public/placeholders/kitty.jpg";
import Link from "next/link";
import Tweet from "../components/reusable/Tweet";
import { TweetType } from "@/customTypes";
import {dummyTweets} from '../dummy'
type Props = {};

const getTweets = async () => {
  try {
    const res = await fetch("https://gilded-halva-8d31cf.netlify.app/api/Tweets", {
      cache: "no-store",
    });
    console.log("heeeey");
    return res.json();
  } catch (error) {
    console.log("failed to get tweets", error);
  }
};

const page = async (props: Props) => {
  let tweetsArr:TweetType[] = dummyTweets
  try {
    const {tweets} = await getTweets()  //TODO: ENABLE LATER
    tweetsArr = tweets
  }
  catch(err){
    // const tweets = []
  }
  tweetsArr.reverse()
  return (
    <div className="profile">
      <div className="profile__top">
        <Link className="profile__back" href='/'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <div className="profile__top-name">
          <p className="profile__top-name__top">Bella✨🦇🎃</p>
          <p className="profile__top-name__bottom">1,384 tweets</p>
        </div>
      </div>
      <div className="profile__header"></div>
      <div className="profile__bio">
        <div className="profile__bio-top">
          <Image
            src={kitty}
            width={150}
            height={150}
            alt="profile pic"
            className="profile__pic"
          />
          <button className="profile__edit">Edit profile</button>
        </div>
        <div className="profile__bio-container">
          <p className="profile__name">Bella✨🦇🎃</p>
          <p className="profile__handler">@account_handler</p>
          <p className="profile__bio">the user bio goes here</p>
          <p className="profile__reg-date">
            <FontAwesomeIcon icon={faCalendar} /> Joined August 2020
          </p>
          <div className="profile__follows">
            <p className="profile__following">
              16<span>Following</span>{" "}
            </p>
            <p className="profile__followers">
              1<span>Follower</span>{" "}
            </p>
          </div>
        </div>
        <div className="profile__tabs">
          <Link href="/">Posts</Link>
          <Link href="/">Replies</Link>
          <Link href="/">Highlights</Link>
          <Link href="/">Media</Link>
          <Link href="/">Likes</Link>
        </div>
      </div>
      <div className="profile__feed">
      {tweetsArr?tweetsArr.map((tweet:TweetType, _index:number)=><Tweet key={tweet.id} text={tweet.text} id={tweet.id} authorHandler={tweet.authorHandler} authorID={tweet.authorID} likes={tweet.likes} views={tweet.views} media={tweet.media}/>):""}

      </div>
    </div>
  );
};

export default page;
