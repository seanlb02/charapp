import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchBranches } from "../Services/branch_services";
import Userchats from './Userchats'; 
import { chatData } from "../Services/chat_services";
import { CheckTokenExpiration } from "../Services/token_services";
import { addFavourite, getUserData } from "../Services/user_services";

export default function Account() {

const router = useRouter();
const chatname = router.query.id 

const [userdata, setUserdata] = useState ([])
const datafeeder = []

const [username, setUsername] = useState()
const [bio, setBio] = useState()

const [chatdata, setChatdata] = useState([])
const [userData, setUserData] = useState([])

const [name, setName] = useState([])

// message input stored here
const [text, setText] = useState()

const upload = function(){
  router.push('/upload')
}

const [isMember, setIsMember] = useState(false);
const [chatMembers, setChatMembers] = useState([])



useEffect(() => {


// get user data service/function

    CheckTokenExpiration();
    getUserData().then((data) => {setUserData(data[0].username)})
    if(router.isReady)
    {chatData(router.query.id).then((data) => {setChatdata(data[0].participants); setName(data[0].chatname)})
    // .then(() => setChatMembers(chatdata[0].participants))
    // .then(() => console.log(chatdata[0].participants))}

    }


    // .then(() => console.log(chatdata[0].participants))
    // .then(() => chatdata.map(el => {setChatMembers(el.participants)}))

        // if (chatdata[0].participants.includes(`$userData}`)) {setIsMember(true)}
    

}, [router.isReady])


const dropdownInput = function() {

  setNewBranch(true)

}
console.log(JSON.stringify(userData))
console.log(chatdata)

// if(chatdata !== undefined) {
//     chatdata.map(el => {setChatMembers([...chatMembers, el.participants])})
// }

// if(chatdata != undefined){
// if (chatdata[0].includes(JSON.stringify(`${userData}`)))
// {

//     console.log("hey it works")
// //      <form className="bg-blue-50">
// //     <input className={styles.input} placeholder="Type a message..."></input>
// //   </form>
// //   :
// //   <></>

// }}

// this is to get array of members in chat...

const renderTextbox = function() {
   chatdata.includes(JSON.stringify(userData)) ? <div>hey</div> : <div>shit</div>
}

// onSubmit:


  return (
    <div className={styles.profileContainer}>
      <section className={styles.header}>



      </section>
      <section className={styles.headerContainer}>
            <div className={styles.infoContainer}>
              {/* <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={70} width={70}/> */}
              <div className={styles.userName}>{name}</div>
              <div className={styles.favouritesButton} onClick={() => addFavourite(chatname )}>Add to Favourites</div>
            </div>
            
            <div className={styles.bioContainer}>
              <div className={styles.bio}>{chatdata.map(member => <div className={styles.memberTags} onClick={() => router.push(`/user/${member}`)}>{member}</div>)}</div>
            </div>
            
      </section>
      
      <section className={styles.branchWindow}>
      </section>
      {chatdata.includes((userData)) ? 
      
            <form className="bg-blue-50">
                <input className={styles.input} placeholder="Type a message..."></input>
            </form> 

            :

            <></>}

    {/* {renderTextbox} */}
   {/* {chatdata[0].participants.includes(userData) ? 
   
      
      :
      <></>
   } */}
      
    </div>
  )
}

const styles = {
  profileContainer: " h-[82vh] w-[100vw] overflow-x-hidden flex flex-col ",
    headerContainer: "h-auto  w-100%  border-b-2 border-slate-200",
    branchWindow: " flex flex-col h-screen w-full align-center justify-center items-center  border-t-2 bg-blue-50",
    treeText: "text-slate-500 mt-12",
    input: " rounded-xl p-2 w-[90vw] m-4 mb-5 py-3 bg-slate-200",
    profilePic: "rounded-full",
    favouritesButton: "w-fit py-1 bg-green-100 px-2 rounded-full text-sm border-1 border-slte-300 cursor-pointer",
    infoContainer: "w-5/5 ml-auto h-contain flex flex-col gap-5 items-left content-center ml-5 mt-0",
    userName: "text-3xl",
    addBranch: "flex items-center gap-1 cursor-pointer my-5 mb-5",
    bioContainer: "w-5/5 mr-auto mx-3 flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l flex gap-3 text-slate-600 italic",
    memberTags: "p-1 px-2 border-2 rounded-full border-slate-200 cursor-pointer",
    editbutton: 'text-s border-2 rounded px-3 py-1 flex w-auto ml-4 mb-4 gap-2',
    editbuttoncontainer: 'flex w-auto',
    disclaimer: "text-xs pl-12 pb-0",
    postForm: "flex flex-col gap-5 w-4/5 bg-yellow-100 rounded-lg p-5 m-5 mx-5",
    postInput: "bg-blue-200 mx-10 align-center rounded-md p-1 px-2 resize-none",
    buttonContainer: "flex ml-auto mr-12",
    postButton: "flex flex-end p-3 w-contain mt-5 bg-green-400 text-white rounded-lg mb-12",
    branchBubble: " break-words text-lg, h-contain py-5 px-5 w-4/5 mx-24 mb-12 bg-white rounded-md border-2",
    branchText: "flex break-words break-all text-md w-contain",
    branchTime: "flex text-right text-sm",
    chatButton: "bg-blue-100 p-2 pb-3 rounded-full my-6 px-5"
}
