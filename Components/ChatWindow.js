import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";

import { useState, useEffect } from "react";



export default function ChatWindow() {



  const router = useRouter()



  return (
    <div className={styles.pageContainer}>
        <section>
          <div>{router.query.id}</div>
        </section>



    </div>
  )
}

const styles = {
    pageContainer: " h-screen w-[60vw] flex flex-col",
}