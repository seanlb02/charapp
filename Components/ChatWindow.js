import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";

import { useState, useEffect } from "react";



export default function ChatWindow() {
  return (
    <div className={styles.pageContainer}>Users will be able to read live chats between verified users they follow</div>
  )
}

const styles = {
    pageContainer: " h-screen w-[60vw] flex flex-col items-center justify-center",
}