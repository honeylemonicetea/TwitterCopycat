"use client"

import React, {useRef} from "react";
import TweetInput from "./TweetInput";
import "./AddTweetPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
type Props = {
  toggleFn: Function,
  user?:{
    name?: string,
    email?: string,
    image?: string
    
  }
};

const AddTweetPopUp = (props: Props) => {
    let container = useRef(null)
    let closePopUp = () =>{
        // console.log(container.current)
        props.toggleFn()
    }
  return (
    <div className="popup__container" ref={container}>
      <div className="popup__wrapper">
        <button onClick={closePopUp}>
          <FontAwesomeIcon icon={faX} className="text-white"></FontAwesomeIcon>
        </button>
        {/* passing the closing function as a prop, it's underlined but it works anyway */}
        <TweetInput user={props.user} closeFun = {closePopUp}/>
      </div>
    </div>
  );
};

export default AddTweetPopUp;
