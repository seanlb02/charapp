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
        <div className={styles.title}>[App Name] is a live <br></br><span id='cycle2'></span> app<br></br> with a <em>difference</em></div>

        </section>
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>Follow friends, influencers and community leaders</div>
            <div className={styles.sectionText}>Content you send on [appname] gets seen by all your followers, all the time.
                
                <em><br></br>No feed, No Algorithms, No hashtags</em>
            </div>
        
        </section>
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>Create chats with select followers</div>
            <div className={styles.sectionText}>With each message: broadcast content, ideas and media to your shared audiences.
             
                <em> <br></br>Discuss, debate, collaborate</em>
            </div>
        
        </section>
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitle}>Engage, question and challenge</div>
            <div className={styles.sectionText}>App name is designed to give your audiences access to ideas and perspectives easily corrupted by public forums.
                
                <em><br></br>No more comments section, no more public rabble </em>
            </div>
        
        </section>

    </div>
    </>
  )
}

const styles = {
    pageContainer: "w-full h-full overflow-x-hidden",
    heroContainer: "flex justify-center items-center text-center text-3xl w-full h-96 bg-yellow-200",
    sectionContainer: "flex flex-col h-[70vh] justify-center items-center  border-b-2",
    sectionTitle: "flex text-3xl items-center mb-12 px-3 text-center",
    sectionText: "flex flex-col text-xl text-center items-center lg:px-52 px-4",
}
