

export const newChat = async function(chatname, members) {
const array = members.filter((el) => el != "undefined")
const body = {chatname: `${chatname}`, members: array}
var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))

    const res = await fetch ('http://localhost:5000/chats/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)

    });
    return res.json();

}

export const chatData = async function(chatname) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')));

        const res = await fetch (`http://localhost:5000/chats/chatdata/${chatname}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            
        });
        return res.json();
}

export const userChats = async function() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')));

    const res = await fetch (`http://localhost:5000/chats/userchats`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        
    });
    return res.json();
}

export const theirChats = async function(user) {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')));

    const res = await fetch (`http://localhost:5000/chats/theirchats/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        
    });
    return res.json();
}