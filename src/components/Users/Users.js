import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    })


   const handleDeleteUser=id=>{
         const proceed=window.confirm('Are You sure,You Want To delete?')
         if(proceed){
            const url=`http://localhost:5000/users/${id}`    
            fetch(url,{
                method:"DELETE",
            })
           .then(res=>res.json())
           .then(data=>{
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remainingUsers=users.filter(user=>user._id !== id)
                 setUsers(remainingUsers)
            }
           })
         }

   } 
    return (
        <div>
            <h2>This is Users</h2>
            <p>User Available:{users.length}</p>

    <ul>
        {
            users.map(user=><li>
                   {user.name} :: {user.email}
                   <Link to={`/users/update/${user._id}`}> <button>Update</button></Link>
                   <button onClick={()=>handleDeleteUser(user._id)}>X</button>
            </li>)
        }
    </ul>

        </div>
    );
};

export default Users;