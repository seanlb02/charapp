
import jwt_decode from "jwt-decode";
import { Logout } from "./auth_services";
import Swal from 'sweetalert2'


// Check if token is expired 

export async function CheckTokenExpiration() {
    // 1. Get token from local storage 
    if(localStorage.getItem("tokenKey") == null) {
      Swal.fire({
        icon: 'error',
        title: 'Please log in!',
        text: 'You need to be logged in to be here',
        footer: '',
        // button: 'Ok'
      });
      window.location = '/';
    }
    const token =  (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
 
    // 2. decode the token to see its expiration
    let decodedToken = jwt_decode(token); 
    let currentDate = new Date();
  
    // check to see if token has expired
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
      await Swal.fire({
        icon: 'warning',
        title: 'Session expired!',
        text: 'Please log in again',
        footer: '',
      
      });
      Logout()
      
      
    } else {
      console.log("Token is valid");   
    }

}