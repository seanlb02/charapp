import React from "react";
import Link from 'next/link'
import Image from "next/image";
import FriendListItem from "./FriendListItem";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Listitem from './Listitem.js'



export default function Chatlist() {

const [is_verified, setIs_verified] = useState(false)

const router = useRouter()
const username = router.query.id

// //  1. api fetch logged in userdata 


  const [userdata, setUserdata] = useState([]);
  const [userChats, setUserChats] = useState([]);

  const [chatList, setChatList] = useState([]);







  return (
    <>
    <div className={styles.panelContainer}>
      

      {is_verified == true ? 
      <div>
    <div className={styles.listHeader}><strong>Chats you&apos;re in</strong></div>
    <section className={styles.startButtonContainer}><button className={styles.startButton} >Start a Chat</button></section>

   <section className={styles.userchatlist}>
                <Link href='/profile'><div onClick={() => router.push('/profile')} className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>Chat name</div>
                        <div className={styles.preview}>List of members in chat</div>
                    </div>
                </div></Link>
   </section>

    </div> 
    : <></>}
       

        {is_verified == false ? <section className={styles.userchatlist}>
        <div className={styles.listHeader}><strong> {username}&apos;s chats you follow</strong></div>
          <Listitem chatname="chat test" members= "john, monty, carl"/>
        </section> : <></>}

        

        

    </div>
    </>
  )
}

const styles = {
    panelContainer: "xlg:block overflow-y-scroll h-[80vh] mr-2 w-[100vw] bg-white border-slate-200 border-l-2 static right-0  ",
    chatHeader: "flex w-full h-20 text-xl pl-10 items-center border-b-2  align-center",
    startButtonContainer: "flex mt-2 w-full h-20 text-lg content-center justfiy-center items-center align-center",
    startButton: "flex bg-green-500 rounded-3xl text-white px-3 py-1 border-2 align-center",
    listHeader: "text-sm pl-8 py-2 border-t-2 border-b-2 bg-blue-100",
    userchatlist: "z-40 h-52 overflow-y-scroll scrollbar-hide",
    chatlistItem: "flex justify-center gap-2 border-b-2 items-center text-xs h-20 cursor-pointer",
    listheading: "text-2xl flex justify-center text-center pb-4 border-b-2",
    textcontainer: "flex flex-col w-full",
    name: "text-xl",
    profilePic: "rounded-full",
    preview: "text-sm text-slate-400",
    listItem: "flex gap-4 min-h-[10vh] items-center px-4 cursor-pointer",


}