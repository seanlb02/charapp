import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";



export default function Listitem({chatname, members}) {

  const  router = useRouter();

    return (
                <div className={styles.listItem} onClick={() => router.push(`/chats/${chatname}`)}>
                    {/* <img className={styles.profilePic} src="https://i.pravatar.cc/300" height={60} width={60}/> */}
                    <div className={styles.textcontainer}>
                        <div className={styles.name}>{chatname}</div>
                        <div className={styles.preview}>{members}</div>
                    </div>
                </div>



    )
}

const styles = {
    listItem: "flex gap-4 min-h-[10vh] items-center px-4 cursor-pointer",
    preview: "flex gap-2 text-slate-600",
    name: "text-xl"

}