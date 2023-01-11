import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react'




export default function Userthread({username, avatar, link})  {

  const router = useRouter()
  const [userName, setUserName] = useState()
  const [branches, setBranches] = useState([])
  const branchesArray = []

//  add a useEffect after router resolves that takes the username and fetches the users brnacehs


const getUserData = async function() {
  var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://127.0.0.1:8000/branches/${router.query.thread}/`, {
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

const renderBranches = function() {
  if (branches != undefined){
   return branches.map(branch => (<div className={styles.branchText}>{branch.content}</div>))}
   
  else { return <div>[Loading animation]</div>}
  
  }

useEffect(() => {


  if(!router.isReady) return;

setUserName(router.query.thread)
getUserData();
console.log(branchesArray.length)

}, [router.query.thread])

// then use that new state of branches to render a list of divs (bubbles)

  return (
    <div className={styles.pageContainer}>
        <Link className={styles.threadHeader} href={`/user/${router.query.thread}`}>
          <section className={styles.threadHeader}>
            <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={25} width={25}/>
              <div className={styles.usernameTitle}>{router.query.thread}</div>
          </section>
        </Link>
        <section className={styles.branchesContainer}>
          <div className={styles.branchBubble}>
          {renderBranches()}
          <div>{branches.map(branch => <div className={styles.timestamp}>{branch.timestamp}</div>)}</div>
          </div>

        </section>





    </div>
  )
}

const styles = {
 pageContainer: 'h-screen w-[60vw] flex flex-col ',
 threadHeader: "flex gap-10 pl-10 w-full bg-white h-1/6 items-center",
 usernameTitle: "text-2xl",
 profilePic: "rounded-full h-20 w-20",
 branchesContainer: "h-5/6 flex flex-col bg-blue-100 items-center justify-center align-center",
 branchBubble: "bg-white rounded-lg",
 branchText: "px-24 py-10 text-xl",
 timestamp: "text-sm text-slate-400 p-3"
}


