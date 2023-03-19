import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { fetchBranches } from "../Services/branch_services";
import Userchats from './Userchats'; 
import { chatData, getMessages } from "../Services/chat_services";
import { CheckTokenExpiration } from "../Services/token_services";
import { addFavourite, getUserData } from "../Services/user_services";
import Spinner from "./Spinner";
import TextareaAutosize from 'react-textarea-autosize';


import moment from 'moment';
moment().format();

import { io } from 'socket.io-client'

export default function Account() {

const router = useRouter();
const chatname = router.query.id 

const [userdata, setUserdata] = useState ()
const datafeeder = []

const [username, setUsername] = useState()
const [bio, setBio] = useState()

const [chatdata, setChatdata] = useState([])
const [userData, setUserData] = useState()

const [name, setName] = useState([])

const [value, setValue] = useState([])


const upload = function(){
  router.push('/upload')
}

const [isMember, setIsMember] = useState(false);
const [chatMembers, setChatMembers] = useState([])

// message input stored here
const [text, setText] = useState("")

// functionality to open page at bottom of the chat...
const messagesEndRef = useRef(null)
const scrollToBottom = () => {

    if (messagesEndRef.current){
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }



useEffect(() => {


// get user data service/function

    CheckTokenExpiration();
    getUserData().then((data) => {setUserData(data[0].username)})
    if(router.isReady)
    {
        chatData(router.query.id).then((data) => {setChatdata(data[0].participants); setName(data[0].chatname)});
        getMessages(router.query.id).then((data) => {setMessagesArray(data[0].messages)})


    }
    

}, [router.isReady])

const [socket, setSocket] = useState(null);

useEffect(() => {
    // fetch function that gets 'messages' array from chats model... {sender: , content: , timestamp: }


    
    setSocket(io("https://chatapi-production.up.railway.app/"))
    

}, [])

const [messagesArray, setMessagesArray] = useState(""); 

useEffect(() => {
    scrollToBottom()
  }, [messagesArray]);


useEffect(() => {
    if(socket) {
    
    if(chatname){
    socket.emit('join-chat', {chatname});
}}

}, [socket, chatname])

socket ? 
socket.on('returned-message', (message) => {
    setMessagesArray([...messagesArray, message])
}) : null


const [messageEntry, setMessageEntry] = useState({sender: userData, content: text, timestamp: new Date()});
console.log()
// onSubmit:
async function sendMessage(e) {

    e.preventDefault();
    socket.emit('send-message', { messageEntry, chatname} );
    // e.target.reset();
    setMessageEntry("")
    setText(null)
        
};

const textInput = useRef(null) 
const [hidden, setHidden] = useState(styles.hidden);

const buildMessage = function(evt) {
    setMessageEntry({content: evt.target.value, sender: userData, timestamp: new Date()});
    setText(evt.target.value)
}

const clearInput = function() {
   
}

const handleInputChange = function (evt) {
    buildMessage(evt);

}

  return (
    <>
    { userData ?
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
        
        {messagesArray == "" ? <></> : messagesArray.map(obj => <div className={styles.messageContainer}><div className={styles.senderText}>{obj.sender}</div><div className={styles.messageBubble}>{obj.content}</div><div className={styles.timeText}>{moment(obj.timestamp).format('ddd MMM DD hh:mm')}</div></div>)}
        <div id="bottom" ref={messagesEndRef}></div>
      </section>
      {chatdata.includes((userData)) ? 
      
            <form onSubmit={sendMessage}  className="flex align-center items-center justify-center bg-blue-50">
                <TextareaAutosize type="text" value={text} minRows={1} maxRows={4} className={styles.input}  onChange={handleInputChange} placeholder="Type a message..."></TextareaAutosize>
                {text  ? <div onClick={sendMessage} className={styles.sendButton}><Image src='/send.png' height={25} width={25}></Image></div> : null}
            </form> 

            :

            <></>}

      
    </div>
    :
    <div className={styles.loadingContainer}><Spinner/></div>
    }
    </>
  )
}

const styles = {
    hidden: "hidden",
    sendButton: "m-2 ml-0 mr-3 bg-blue-200 p-2 rounded-full pt-2 text-center cursor-pointer",
    loadingContainer: "flex h-[82vh] w-[100vw] overflow-x-hidden flex text-center flex-col bg-green-100 justify-center items-center align-center",
messageContainer: "break-words flex flex-col px-3  w-full mt-2",
senderText: "text-sm ml-2",
timeText: "text-xs text-right mr-3 italic text-slate-400",
messageBubble: "overflow-x-hidden flex w-full self-center text-sm mb-2 mt-2 m-auto rounded-2xl bg-yellow-50 py-3 px-2 break-words text-slate-800",
  profileContainer: "break -words font-web h-[82vh] w-[100vw] overflow-x-hidden flex flex-col ",
    headerContainer: "h-auto  w-100%  border-b-2 border-slate-200",
    branchWindow: " flex flex-col h-screen w-full align-center items-center overflow-y-scroll border-t-2 bg-blue-50",
    treeText: "text-slate-500 mt-12",
    input: " rounded-xl p-2  m-4 mb-5 py-3 bg-slate-200 max-h-24 h-fit flex-grow flex",
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
