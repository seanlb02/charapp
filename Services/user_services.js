
export async function getUserData(){
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch('https://chatapi-production.up.railway.app/users/data',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            }
    });
    const data = await res.json();
    return data;
}

export async function getFollowing() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    const res = await fetch('https://chatapi-production.up.railway.app/users/following',{
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
    const res = await fetch('https://chatapi-production.up.railway.app/users/followers',{
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
    const res = await fetch(`https://chatapi-production.up.railway.app/users/follow/${username}`,{
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
    const res = await fetch(`https://chatapi-production.up.railway.app/users/checkfollowing/${username}`,{
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
    const res = await fetch(`https://chatapi-production.up.railway.app/users/search/${username}`,{
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
    const res = await fetch(`https://chatapi-production.up.railway.app/users/edit`,{
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
    const res = await fetch(`https://chatapi-production.up.railway.app/users/favourite/new/${chatname}`,{
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
    const res = await fetch(`https://chatapi-production.up.railway.app/users/favourites/get/`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            },
    })
    return res.json();
}