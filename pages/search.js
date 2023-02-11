import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import FriendsList from '../Components/FriendsList.js'
import Sidenav from '../Components/Sidenav.js'
import UserSearch from '../Components/UserSearch.js'
import Sideslide from '../Components/Sideslide.js'
import Footnav from '../Components/Footnav.js'

export default function profile() {
  return (
    <>
      <div className={styles.pageContainer}>
        <Sideslide/>
      <UserSearch/>
      <Footnav/>
      </div>
    </>
  )
}

const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",

}