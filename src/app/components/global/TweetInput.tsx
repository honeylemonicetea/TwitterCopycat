import React from "react";
import Image from "next/image";
import kitty from "../../../../public/placeholders/kitty.jpg";
import { faImage, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TweetInput.css'
type Props = {};

function TweetInput({}: Props) {
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
          name="tweet"
          id="tweet"
          placeholder="What is happening?!"
          spellCheck={true}
        ></textarea>
        <div className="tweet-input__controls">
          <div className="tweet-input__buttons">
            <button><FontAwesomeIcon icon={faImage}/></button>
            <button><FontAwesomeIcon icon={faFaceSmile}/></button>
          </div>
          <div className="tweet-input_post-btn">
            <button className="tweet-input__post">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
