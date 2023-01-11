import React from "react";
import Link from 'next/link'
import Image from "next/image";
import FriendListItem from "./FriendListItem";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';



export default function Chatlist() {



//  1. api fetch logged in userdata 

  const router = useRouter();
  const { user } = router.query;

  const [userdata, setUserdata] = useState([]);
  const [userChats, setUserChats] = useState([]);

  const [chatList, setChatList] = useState([]);


  async function getUserdata() {

    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch('http://127.0.0.1:8000/users/profile/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
      
    })
    .then(res => res.json())
    .then((data =>  data.map(item => setUserdata(item))))
  }

  useEffect(() => {

    getUserdata()

  }, [])

  // fetch the list of chats that the logged in user is a part of 

  async function getChatlist1() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://127.0.0.1:8000/chat/all/${userdata.username}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
      
    })
    .then(res => res.json())
    .then(data => setUserChats(data))

    // .then((data => data.map(item => setUserChats(item))))

  }

  useEffect(() => {

    getChatlist1()

  }, [userdata])

  // go to 'create a chat' page

  const createChat = function(e) {
    e.preventDefault()
    router.push('/chat/createchat')
  }

  function renderUserChats() {
    if (userChats.length > 0 ){
      return userChats.map((object, index) => 
      <div className={styles.chatlistItem}>
        {object.users.map((name, index) => <div>{name}</div>)}
        
      </div>)
      // return userChats.map((object, index) => <div className={styles.chatlistItem} key={index}>{(index ? ',' : '') + object.users}</div>)
    }
    else{ return <div>hey</div>}
  }

  return (
    <div className={styles.panelContainer}>
        <section className={styles.chatHeader}><div>Chatlist</div></section>


        {userdata.is_verified == true ? 
        <section className={styles.startButtonContainer}><button className={styles.startButton} onClick={createChat}>Start a Chat</button></section>
      : <></>}

        <section>
          <div className={styles.listHeader}><strong>Chats you&apos;re in</strong></div>
          
        </section>
        {renderUserChats()}
        <section>
        <div className={styles.listHeader}><strong>Chats you follow</strong></div>
        </section>

        

    </div>
  )
}

const styles = {
    panelContainer: "xlg:block overflow-y-scroll h-[100vh] mb-96 mr-2 w-[25vw] bg-white border-slate-200 border-l-2 static right-0 top-25 xxs:hidden ",
    chatHeader: "flex w-full h-20 text-xl pl-10 items-center border-b-2  align-center",
    startButtonContainer: "flex mt-2 w-full h-20 text-xl content-center justfiy-center items-center align-center",
    startButton: "flex bg-green-500 rounded-xl text-white p-2 border-2 align-center mx-auto",
    listHeader: "text-sm pl-8 py-2 border-t-2 border-b-2",
    chatlistItem: "flex justify-center gap-2 border-4 items-center text-xs h-20",

}