import Head from 'next/head'
import Image from 'next/image'
import Homebody from '../Components/Homebody.js'
import {useState, useEffect} from'react';
import React from 'react';
import { useRouter } from 'next/router.js';


export default function Branchlist () {

    const [ brancharray, setBranch ] = useState()
    const router = useRouter()

// useEffect(() = {

//     // api function to see if user is VIP, set state to true if true - for conditional rendering  
//     // api function to get logged in user following list


// }, [])


return (
    <>
<div className={styles.listheading}>
                Following
        </div>
    <div className={styles.listContainer}>
        
                <div className={styles.listItem} onClick={() => router.push(`/user/Debby44`)}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>Debby44</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem} onClick={() => router.push(`/user/Jack123`)}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>Jack123</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem} onClick={() => router.push(`/user/sean69`)}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>sean69</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/>
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>name</div>
                        <div className={styles.preview}>Start/preview of last message...</div>
                    </div>
                </div>

                
        

    </div>
    </>
)
}

const styles = {
    listContainer: 'h-[80vh] w-[100vw] overflow-x-hidden overflow-y-scroll flex flex-col',
    listItem: "flex gap-4 min-h-[10vh] items-center px-4 cursor-pointer",
    listheading: "text-2xl flex justify-center text-center pb-4 border-b-2",
    textcontainer: "flex flex-col w-full",
    name: "text-xl",
    profilePic: "rounded-full",
    preview: "text-sm text-slate-400"
}

