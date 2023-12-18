"use client"

import React, {useRef} from "react";
import TweetInput from "./TweetInput";
import "./AddTweetPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {options} from '../../api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth/next";
type Props = {
  toggleFn: Function
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
        <TweetInput closeFun = {closePopUp}/>
      </div>
    </div>
  );
};

export default AddTweetPopUp;
