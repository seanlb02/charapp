
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



export default function Branchlist() {
    return (
    
    <div className={styles.pageContainer}>
        <Sideslide className={styles.slider}/>
        <BranchList/>
  
    </div>
    
    )
}

const styles = {
    pageContainer: "h-[100vh] flex w-[100vw] ",
    slider: "h-[15]",
}