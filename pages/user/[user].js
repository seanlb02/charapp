import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'

import UserProfile from '../../Components/UserProfile.js'
import FriendsList from '../../Components/FriendsList.js'
import Sideslide from '../../Components/Sideslide.js'
import Footnav from '../../Components/Footnav.js'

// export const getStaticPaths = async () => {

// fetch all users and render html page for each (as route params)
// const res = await fetch('http://127.0.0.1:8000/users/', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//         },
//     });
//     const data = await res.json();

//     const paths = data.map(profile => {
//         return {
//             params: { user: profile.username}
//         }
//     })
// }
// return {
//     paths, 
//     fallback: false 
// }
 
// // feed the page with dynamic props

// export const getStaticProps = async (context:any) => {

//     const user = context.params.user;
//     const res = fetch( )

// }




export default function profile() {


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