import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Account from '../Components/Account.js'
import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'
import Sideslide from '../Components/Sideslide.js'


export default function profile() {

  return (

      <div className={styles.pageContainer}>
      <Sideslide className={styles.slider}/>
      <Account/>
      </div>
  
  )
}
 
const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
    slider: 'h-[15vh]'
}