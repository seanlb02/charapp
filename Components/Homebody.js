import React, {useState, useEffect} from'react';
import ReactDOM from'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import messages from '../public/messages.svg'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from '../Services/auth_services';



export default function Homebody() {

const router = useRouter();

let [username, setUsername] = useState("")
let [password, setPassword] = useState("")

const [notify, setNotify] = useState();
const [token, setToken] = useState("")

    
async function getToken(e) {
    e.preventDefault();
    Login(username, password)
        .then(res => {if (!res.ok){setNotify("Invalid username or password.")}})
        .then((data) => {
        setToken(data.token)
        })     
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
    <div className={styles.pageContainer}>
        <div className={styles.HeroContainer}>
            <div className={styles.HeroText}>
                <div className={styles.title}>Re-connect with <em>your</em> world</div>
                <div className={styles.text}>Front row seats to the messages and group chats from the people you asked for - <em>24/7</em></div>
                 
            </div>
            <div className={styles.heroImage}>
                <div className={styles.mainImage}><Image src="/Hero container.svg" width={2000} height={500}/></div>
            </div>
            
        </div>
        <div className={styles.aboutTwo}>
                
                <div className={styles.aboutTwoTitle}>
                    <div className={styles.aboutheader}><strong>Say goodbye to the noise</strong></div>
                    [App name] is a way for verified accounts to share with their community without the public rabble <br></br><br></br>. 
                </div>
                <div className={styles.rightImage}>
                <Image src="" width={400} height={100}/>
                </div>
            </div>
            <div className={styles.aboutOne}>
                <div className={styles.aboutOneTitle}>
                <div className={styles.aboutheader}><strong>Say goodbye to getting lost in the Feed</strong></div>
                        EVERY post you make gets distributed to your followers as <strong>branches</strong>
                        <br></br><br></br>No feeds, no reccomendations, no algorithms, no ads
                </div>
                <div className={styles.rightImage}>
                <Image src="" width={400} height={100}/>
                </div>
            
            </div>
            <div className={styles.aboutTwo}>
                
                <div className={styles.aboutTwoTitle}>
                    <div className={styles.aboutheader}><strong>Say goodbye to the noise</strong></div>
                    Branches sent to you by the people you follow are stored in a private messages thread, which means one thing: <br></br><br></br> <em>No more comments section</em>. 
                </div>
                <div className={styles.rightImage}>
                <Image src="" width={400} height={100}/>
                </div>
            </div>
            <div className={styles.aboutThree}>
                <div className={styles.aboutOneTitle}>
                     <div className={styles.aboutheader}><strong>AAA access to conversations that matter</strong></div>
                    Gain access to live chats between verified users you follow. Taking <em>'going live'</em> 24/7...
                    <br></br>
                    
                </div>
                <div className={styles.rightImage}>
                <Image src="" width={400} height={100}/>
                </div>
            </div>    

            <div className={styles.aboutTwo}>
                <div className={styles.aboutTwoTitle}>
                     <div className={styles.aboutheader}><strong>Engagement unimagined</strong></div>
                    [App Name] strives to be bot free. <br></br><br></br>Recieve private reactions, replies and donations from 100% human followers. 
                    <br></br>
                    <br></br>... and an anlytics suite that will make monetizing a breeze

                </div>
                <div className={styles.rightImage}>
                <Image src="" width={400} height={100}/>
                </div>
            </div>  
           
                <header id="login"  className={styles.loginHeader}>Filter your life.
                <br></br>Sign in and get updates from the people you asked for</header>
                <section className={styles.footerHero}>
                
                
                <form onSubmit={getToken} className={styles.form}>
                        <div>{notify}</div>
                        <input type="text" className={styles.input} name="email"  placeholder="Email Address" onChange={evt => setUsername(evt.target.value)}/>
                        <input type="text" className={styles.input} name="password"  placeholder="Password" onChange={evt => setPassword(evt.target.value)}/>
                    
                <div className={styles.formButtons}>
                        <div type="submit" onClick={getToken} className={styles.Button}><button>Log In</button></div>
                        <div className={styles.forgot}><Link  href="/forgotpassword">Forgot your password?</Link></div>
                </div>
                </form>   
               
                <div className={styles.footerImageContainer}>
                <Image src="/HeroImage.svg" width={800} height={800}/>
                </div>
                </section> 
    </div>
    )}

const styles = {
    HeroContainer: 'flex  lg:flex-col lg:min-h-screen mb-10 align-center justify-center',
    HeroText: 'flex flex-col w-[100vw]  lg:mt-0 pr-0 align-center ',
    mainImage: 'flex h-[50vh] w-[100vw]',
    title: 'font-roboto md:pr-0 font-bold xs:text-3xl md:text-4xl md:px-0 xs:pt-12 md:pt-16 md:text-center lg:text-5xl mb-10 lg:pl-4', 
    text: 'text-l md:pr-0 text-center lg:pl-0 mx-96',

    aboutheader: 'text-5xl mb-12',
    aboutOne: 'lg:flex lg:flex-row h-[contain] w-[100vw] items-center bg-blue-300 py-12 text-white sm:flex sm:flex-col',
    aboutOneTitle: 'lg:w-1/2 text-red-600 sm:w-full font-roboto items-center xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10  lg:text-left',
    rightImage: 'flex lg:w-1/2 sm:w-full justify-center sm:min-h-550px sm:min-w-400px',
    aboutTwo: 'lg:flex lg:flex-row-reverse sm:justify-center items-center h-[contain] w-[100vw]  py-12 bg-yellow-200 sm:flex sm:flex-col',
    aboutTwoTitle: 'lg:w-1/2 sm:w-full font-roboto xs:text-2xl md:text-2xl md:px-24 xs:pt-12 md:pt-16 md:text-center lg:text3xl mb-10  lg:text-left ',
    messageFeedImage: 'flex w-1/2 pl-12',
    aboutThree: 'lg:flex lg:flex-row h-[contain] text-yellow-100 w-[100vw] items-center  bg-red-300 py-12 sm:flex sm:flex-col',

    loginHeader: 'text-4xl pl-36 pt-24 w-3/5',
    Button: 'flex bg-[#a09924] rounded-lg p-1 w-1/2 justify-center ml-2 mt-5 px-5 text-white',
    input: 'rounded-lg m-2 p-2 bg-[#f4f4ee] mr-36', 
    form: 'flex flex-col w-1/3 pt-10 mt-10 mr-12 ml-36', 
    loginBox: 'flex w-2/3',
    forgot: 'text-blue-600 text-sm ml-2 mt-6 mb-12 xs:mb-0', 
    formButtons: 'flex flex-col w-2/3 pt-5 mb-36 ', 
    gridImage1: 'absolute h-36 w-36 top-0 left-10 rounded-full bg-angel bg-cover',
    gridImage2: 'absolute h-52 w-52 right-60 top-5 rounded-full bg-overmono',
    gridImage3: 'absolute h-72 w-72 bottom-5 right-54 left-16 rounded-full bg-peggy bg-cover bg-no-repeat',
    gridImage4: 'absolute h-96 w-96 -bottom-28 -right-10 rounded-full bg-dmas bg-contain',
    footerHero: 'flex w-[100vw]',
    footerImageContainer: 'flex w-2/3 overflow-y-hidden',
}