import React from "react";
import Link from 'next/link'
import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { data } from "autoprefixer";

export default function UserProfile({name}) {

  const router = useRouter()
  const username = router.query.user

  const followerfetcharray = []
  const followerArray = []
  const [followers, setFollowers] = useState();
  const [loggedinUser, setloggedinUser] = useState();
  


  return (
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
          <div className={styles.infoContainer}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={70} width={70}/>
            <div className={styles.userName}>{username}</div>
      
 
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.bio}>bio here</div>
          </div>
    </section>
    <section className={styles.treePreview}>
      <div className={styles.treeText}>[Conditionally render branches if username IS IN logged in user's following subdocument]</div>
    </section>
    </div>
  )
}

const styles = {
  profileContainer: "overflow-y-scroll h-screen w-[100vw] flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    treePreview: " flex h-screen w-full px-5 justify-center align-center items-center border-t-2 ",
    treeText: "text-slate-500",
    profilePic: "rounded-full",
    infoContainer: "w-4/5 ml-10 h-contain flex gap-5 items-center content-center ",
    userName: "text-3xl",
    followingText: "text-black bg-white border-2 border-black ml-2 p-2 px-5 rounded-md",
    HiddenFollowingText: "hidden",
    followButtonDisappear: "hidden",
    followButton: "bg-black text-white p-2 rounded-md px-5",
    bioContainer: "w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l"


}
