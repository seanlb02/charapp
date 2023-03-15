import React from "react";
import Link from 'next/link'
import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { data } from "autoprefixer";
import DesktopPopup from "./DesktopPopup";
import Chatlist from "./Chatlist";
import { followUser } from "../Services/user_services";
import { checkFollowing } from "../Services/user_services";
import Spinner from "./Spinner";
import { Troubleshoot } from "@mui/icons-material";

export default function UserProfile({name}) {

  const router = useRouter()
  const username = router.query.user

  const followerfetcharray = []
  const followerArray = []
  const [followers, setFollowers] = useState();
  const [loggedinUser, setloggedinUser] = useState();

  const [isFollowing, setIsFollowing] = useState("loading");
  
  const [onMobile, SetonMobile] = useState(true);
  const [screen, Setscreen] = useState("");

  useEffect(() => {
      // window is accessible here.
      console.log(window.innerWidth)
      if (window.innerWidth < 600) {
          SetonMobile(true)
      }
      else{SetonMobile(false)};
      console.log(onMobile)
      
    }, []);

      if(typeof window !== "undefined"){
        window.addEventListener("resize", function() {
          if(window.innerWidth > 600){SetonMobile(false)}
          else{SetonMobile(true)}
        });
    }

  useEffect(() => {
    if (router.isReady){
      checkFollowing(username). then((data) => {setIsFollowing(data.message)})
    };
  },[router.isReady])

  const renderButton = function() {
    if (isFollowing == "loading") {
      return <Spinner/>;
    }
    else if (isFollowing == true) {
      return <></>;
    }
    else if (isFollowing == false) {
      return <div className={styles.followButton} onClick={() => {followUser(router.query.user); setIsFollowing(true)}}>Follow</div>
    }
  }

  const renderChatlist = function() {
    if (isFollowing == "loading") {
      return <Spinner/>;
    }
    else if (isFollowing == true) {
      return <Chatlist/>;
    }
    else if (isFollowing == false) {
      return <div className={styles.followMe}>Follow this user to access their chats</div>;
    }
  }

  return (

    onMobile == true ?
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
          <div className={styles.infoContainer}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={70} width={70}/>
            <div className={styles.userName}>{username}</div>
            {renderButton()}
            {/* {isFollowing ? <div></div> : <div className={styles.followButton} onClick={() => followUser(router.query.user)}>Follow</div>} */}
 
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.bio}>bio here</div>
          </div>
    </section>
    <section className={styles.treePreview}>
      {renderChatlist()}
      {/* {isFollowing ? <Chatlist/> : <div className={styles.followMe}>Follow this user to access their chats</div>} */}
    </section>
    </div>
    : <DesktopPopup/>
  )
}

const styles = {
  profileContainer: "overflow-y-scroll h-screen w-[100vw] flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    treePreview: " flex flex-col h-screen w-full px-5 justify-center align-center items-center border-t-2 ",
    treeText: "text-slate-500",
    profilePic: "rounded-full",
    infoContainer: "w-4/5 ml-5 h-contain flex gap-5 items-center content-center ",
    userName: "text-2xl",
    followingText: "text-black bg-white border-2 border-black ml-2 p-2 px-5 rounded-md",
    HiddenFollowingText: "hidden",
    followButtonDisappear: "hidden",
    followButton: "bg-black text-white p-2 rounded-md px-5",
    bioContainer: "w-4/5 ml-6 flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l",
    followMe: "text-slate-500"


}
