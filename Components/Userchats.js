import React from "react";
import Link from 'next/link'
import Image from "next/image";
import FriendListItem from "./FriendListItem";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Listitem from './Listitem';



export default function Chatlist() {

const [is_verified, setIs_verified] = useState(false)

const router = useRouter();

// //  1. api fetch logged in userdata 

//   const router = useRouter();
//   const { user } = router.query;

//   const [userdata, setUserdata] = useState([]);
//   const [userChats, setUserChats] = useState([]);

//   const [chatList, setChatList] = useState([]);


//   async function getUserdata() {

//     var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
//     const res = await fetch('http://127.0.0.1:8000/users/profile/', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//         },
      
//     })
//     .then(res => res.json())
//     .then((data =>  data.map(item => setUserdata(item))))
//   }

//   useEffect(() => {

//     getUserdata()

//   }, [])

//   // fetch the list of chats that the logged in user is a part of 

//   async function getChatlist1() {
//     var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
//     const res = await fetch(`http://127.0.0.1:8000/chat/all/${userdata.username}`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//         },
      
//     })
//     .then(res => res.json())
//     .then(data => setUserChats(data))

//     // .then((data => data.map(item => setUserChats(item))))

//   }

//   useEffect(() => {

//     getChatlist1()

//   }, [userdata])

//   // go to 'create a chat' page
//   const createChat = function(e) {
//     e.preventDefault()
//     router.push('/chat/createchat')
//   }

//   function renderUserChats() {
//     if (userChats.length > 0 ){
//       return userChats.map((object, index) => 
//       <Link href={`/chats/${object.name}`}>
//         <div className={styles.chatlistItem}>
//           {object.users.map((name, index) => <div>{name}</div>)}
//         </div>
//       </Link>)
//       // return userChats.map((object, index) => <div className={styles.chatlistItem} key={index}>{(index ? ',' : '') + object.users}</div>)
//     }
//     else{ return <div></div>}
//   }

//   function renderChats() {

//     null
//   }

const chatlistRender = function() {
  if(is_verified == true){
    return (
    <div>
    <div className={styles.listHeader}><strong>Chats you&apos;re in</strong></div>
   <section className={styles.userchatlist}>
   </section>

    <section className={styles.startButtonContainer}><button className={styles.startButton} >Start a Chat</button></section>
    </div> 
       )}
  else{<>test</>}
}

  return (
    <>
    <div className={styles.panelContainer}>
      

      {is_verified == true ? 
      <div>
    <div className={styles.listHeader}><strong>Chats you&apos;re in</strong></div>
    <section className={styles.startButtonContainer}><button className={styles.startButton} >Start a Chat</button></section>

   <section className={styles.userchatlist}>
                <div onClick={() => router.push('/profile')} className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>Chat name</div>
                        <div className={styles.preview}>List of members in chat</div>
                    </div>
                </div>
   </section>

    </div> 
    : <></>}
       

        {is_verified == false ? <section className={styles.userchatlist}>
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
    userchatlist: "h-52 overflow-y-scroll scrollbar-hide",
    chatlistItem: "flex justify-center gap-2 border-b-2 items-center text-xs h-20 cursor-pointer",
    listheading: "text-2xl flex justify-center text-center pb-4 border-b-2",
    textcontainer: "flex flex-col w-full",
    name: "text-xl",
    profilePic: "rounded-full",
    preview: "text-sm text-slate-400",
    listItem: "flex gap-4 min-h-[10vh] items-center px-4 cursor-pointer",


}