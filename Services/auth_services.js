

export async function Login(username, password) {
    const AuthBody = { username: `${username}`, password: `${password}`}
    const res = await
        fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(AuthBody),
        })
        return res.json()
        
}