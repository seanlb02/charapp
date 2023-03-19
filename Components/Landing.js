import React, {useState, useEffect} from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from '../Services/auth_services';
import style from '../styles/Home.module.css'


export default function Landing() {

    const router = useRouter();

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    
    const [notify, setNotify] = useState();
    const [token, setToken] = useState("")
    
        
    async function getToken(e) {
        e.preventDefault();
        Login(username, password)
       
            
            
    };
            
    
    // add user token to localStorage and push them to their profile
    useEffect(() => {
        if(token != ""){
            localStorage.setItem('tokenKey', JSON.stringify(token))
            router.push("/profile")
        }
    }, [token])
    
    // When on the app's homepage, redirect all 'logged in' users with a token to their profile
    useEffect(() => {
        if(localStorage.getItem('tokenKey')){
            router.push("/profile")
        }
    }, [token])
    

    return (
<>
        <div className={styles.titleContainer}>
                <div className={styles.header}>Enter their <span id="cycle"></span></div>
                <header id="login"  className={styles.loginHeader}>
                        Get front row seats to the DMs and group chats of the people you follow
                </header>
        </div>
                <section className={styles.footerHero}>
                
                
                <form onSubmit={getToken} className={styles.form}>
                        <div>{notify}</div>
                        <input type="text" className={styles.input} name="email"  placeholder="Username" onChange={evt => setUsername(evt.target.value)}/>
                        <input type="password" className={styles.input} name="password"  placeholder="Password" onChange={evt => setPassword(evt.target.value)}/>
                    
                <div className={styles.formButtons}>
                        <div type="submit" onClick={getToken} className={styles.Button}><button>Log In</button></div>
                        <div className={styles.forgot}><Link  href="/forgotpassword">Forgot your password?</Link></div>
                </div>
                </form>   
               
                <div className={styles.footerImageContainer}>
                <Image src="/HeroImage.svg" width={2000} height={2000}/>
                </div>
                </section>
</>
    )



}

const styles = {
    titleContainer: "flex flex-col items-center justify-center",
    header: "text-3xl lg:text-4xl font-bold  pt-12 w-full pl-6 px-12 lg:w-1/2 lg:text-center",
    footerHero: 'flex flex-col w-full lg:items-center',
    loginHeader: 'text-xl lg:text-2xl pt-6 w-full pl-6 px-12 lg:w-1/2 lg:text-center',
    Button: 'flex bg-[#a09924] rounded-lg p-1 w-full justify-center mt-5 px-5 text-white',
    input: 'rounded-lg m-2 w-full p-2 bg-[#f4f4ee]', 
    form: 'flex flex-col w-2/2 mx-8 pt-8 mt-10 items-center lg:w-1/3', 
    loginBox: 'flex w-2/3',
    forgot: 'text-blue-600 text-sm ml-2 mt-6 mb-12 xs:mb-0', 
    formButtons: 'flex flex-col w-2/3 pt-5 mb-16 ', 
    footerImageContainer: 'w-full'
}