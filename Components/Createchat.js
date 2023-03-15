import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import { CheckTokenExpiration } from '../Services/token_services';
import { getFollowing, getUserData } from '../Services/user_services';

import Swal from 'sweetalert2';

import Peopleitem from './Peopleitem';
import { newChat } from '../Services/chat_services';

export default function Createchat() {
    const router = useRouter();

    const [userdata, setUserdata] = useState([]);

    const [name, setName] = useState(null);
    const [users, setUsers] = useState([]);

  
    const [followerNames, setFollowerNames] = useState([]);

    useEffect (() => {

      CheckTokenExpiration();
      setMembers([]);
      getUserData().then((data) => {data.map(obj => setMembers([...members, obj.username]))})
      getFollowing().then((data) => {setFollowerNames(data)})


    },[])

    const [memberOne, setMemberOne] = useState();
    const [memberTwo, setMemberTwo] = useState();
    const [memberThree, setMemberThree] = useState();
    const [memberFour, setMemberFour] = useState(); 
    const [memberFive, setMemberFive] = useState();
    const [members, setMembers] = useState([]);

    const followerArray = []
    const followerNameArray = []

    // this is to render a list of users followees (people they follow) THAT ARE VERIFIED
    const [followers, setFollowers] = useState([]);

const createChat = async function(e) {
  e.preventDefault();
  if (name == null) {
    Swal.fire({
      icon: 'error',
      title: 'You need to provide a chat name',
      text: '',
      button: 'Ok',
      footer: ''
    })
  }
  else {
      await setMembers([...members, `${memberOne}`, `${memberTwo}`, `${memberThree}`, `${memberFour}`, `${memberFive}`])
      newChat(name, members)
      .then(Swal.fire({
        icon: 'success',
        title: 'Chat Created!',
        text: '',
        button: 'Take me to the chat',
        footer: ''
      }))
      .then(() => {window.location=`/chats/${name}`})
}
}

  return (
    <div className={styles.pageContainer}>
      <section className={styles.titleContainer}>Create a chat</section>
      <section className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.header}>Name</div>
          <input type="text" className={styles.input} name="chat name"  placeholder="Name your chat" onChange={evt => setName(evt.target.value)}/>
          <div className={styles.header}>Users  (max. 5)</div>
          <select  className={styles.input} name="chat name"   onChange={evt => setMembers([...members, evt.target.value])}>
          <option className={styles.optionPlaceholder} value="" disabled selected hidden></option>
            {followerNames.map(obj => obj.following.map(el => {return <option>{el.username}</option>}))}
          </select>
          <select  className={styles.input} name="chat name"  onChange={evt => setMembers([...members, evt.target.value])}>
          <option className={styles.optionPlaceholder} value="" disabled selected hidden></option>
            {followerNames.map(obj => obj.following.map(el => {return <option>{el.username}</option>}))}

          </select>
          <select  className={styles.input} name="chat name" onChange={evt => setMembers([...members, evt.target.value])}>
          <option className={styles.optionPlaceholder} value="" disabled selected hidden></option>
            {followerNames.map(obj => obj.following.map(el => {return <option>{el.username}</option>}))}
          </select>
          <select  className={styles.input} name="chat name"  onChange={evt => setMembers([...members, evt.target.value])}>
          <option className={styles.optionPlaceholder} value="" disabled selected hidden></option>
            {followerNames.map(obj => obj.following.map(el => {return <option>{el.username}</option>}))}
          </select>
          <select  className={styles.input} name="chat name"  onChange={evt => setMembers([...members, evt.target.value])}>
          <option className={styles.optionPlaceholder} value="" disabled selected hidden></option>
            {followerNames.map(obj => obj.following.map(el => {return <option>{el.username}</option>}))}
          </select>  

          <button onClick={createChat}>Create</button>

        </form>



      </section>
    </div>
  )
}

const styles = {
    pageContainer: "h-screen w-[100vw] flex flex-col",
    titleContainer: "flex h-24 align-center content-center items-center w-4/5 ml-auto text-3xl mt-2",
    optionPlaceholder: "text-slate-100",
    formContainer: "flex h-full w-full px-8",
    form: "flex flex-col gap-4 w-[80vw]",
    header: "text-xl mb-1 text-slate-500",
    input: "w-full border-2 rounded-lg p-2",
}