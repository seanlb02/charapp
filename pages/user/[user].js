import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'

import UserProfile from '../../Components/UserProfile.js'
import FriendsList from '../../Components/FriendsList.js'
import Sideslide from '../../Components/Sideslide.js'
import Footnav from '../../Components/Footnav.js'
import { CheckTokenExpiration } from '../../Services/token_services.js'




export default function profile() {

  
  useEffect(() => {

    CheckTokenExpiration();
  }, [])


  return (
    <>
      <div className={styles.pageContainer}>
      <Sideslide/>
      <UserProfile/>
      <Footnav/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",
   
}