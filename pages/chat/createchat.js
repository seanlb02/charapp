

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import FriendsList from '../../Components/FriendsList.js'
import Sidenav from '../../Components/Sidenav.js'
import Settings from '../../Components/Settings.js'
import Createchat from '../../Components/Createchat.js'
import Chatlist from '../../Components/Chatlist.js'
import Sideslide from '../../Components/Sideslide.js'
import Footnav from '../../Components/Footnav.js'

export default function settings() {
  return (
    <div className={styles.pageContainer}>
      <Sideslide/>
       <Createchat/>
      <Footnav/>
     
    </div>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] flex flex-col",
  
}