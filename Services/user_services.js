
export async function getUserData(){
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch('http://localhost:5000/users/data',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    });
    return res.json();
}

export async function getFollowing() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch('http://localhost:5000/users/following',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    });
    return res.json();
}

export async function getFollowers() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch('http://localhost:5000/users/followers',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    });
    return res.json();
}

export async function followUser(username) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://localhost:5000/users/follow/${username}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    });
    return res.json();
}

export async function checkFollowing(username) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://localhost:5000/users/checkfollowing/${username}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    });
    return res.json();
}

export async function searcher(username) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://localhost:5000/users/search/${username}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    })
    return res.json();

    
}

export async function editBio(bio) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const body = { bio : `${bio}`}
    const res = await fetch(`http://localhost:5000/users/edit`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
        body: JSON.stringify(body)
    })
    return res.json();

}

export async function addFavourite(chatname) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://localhost:5000/users/favourite/new/${chatname}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
    })
    return res.json();
}

export async function getFavourites() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch(`http://localhost:5000/users/favourites/get/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
    })
    return res.json();
}