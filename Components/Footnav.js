import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function Footnav() {
    return (
    <div className={styles.footerContainer}>
        <div className={styles.navIcon}>
            <Link clasName={styles.navIcon} href="/branchlist">
                <Image title="Chat tree" src="/branch.png" width={32} height={25} link="/branchlist" />
                <div className={styles.iconText}>Branches</div>
            </Link>
        </div>
        <div className={styles.navIcon}>
            <Link clasName={styles.navIcon} href="/chatlist">
                <Image title="Chat tree" src="/chattree.png" width={32} height={25} link="/chatlist" />
                <div className={styles.iconText}>Chat Tree</div>
            </Link>
        </div>
        <div className={styles.navIcon}>
            <Link href="/search">
                <Image title="Chat tree" src="/searchIcon.png" width={32} height={25} link="/find" />
                <div className={styles.iconText}>Find</div>
            </Link>
        </div>
    </div>
    )


}

const styles ={
    footerContainer: "flex min-h-[10vh] w-[100vw] border-t-2 border-slate-100",
    navIcon: "flex flex-1 flex-col gap-2  content-center justify-center align-center items-center",
    iconText: "text-xs text-center"
}