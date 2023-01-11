import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'



export default function Createchat() {
    const router = useRouter();

    const [userdata, setUserdata] = useState([]);

    const [name, setName] = useState([]);
    const [users, setUsers] = useState([]);

    const [followerIDs, setFollowerIDs] = useState('');
    const [followerNames, setFollowerNames] = useState('');

    const followerArray = []
    const followerNameArray = []

    // this is to render a list of users followees (people they follow) THAT ARE VERIFIED
    const [followees, setFollowees] = useState([]);
  
  // this fetches logged in user data 
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

    // this fetches the IDs of who is following logged in user
    const getFollowerIds = function () {

      var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
      fetch('http://127.0.0.1:8000/connections/followedby/', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
      })
      .then(res => res.json())
      // .then((data => console.log(data)))
      .then((data) => {data.map(object => followerArray.push(object.follower_id))})
      .then(console.log(followerArray))
      .then(() => {setFollowerIDs(followerArray)})
      // .then(() => setIsLoaded(true))
      
 
      .catch((error) => {
        console.error('Error:', error)})

}

// this runs first API fetch onMount which sets 'followers' state 
useEffect(() => {
   
  getFollowerIds();

}, [userdata])

// this fetches follower names (if verefied) for dropdown menus 
const getFollowerNames = async function () {
  var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
  const userFriends = [...username]
    await Promise.all(
    followerIDs.map((follower) => 
    fetch(`http://127.0.0.1:8000/users/verified/${follower}/`, 
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
      }
      ).then(res => res.json())
    ))
    .then(data => data.map(users => followerNameArray.push(users.username)))
    .then(() => setFollowerNames(followerNameArray))

    }



  return (
    <div className={styles.pageContainer}>
      <section className={styles.titleContainer}>Create a chat</section>
      <section className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.header}>Name</div>
          <input type="text" className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setName(evt.target.value)}/>
          <div className={styles.header}>Users  (max. 5)</div>
          <select  className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setname(evt.target.value)}>
            <option className={styles.optionPlaceholder}>{userdata.username}</option>
          </select>
          <select  className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setname(evt.target.value)}>
            <option className={styles.optionPlaceholder}></option>
          </select>
          <select  className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setname(evt.target.value)}>
            <option className={styles.optionPlaceholder}></option>
          </select>
          <select  className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setname(evt.target.value)}>
            <option className={styles.optionPlaceholder}></option>
          </select>
          <select  className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setname(evt.target.value)}>
            <option className={styles.optionPlaceholder}></option>
          </select>  

          <button>Create</button>

        </form>



      </section>
    </div>
  )
}

const styles = {
    pageContainer: "h-screen w-[60vw] flex flex-col",
    titleContainer: "flex h-36 align-center content-center items-center w-4/5 ml-auto text-3xl mt-12",
    optionPlaceholder: "text-slate-600",
    formContainer: "flex h-full w-full ml-24",
    form: "flex flex-col gap-4",
    header: "text-xl mb-1 text-slate-600",
    input: "w-96 border-2 rounded-lg p-2",
}