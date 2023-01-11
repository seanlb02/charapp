import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'

import UserProfile from '../../Components/UserProfile.js'
import FriendsList from '../../Components/FriendsList.js'
import Sidenav from '../../Components/Sidenav.js'

import Chatlist from '../../Components/Chatlist.js'
import ChatWindow from '../../Components/ChatWindow.js'

export default function Chattree() {


  return (
    <>
      <div className={styles.pageContainer}>
      <Sidenav/>
      <ChatWindow/>
      <Chatlist/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
    nav: "fixed bg-red-500s"
}