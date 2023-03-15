import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Account from '../Components/Account.js'
import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'
import Sideslide from '../Components/Sideslide.js'
import Footnav from '../Components/Footnav.js'
import { CheckTokenExpiration } from '../Services/token_services.js'

// export async function getServerSideProps() {
//   var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
//   const res = await fetch('http://localhost:5000/users/data',{
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//           }
//   });
//   const data = await res.json();  

//     return { 
//       props: {
//        userdata : data,
//       }
//     }
    
  
//   }

export default function profile() {


  useEffect(() => {

    CheckTokenExpiration();
  }, [])

  return (

      <div className={styles.pageContainer}>
      <Sideslide className={styles.slider}/>
      <Account/>
      <Footnav/>
      </div>
  
  )
}
 
const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",
    slider: 'h-[15vh]'
}