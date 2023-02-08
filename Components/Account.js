import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchBranches } from "../Services/branch_services";


export default function Account() {

const router = useRouter();


const [userdata, setUserdata] = useState ([])
const datafeeder = []

const [username, setUsername] = useState()
const [bio, setBio] = useState()

const [branches, setBranches] = useState([])



const upload = function(){
  router.push('/upload')
}


useEffect(() => {


// get user data service/function

  
}, [])


const dropdownInput = function() {

  setNewBranch(true)

}

// onSubmit:
const postBranch = async function(e) {
  e.preventDefault();
  const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  const postContent = {vip_user: `${userdata.username}`, text: `${text}`, file_url: `${file_url}`, timestamp: new Date() }

    const res = await fetch(`http://127.0.0.1:8000/branches/new/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(postContent)
    })
    .then(res => res.json())
    .then(data => console.log("branch posted"))
    .catch((error) => {
      console.error('Error:', error);
      })
}

  return (
    <div className={styles.profileContainer}>
      <section className={styles.header}>



      </section>


      <section className={styles.headerContainer}>
            <div className={styles.infoContainer}>
              <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={70} width={70}/>
              <div className={styles.userName}>{userdata.username}</div>
            </div>
            <div className={styles.bioContainer}>
              <div className={styles.bio}>{userdata.bio}</div>
            </div>
            <div className={styles.editbuttoncontainer}>
                <Link className={styles.editbutton} href="/edit"><Image src="/editprofile.png" width={22} height={20}></Image>Edit</Link>
            </div>
      </section>
      
      <section className={styles.branchWindow}>
        <div>chats go here</div>
      </section>
    </div>
  )
}

const styles = {
  profileContainer: " h-screen w-[100vw] overflow-x-hidden flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    branchWindow: " flex flex-col h-screen w-full overflow-y-scroll items-center bg-blue-200 border-t-2 ",
    treeText: "text-slate-500 mt-12",
    profilePic: "rounded-full",
    infoContainer: "w-5/5 ml-auto h-contain flex gap-5 items-center content-center ml-5 mt-16",
    userName: "text-3xl",
    addBranch: "flex items-center gap-1 cursor-pointer my-5 mb-5",
    bioContainer: "w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l",
    editbutton: 'text-s border-2 rounded px-3 py-1 flex w-auto ml-4 mb-4 gap-2',
    editbuttoncontainer: 'flex w-auto',
    disclaimer: "text-xs pl-12 pb-0",
    postForm: "flex flex-col gap-5 w-4/5 bg-yellow-100 rounded-lg p-5 m-5 mx-5",
    postInput: "bg-blue-200 mx-10 align-center rounded-md p-1 px-2 resize-none",
    buttonContainer: "flex ml-auto mr-12",
    postButton: "flex flex-end p-3 w-contain mt-5 bg-green-400 text-white rounded-lg mb-12",
    branchBubble: " break-words text-lg, h-contain py-5 px-5 w-4/5 mx-24 mb-12 bg-white rounded-md border-2",
    branchText: "flex break-words break-all text-md w-contain",
    branchTime: "flex text-right text-sm"
}
