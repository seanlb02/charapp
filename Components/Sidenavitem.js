import React from "react";
import Link from 'next/link'
import Image from "next/image";



export default function Sidenavitem({title, src, link, onClick}) {
  return (
    <>
            <Link href={link}>
              <div className={styles.itemClickable}>
                  <Image className={styles.navIcon} src={src} width={27} height={20}></Image>
                  <div className={styles.navButton}>
                      <div>{title}</div>
                    </div>
              </div>
            </Link>
    </>
  )
}

const styles = {
    navLinkContainer: "mt-16 ",
    itemClickable: "flex  w-4/5 ml-auto gap-2 mb-4 text-xl ",
    navButton: "flex items-left w-full",
    navIcon: "flex mr-auto h-25 w-25"


}

