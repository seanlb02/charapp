import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'


import React from 'react'

export default function About() {
  return (
    <>
    <Navbar/>
    
    <div className={styles.pageContainer}>

        <section className={styles.heroContainer}>
        <div className={styles.title}>[App Name] does it different</div>

        </section>
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>No more getting lost in the feed </div>
            <div className={styles.sectionText}>Content you post gets seen by all your friends and followers, all the time.
                <em>No feed, No Algorithms, No hashtags</em>
            </div>
        
        </section>
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>No more getting lost in the feed </div>
            <div className={styles.sectionText}>Content you post gets seen by all your friends and followers, all the time.
                <em>No feed, No Algorithms, No hashtags</em>
            </div>
        
        </section>
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>No more getting lost in the feed </div>
            <div className={styles.sectionText}>Content you post gets seen by all your friends and followers, all the time.
                <em>No feed, No Algorithms, No hashtags</em>
            </div>
        
        </section>

    </div>
    </>
  )
}

const styles = {
    pageContainer: "w-[100vw] h-full ",
    heroContainer: "flex justify-center items-center text-4xl w-[100vw] h-96 bg-blue-500",
    sectionContainer: "flex flex-col h-[90vh] justify-center items-center  border-b-2",
    sectionTitle: "flex text-3xl items-center mb-12",
    sectionText: "flex flex-col text-xl text-center items-center px-52",
}
