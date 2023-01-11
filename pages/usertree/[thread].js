import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Userthread from '../../Components/Userthread.js'
import FriendsList from '../../Components/FriendsList.js'
import Sidenav from '../../Components/Sidenav.js'

export default function Thread() {

    return (
        <div className={styles.pageContainer}>
           <Sidenav/>
           <Userthread/>
            <FriendsList/>
        </div>
      )


}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
}