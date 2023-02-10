import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function Footnav() {
    return (
    <div className={styles.footerContainer}>
        <div className={styles.navIcon}>
            <Image title="Chat tree" src="/branch.png" width={32} height={25} link="/branchlist" />
            <div className={styles.iconText}>Branches</div>
        </div>
        <div className={styles.navIcon}>
            <Image title="Chat tree" src="/chattree.png" width={32} height={25} link="/chatlist" />
            <div className={styles.iconText}>Chat Tree</div>
        </div>
        <div className={styles.navIcon}>
            <Image title="Chat tree" src="/searchIcon.png" width={32} height={25} link="/find" />
            <div className={styles.iconText}>Find</div>
        </div>
    </div>
    )


}

const styles ={
    footerContainer: "flex h-[10vh] w-[100vw]",
    navIcon: "flex flex-1 flex-col justify-center align-center items-center",
    iconText: "text-xs"
}