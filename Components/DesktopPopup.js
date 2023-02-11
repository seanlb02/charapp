import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'



export default function DesktopPopup() {

    return (

        <div className={styles.pageContainer}>
            <div className={styles.popup} >
                <h1 className="text-black">Oops! Thats our bad.</h1>

                <h3>We have yet to make Chat Tree desktop suitable.</h3>
                <h3>Please log back in on a mobile device.</h3>
            </div>
        </div>
    )



}

const styles = {
    pageContainer: "h-[100vh] w-[100vw] bg-yellow-50 flex justify-center items-center align-center",
    popup : "h-[50vh] w-[50vw] rounded-3xl bg-white flex flex-col justify-center align-center items-center"
}