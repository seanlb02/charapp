import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getFavourites } from "../Services/user_services";
import Listitem from "./Listitem";



export default function Favourites() {

    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        getFavourites().then((data) => setFavourites(data))
    }, [])

    return (
        <>
        <div  className={styles.listheading}>Favourites</div>
        <div className ={styles.pageContainer}>
            <div className={styles.search}>
               
                {favourites.map(obj => obj.favourites.map(fav => <Listitem className={styles.Item} chatname={fav.chatname} members="Open to view members"/>))}
            </div>
          
        </div> 
        </>
        )
    }
    
    const styles = {
        pageContainer: "h-[80vh] w-[100vw] flex flex-col rounded",
        search: "flex flex-col w-full h-full bg-green-100",
        Item: "bg-white",
        searchInput: "rounded p-2 bg-[#f4f4ef]",
        searchButton: "h-contain px-2",
        inputview: "flex flex-row bg-[#f4f4ef] rounded-lg mx-6",
        listheading: "text-2xl flex justify-center text-center pb-4 border-b-2",
    
    }