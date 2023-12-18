import React from "react";
import "./Feed.css";
import Tweet from "../reusable/Tweet";
import TweetInput from "./TweetInput";
type Props = {
  user?:{
    name?: string,
    email?: string,
    image?: string
    
  }
};
import { TweetType } from "@/customTypes";
import { dummyTweets } from "@/app/dummy";
import Link from "next/link";
import Image from "next/image";
import kitty from "../../../../public/placeholders/kitty.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

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

const Feed = async (props: Props) => {
  let tweetsArr: TweetType[] = dummyTweets;
  try {
    const { tweets } = await getTweets(); //TODO: ENABLE LATER
    tweetsArr = tweets.filter((e:TweetType)=>e.authorHandler == `@${props.user?.name}`)

  } catch (err) {
    // const tweets = []
  }
  tweetsArr.reverse();
  // console.log(tweets);
  return (
    <div className="feed">
      <div className="feed__header">
        <Link className="feed_pfp_mobile" href="/profile">
          <Image
            src={kitty}
            width={55}
            height={55}
            alt="pfp"
            className="pfp-mini"
          />
        </Link>
        <h1 className="text-2xl text-white px-2 font-bold feed__h1_desk">Home</h1>
        <button className="feed__settings_mobile">
          <FontAwesomeIcon className="text-white" icon={faGear} />
        </button>
      </div>
      <TweetInput user={props.user} />
      <div className="feed-container">
        {tweetsArr
          ? tweetsArr.map((tweet: TweetType, _index: number) => (
              <Tweet
                key={tweet.id}
                text={tweet.text}
                id={tweet.id}
                authorHandler={tweet.authorHandler}
                authorID={tweet.authorID}
                likes={tweet.likes}
                views={tweet.views}
                media={tweet.media}
                name = {tweet.name}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Feed;
