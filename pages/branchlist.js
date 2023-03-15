
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { useRouter } from 'next/router'
import Sideslide from '../Components/Sideslide.js'
import Account from '../Components/Account.js'
import PeopleList from '../Components/PeopleList.js'
import Footnav from '../Components/Footnav.js'
import DesktopPopup from '../Components/DesktopPopup'
import { CheckTokenExpiration } from '../Services/token_services'




export default function branchlist() {

    const [onMobile, SetonMobile] = useState(true);
    const [screen, Setscreen] = useState("");
  
    useEffect(() => {
      CheckTokenExpiration();
        // window is accessible here.
        console.log(window.innerWidth)
        if (window.innerWidth < 600) {
            SetonMobile(true)
        }
        else{SetonMobile(false)};
        console.log(onMobile)
        
      }, []);
  
        if(typeof window !== "undefined"){
          window.addEventListener("resize", function() {
            if(window.innerWidth > 600){SetonMobile(false)}
            else{SetonMobile(true)}
          });
      }
  
    return (
    
    onMobile == true ?
    <div className={styles.pageContainer}>
        <Sideslide className={styles.slider}/>
        <PeopleList className={styles.branchlist}/>
        <Footnav className={styles.footer}/>
  
    </div>
    : <DesktopPopup/>
    
    )
}

const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",
    slider: "h-[15vh]",
    branchlist: "h-[75vh]",
    footer: "h-[20vh] border-t-2 border-slate-800"
    
}