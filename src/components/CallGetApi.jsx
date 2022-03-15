import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CallGetApi = () => {
    const [userData, setUserData] = useState([])
    const [newUserData, setnewUserData] = useState([])

    useEffect(() => {
  
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          setUserData(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
  
    }, []);


    
function Submit(id){
   
axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => console.log(res)).catch((err) => console.log(err))
}
    
  return (
    <div>
        <h1>User Data</h1>

        {userData.length > 0 ? (
            userData.map(el => (
                <div style={{background: 'grey', marginBottom: '1em'}}>
                    <h4>User id: {el.id}</h4>
                    <h4>User title: {el.title}</h4>
                    <h4>User body: {el.body}</h4>
                    <button onClick={() => {
                      Submit(el.id)
                    }}>View More</button>
                </div>
            ))
        ) : <h1>Data not found</h1>}
    </div>
  )
}

export default CallGetApi