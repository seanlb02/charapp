export const fetchBranches = async function() {
    var token = (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
      const res = await fetch(`http://127.0.0.1:8000/branches/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
      })
      return res.json()
    }