import Head from 'next/head'
import Image from 'next/image'
import Homebody from '../Components/Homebody.js'
import {useState, useEffect} from'react';
import React from 'react';


export default function Branchlist () {

    const [ brancharray, setBranch ] = useState()

// useEffect(() = {

//     // api function to see if user is VIP, set state to true if true - for conditional rendering  
//     // api function to get logged in user following list


// }, [])


return (
    <div className={styles.pageContainer}>
        <div className={styles.listItem}>
            hey
        </div>

    </div>
)
}

const styles = {
    pageContainer: 'h-screen w-[100vw] overflow-x-hidden flex flex-col',
    listItem: "h-[10vh] border-2",
}

