import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";



export default function Footnav() {

const router = useRouter();

    return (
    <div className={styles.footerContainer}>
        <div className={styles.navIcon}>
            <Link clasName={styles.navIcon} href="/branchlist">
                <Image title="Chat tree" src="/peopleicon.png" width={40} height={50} link="/branchlist" />
                
            </Link>
        </div>
        <div className={styles.navIcon} onClick={() => router.push('/favourites')}>
                
                <Image title="Chat tree" src="/chattree.png" width={40} height={40} />
                <div className={styles.iconText}></div>
            
        </div>
        <div className={styles.navIcon}>
            <Link href="/search">
                <Image title="Chat tree" src="/searchnew.png" width={30} height={23} link="/find" />
                <div className={styles.iconText}></div>
            </Link>
        </div>
    </div>
    )


}

const styles ={
    footerContainer: "flex min-h-[8vh] w-[100vw] border-t-2 border-slate-100 align-center items-center justify-center",
    navIcon: "flex py-2 flex-1 flex-col gap-2  content-center justify-center align-center items-center",
    iconText: "text-xs text-center"
}