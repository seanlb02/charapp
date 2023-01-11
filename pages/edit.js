import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Account from '../Components/Account.js'
import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'
import { EditProfile } from '../Components/EditProfile.js'



export default function edit() {

  return (
    <>
      <div className={styles.pageContainer}>
      <Sidenav/>
      <EditProfile/>
      <FriendsList/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
    nav: "fixed bg-red-500s"
}