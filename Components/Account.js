import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";

import { useState, useEffect } from "react";


export default function Account() {

const router = useRouter();

const [NewBranch, setNewBranch] = useState(false)
const [userdata, setUserdata] = useState ([])
const datafeeder = []
const [username, setUsername] = useState()
const [bio, setBio] = useState()
const [city, setCity] = useState()
const [country, setCountry] = useState()

const [branchPost, setBranchPost] = useState()
const [branches, setBranches] = useState([])

async function getAccount() {

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
  .then(() => {fetchBranches()})

  .then(console.log(router.query))


}

const upload = function(){
  router.push('/upload')
}


useEffect(() => {


getAccount()

  
}, [])

useEffect(() => {
  
  if (userdata !== undefined) {
    fetchBranches()
  }
  
}, [userdata])

// useEffect(() => {

//   if (branches !== undefined) {

//     setBranches(branches.reverse())

//   }

// }, [branches])

const dropdownInput = function() {

  setNewBranch(true)

}

const fetchBranches = async function() {
  var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://127.0.0.1:8000/branches/${userdata.username}/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
    })
    .then(res => res.json())
    // .then((data =>  branchesArray.push(data)))
    .then((data) => setBranches(data))

  
  }

const reverseBranchesRender = function() {

  if (branches !== undefined) {
  
    return branches.reverse().map(branch => <div className={styles.branchBubble}>{branch.content}</div>)
  }

}

const postBranch = async function(e) {
  e.preventDefault();
  const token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  const postContent = {content: `${branchPost}`}

    const res = await fetch(`http://127.0.0.1:8000/branches/${userdata.id}/new/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(postContent)
    })
    .then(res => res.json())
    .then(data => console.log("branch posted"))
    .then(() => setNewBranch(false))
    .then(() => fetchBranches())
    .catch((error) => {
      console.error('Error:', error);
      })
}

  return (
    <div className={styles.profileContainer}>
    <section className={styles.headerContainer}>
          <div className={styles.infoContainer}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={100} width={100}/>
            <div className={styles.userName}>{userdata.username}</div>
            <Link href="/edit"><Image src="/editprofile.png" width={50} height={50}></Image></Link>
            
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.Location}>{userdata.city}, {userdata.country}</div>
            <div className={styles.bio}>{userdata.bio}</div>
          </div>
    </section>
    <section className={styles.treePreview}>
      <div className={styles.addBranch} onClick={dropdownInput}>
              <div onClick={upload}><Image src="/addIcon.png" width={50} height={50}></Image></div>
              <div>Add branch...</div>
      </div>
      {NewBranch == true ? 
      
      <form className={styles.postForm}>
       <textarea rows="2" className={styles.postInput} onChange={evt => setBranchPost(evt.target.value)}>
       
       </textarea>
       <div className={styles.buttonContainer}>
       <button className={styles.postButton} onClick={postBranch}>Post branch</button>
       </div>


      </form> : <></>}
    {reverseBranchesRender()}
    </section>
    </div>
  )
}

const styles = {
  profileContainer: " h-screen w-[60vw] flex flex-col ",
    headerContainer: "h-contain  w-100%  border-b-2 border-slate-200",
    treePreview: " flex flex-col h-screen w-full overflow-y-scroll items-center bg-blue-200 border-t-2 ",
    treeText: "text-slate-500 mt-12",
    profilePic: "rounded-full",
    infoContainer: "w-4/5 ml-auto h-contain flex gap-5 items-center content-center mt-12",
    userName: "text-3xl",
    addBranch: "flex items-center gap-1 cursor-pointer my-5 mb-5",
    bioContainer: "w-4/5 ml-auto flex flex-col h-contain py-6 flex gap-2 ",
    Location: "text-l text-slate-600",
    bio: "text-l",
    postForm: "flex flex-col w-full",
    postInput: "bg-blue-100 mx-10 align-center rounded-md p-1 px-2 resize-none",
    buttonContainer: "flex ml-auto mr-12",
    postButton: "flex flex-end p-3 w-contain mt-5 bg-green-400 text-white rounded-lg mb-12",
    branchBubble: "text-lg, h-contain py-5 px-5 w-4/5 mx-24 mb-12 bg-white rounded-md border-2"
}
