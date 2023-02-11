
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { useRouter } from 'next/router'
import Sideslide from '../Components/Sideslide.js'
import Account from '../Components/Account.js'
import BranchList from '../Components/BranchList.js'
import Footnav from '../Components/Footnav.js'
import Chatlist from '../Components/Chatlist'



export default function branchlist() {
    return (
    
    <div className={styles.pageContainer}>
        <Sideslide className={styles.slider}/>
        <Chatlist className={styles.branchlist}/>
        <Footnav className={styles.footer}/>
  
    </div>
    
    )
}

const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",
    slider: "h-[15vh]",
    branchlist: "h-[75vh]",
    footer: "h-[20vh] border-t-2 border-slate-800"
}