"use client"
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import kitty from "../../../../public/placeholders/kitty.jpg";
import { faImage, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweetType } from "@/customTypes";
import './TweetInput.css'
import { getSession, useSession } from "next-auth/react";
import {options} from '../../api/auth/[...nextauth]/options'

type Props = {
  closeFun?: Function, 
  user?:{
    name?: string,
    email?: string,
    image?: string
    
  }

};


function TweetInput(props: Props) {
  
  const router = useRouter()
  const startingTweet = {
    "id": 1,
    "text": "",
    "authorHandler":`@${props.user?.name}`,
    "authorID":1,
    "likes":666,
    "views":12345,
    "media":"",
    "name":props?.user?.name || ""
  }
  
  const [formData, setFormData] = useState(startingTweet)
  let handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState:TweetType)=>({
      ...prevState,
      [name]:value,
    }))
  }
  const handleSubmit = async (e:any) =>{
    e.preventDefault()
    const res  = await fetch("/api/Tweets", {
      method: 'POST',
      body: JSON.stringify({formData}), 
      headers: {"content-type":"apllication/json"}
    })

    if (!res.ok) {
      throw new Error("failed to create a tweet")
    } 
    setFormData(startingTweet)
    if (props.closeFun){
      props.closeFun()
    }
    console.log(formData)
    router.refresh()
    router.push("/home")

  }

  return (
    <div className="tweet-input__wrapper">
      <div className="tweet-input__pfp">
        <Image
          src={kitty}
          width={55}
          height={55}
          alt="pfp"
          className="pfp-mini"
        />
      </div>
      <div className="tweet-input__textarea">
        <textarea
          name="text"
          id="tweet"
          placeholder="What is happening?!"
          spellCheck={true}
          onChange={handleChange}
          required={true}
          value={formData.text}
        ></textarea>
        <div className="tweet-input__controls">
          <div className="tweet-input__buttons">
            <button><FontAwesomeIcon icon={faImage}/></button>
            <button><FontAwesomeIcon icon={faFaceSmile}/></button>
          </div>
          <div className="tweet-input_post-btn">
            <button className="tweet-input__post" onClick={handleSubmit}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
