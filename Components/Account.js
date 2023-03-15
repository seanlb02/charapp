import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchBranches } from "../Services/branch_services";
import Userchats from './Userchats'; 
import { editBio, getUserData } from "../Services/user_services";

import Listitem from "./Listitem";
import { userChats } from "../Services/chat_services";

export default function Account() {

const router = useRouter();


const [userdata, setUserdata] = useState ([])
const [chatdata, setChatdata] = useState([])
const datafeeder = []

const [button, setButton] = useState(false)


const [bio, setBio] = useState()

const [branches, setBranches] = useState([])

// message input stored here
const [text, setText] = useState()

const upload = function(){
  router.push('/upload')
}


useEffect(() => {

  
// get user data service/function
getUserData().then((data) => setUserdata(data))
userChats().then((data) => setChatdata(data));

  
}, [])


const dropdownInput = function() {

  setNewBranch(true)

}

const updateBio = function() {
  setButton(false)
  editBio(bio).then(() => location.reload())
}



  return (
    <div className={styles.profileContainer}>
      <section className={styles.header}>



      </section>


      <section className={styles.headerContainer}>
            <div className={styles.infoContainer}>
              <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={70} width={70}/>
              <div className={styles.userName}>{userdata.map(ob=>ob.username)}</div>
            </div>
            <div className={styles.bioContainer}>
              {button ? <input placeholder="new bio here" onChange={evt => setBio(evt.target.value)} className={styles.editbio}></input>: <div className={styles.bio}>{userdata.map(ob=>ob.bio)}</div>}
            </div>
            <div className={styles.editbuttoncontainer}>
                <div className={styles.editbutton} onClick={() => setButton(true)}><Image src="/editprofile.png" width={20} height={17}></Image>Edit</div>
                {button ? <div className={styles.editbutton} onClick={() => updateBio()}>Save Changes</div> : <></>}
                {button ? <div className={styles.cancelbutton} onClick={() => setButton(false)}>Cancel</div> : <></>}

                
            </div>
      </section>
      
      <section className={styles.branchWindow}>
        <Link href='/chat/createchat'><div className={styles.chatButton}>Start Chat</div></Link>
      </section>
      <section className={styles.windowList}>
      {chatdata.map(obj => <Listitem chatname={obj.chatname} members={obj.participants.map(el=><div>{el}</div>)}/>)}
      </section>
      {/* <form className="bg-blue-50">
        <input className={styles.input} placeholder="Type a message..."></input>
      </form> */}
      
    </div>
  )
}

const styles = {
  profileContainer: " h-[82vh] w-[100vw] overflow-x-hidden flex flex-col ",
    headerContainer: "h-auto  w-100%  border-b-1 border-slate-200",
    branchWindow: "shadow flex flex-col h-auto w-full align-center justify-center items-center border-t-2 ",
    windowList: "overflow-y-scroll scrollbar-none ",
    treeText: "text-slate-500 mt-12",
    editbio: "p-1 rounded-full px-2 text-sm border-2 border-slate-200",
    input: " rounded-xl p-2 w-[90vw] m-4 mb-5 py-3 bg-slate-200",
    profilePic: "rounded-full",
    infoContainer: "w-5/5 ml-auto h-contain flex gap-5 items-center content-center ml-5 mt-0",
    userName: "text-3xl",
    addBranch: "flex items-center gap-1 cursor-pointer my-5 mb-5",
    bioContainer: "w-4/5 mr-auto pl-6 flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l",
    editbutton: 'flex text-sm align-center items-center border-1 bg-green-200 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2',
    cancelbutton: 'flex text-sm align-center items-center border-1 bg-red-300 rounded-full px-3 py-1 flex w-auto ml-4 mb-4 gap-2',

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
