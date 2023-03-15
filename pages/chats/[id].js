import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'

import UserProfile from '../../Components/UserProfile.js'
import FriendsList from '../../Components/FriendsList.js'
import Sidenav from '../../Components/Sidenav.js'

import Chatbody from '../../Components/Chatbody'
import ChatWindow from '../../Components/ChatWindow.js'
import Footnav from '../../Components/Footnav.js'
import Sideslide from '../../Components/Sideslide.js'

export default function Chattree() {


  return (
    <>
      <div className={styles.pageContainer}>
      <Sideslide/>
      <Chatbody/>
      <Footnav/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",
    nav: "fixed bg-red-500s"
}