"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBell,
  faEnvelope,
  faRectangleList,
  faBookmark,
  faUserGroup,
  faUser,
  faCirclePlus,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import AddTweetPopUp from "./AddTweetPopUp";
import logo from "../../../../public/icons/Logo_of_Twitter.svg";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { UserType } from "@/customTypes";

type Props = {
  session?:Session|null
};

const Header = (props: Props) => {
  let [popupState, setPopupState] = useState(false)
  let togglePopUp = () =>{
    popupState? setPopupState(false):setPopupState(true)
  }
  return (
    <SessionProvider session={props.session}>
      <nav className="nav-sidebar">
        <div className="nav-sidebar__container">
          <div className="logo">
            <Image src={logo} width={50} height={50} alt="twitter logo" />
          </div>
          <div className="nav-sidebar__inner">
            <div className="nav-sidebar__left">
              <Link className="nav-sidebar__icon" href="/home" title="Home">
                <FontAwesomeIcon className="text-white" icon={faHouse} />
              </Link>
              <Link className="nav-sidebar__icon" href="/home" title="Explore">
                <FontAwesomeIcon
                  className="text-white"
                  icon={faMagnifyingGlass}
                />
              </Link>
              <Link
                className="nav-sidebar__icon"
                href="/home"
                title="Notifications"
              >
                <FontAwesomeIcon className="text-white" icon={faBell} />
              </Link>
              <Link className="nav-sidebar__icon" href="/home" title="Messages">
                <FontAwesomeIcon className="text-white" icon={faEnvelope} />
              </Link>
              <Link className="nav-sidebar__icon" href="/home" title="Lists">
                <FontAwesomeIcon
                  className="text-white"
                  icon={faRectangleList}
                />
              </Link>
              <Link className="nav-sidebar__icon" href="/home" title="Bookmarks">
                <FontAwesomeIcon className="text-white" icon={faBookmark} />
              </Link>
              <Link className="nav-sidebar__icon" href="/home" title="Communities">
                <FontAwesomeIcon className="text-white" icon={faUserGroup} />
              </Link>
              <Link
                className="nav-sidebar__icon"
                href="/profile"
                title="Profile"
              >
                <FontAwesomeIcon className="text-white" icon={faUser} />
              </Link>
              <Link className="nav-sidebar__link" href="/api/auth/signout" title="Log Out">
                <FontAwesomeIcon className="text-white" icon={faRightFromBracket}/>
              </Link>
            </div>
            <div className="nav-sidebar__right">
              <Link className="nav-sidebar__link" href="/">
                Home
              </Link>
              <Link className="nav-sidebar__link" href="/">
                Explore
              </Link>
              <Link className="nav-sidebar__link" href="/">
                Notifications
              </Link>
              <Link className="nav-sidebar__link" href="/">
                Messages
              </Link>
              <Link className="nav-sidebar__link" href="/">
                Lists
              </Link>
              <Link className="nav-sidebar__link" href="/">
                Bookmarks
              </Link>
              <Link className="nav-sidebar__link" href="/">
                Communities
              </Link>
              <Link className="nav-sidebar__link" href="/profile">
                Profile
              </Link>
              <Link className="nav-sidebar__link" href="/api/auth/signout">
                Log Out
              </Link>
            </div>
          </div>
          <button className="post" title="Post" onClick={togglePopUp}>
            <FontAwesomeIcon
              title="Post"
              className="post__icon"
              icon={faCirclePlus}
            />
            <span className="post__btn-text">Post</span>
          </button>
        </div>
      </nav>
      <div className="nav-sidebar__mobile-top">
    
       
        
      </div>
      <div className="nav-sidebar__container_mobile">
        <Link className="nav-sidebar__icon" href="/" title="Home">
          <FontAwesomeIcon className="text-white" icon={faHouse} />
        </Link>
        <Link className="nav-sidebar__icon" href="/" title="Explore">
          <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
        </Link>
        <Link className="nav-sidebar__icon" href="/" title="Notifications">
          <FontAwesomeIcon className="text-white" icon={faBell} />
        </Link>
        <Link className="nav-sidebar__icon" href="/" title="Messages">
          <FontAwesomeIcon className="text-white" icon={faEnvelope} />
        </Link>
      </div>
      {popupState?<AddTweetPopUp user={props.session?.user as UserType} toggleFn = {togglePopUp}/>:""}
    </SessionProvider>
  );
};

export default Header;
