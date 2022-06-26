import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user,setUser]=useState({})
    const {id}=useParams();

   useEffect(()=>{
    const url=`http://localhost:5000/users/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data))
   })

    return (
        <div>
             <h3>Name:{user.name}</h3>
            <h2>This is Update User</h2>
            <p><small>{id}</small></p>
            
        </div>
    );
};

export default UpdateUser;