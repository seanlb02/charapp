import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import Sideslide from '../Components/Sideslide.js'
import Footnav from '../Components/Footnav.js'
import { CheckTokenExpiration } from '../Services/token_services.js'
import Favourites from '../Components/Favourites.js'


export default function FavouritesPage() {
    return (
        <div className={styles.pageContainer}>

            <Sideslide className={styles.slider}/>
            <Favourites/>
            <Footnav/>


        </div>



    )
}

const styles = {
    pageContainer: "h-[100vh] flex flex-col w-[100vw] ",
}