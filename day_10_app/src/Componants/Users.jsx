import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './Users.css'


export default function Users() {
    const [users, setUsers] = React.useState([])

    useEffect(() => {
        fetchUsers()
        console.log('user', users);
    },[])

    const fetchUsers = async () => {
        const data = await fetch(`https://reqres.in/api/users/`)
        const usersData = await data.json()
        console.log('usersData', usersData.data);
        setUsers(usersData.data)
    }



    return <div>
        {users.map((item) => {
            return <div key={item.id}>
                <h1>{item.first_name}</h1>
                <Link to={`/users/${item.id}`}>Go to Profile</Link>
            </div>
        })}
    </div>
}