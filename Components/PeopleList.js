import Head from 'next/head'
import Image from 'next/image'
import Homebody from '../Components/Homebody.js'
import {useState, useEffect} from'react';
import React from 'react';
import { useRouter } from 'next/router.js';
import { getFollowing } from '../Services/user_services.js';
import Peopleitem from './Peopleitem.js';


export default function Branchlist () {

    const [ brancharray, setBranch ] = useState()
    const router = useRouter()
    const [followers, setFollowers] = useState([]);

useEffect(() => {

    
getFollowing().then((data) => setFollowers(data))

}, [])


return (
    <>
<div className={styles.listheading}>
                Following
        </div>
    <div className={styles.listContainer}>
        
                {followers.map(obj => obj.following.map(el => {return <Peopleitem username={el.username}/>}))}
                
                

                
        

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

