import React from "react";
import Link from 'next/link'
import Image from "next/image";
import Sidenavitem from "./Sidenavitem"


export default function Sidenav() {



  return (
    <div className={styles.sideContainer}>
        <section className={styles.navLinkContainer}>
            <div className={styles.logo}>[Logo]</div>
            <Sidenavitem title="Profile" src="/avatar.png" width={27} height={20} link="/profile" />
            <Sidenavitem title="Chat tree" src="/chattree.png" width={28} height={21} link="/chats/id" />
            <Sidenavitem title="Search" src="/personsearch.png" width={27} height={20} link="/search"/>
            <Sidenavitem title="Settings" src="/settingicon.png" width={27} height={20} link="/settings"/>
            <Sidenavitem title="Help" src="/helpicon.png" width={25} height={18} link=""/>
            <div className={styles.spacer}></div>
            {/* log out button */}
            <div className={styles.logoutContainer}>
                <Link href="/" className={styles.itemClickable} onClick={() => localStorage.removeItem("tokenKey")}>
                    <div >Log out</div>
                    <Image className={styles.navIcon} src="/logouticon.png" width={27} height={20}></Image>
                </Link>
            </div>
            
      
        </section>
    </div>
  )
}

const styles = {
    sideContainer: "h-[100vh] w-[18vw] bg-[#f4f4ef] static left-0 top-25",
    navLinkContainer: "flex flex-col  gap-5  h-full",
    spacer: "w-full h-[40vh]",
    logo: "mb-10 w-full text-center",
    itemClickable: "flex w-full justify-center gap-10 px-10 pr-3 text-l items-center",
    navIcon: "flex justify-center  h-25 w-25",
    logoutContainer: "flex bg-white  py-4 pr-5 mt-auto flex-end"

}
