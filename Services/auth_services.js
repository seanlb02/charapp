import Swal from 'sweetalert2'

export async function Login(username, password) {
    const AuthBody = { usr: `${username}`, pwd: `${password}`}
    const res = await
        fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(AuthBody),
        })
        .then(res => {
            // if fetch response has an error code, issue an alert pop-up
                if (!res.ok){
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Try Again!',
                        text: 'One or more of your inputs was incorrect',
                        footer: ''
                      })
                }
            // otherwise, store the token returned into localStorage
                else {
                    return res.json()
                    .then((data) => {
                        localStorage.setItem('tokenKey', JSON.stringify(data.token))
                    })
                    .then(() => {window.location='/profile'})
                }})
                .catch((error) => {
                    console.error('Error:', error);
                    })
        
}

export async function Logout() {
    
        // 1. delete token from LocalStorage
        localStorage.removeItem("tokenKey")
        // 2.return user to homepage 
        window.location='/'
      
       
    }
