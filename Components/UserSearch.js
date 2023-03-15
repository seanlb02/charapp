import React, {useState, useEffect} from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'
import { useRouter } from 'next/router';
import SearchListItem from './SearchListItem'

import { searcher } from '../Services/user_services';

export default function UserSearch() {

const [user, setUser] = useState("");
const [search, setSearch]  = useState("");
const [invalid, setInvalid] = useState(false)

function searchUser(e) {
    e.preventDefault();
    setUser("")
    setInvalid(false)
    searcher(search)
    .then((res) => {
        if(res.error)
        {setInvalid(true)}
    
        else {
            setUser(res)
        }
    }
    )
    // .then((data) => console.log(data))
}
        

  return (
    <>
    <div  className={styles.listheading}>Find </div>
    <div className ={styles.pageContainer}>
        <div className={styles.search}>
            <form className={styles.inputview}>
                <input type="text" value={search} onChange={(evt) => setSearch(evt.target.value)} className={styles.searchInput} name="Friendsearch" placeholder="Search users..."/>
                <button onClick={searchUser} className={styles.searchButton}><Image alt="search icon" src="/searchIcon.png" width={25} height={25}></Image></button>
            </form>
        </div>
        {user !== "" ? <SearchListItem name={user[0].username} link={`/user/${user[0].username}`}/> : <div></div>}
        {invalid ? <div>No results found, check your spelling.</div> : <></>}
      
    </div> 
    </>
    )
}

const styles = {
    pageContainer: "h-[80vh] w-[100vw] flex flex-col rounded",
    search: "flex justify-center items-center align-center w-full h-20px border p-5 rounded",
    searchInput: "rounded p-2 bg-[#f4f4ef]",
    searchButton: "h-contain px-2",
    inputview: "flex flex-row bg-[#f4f4ef] rounded-lg mx-6",
    listheading: "text-2xl flex justify-center text-center pb-4 border-b-2",

}