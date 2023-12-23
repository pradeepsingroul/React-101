import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import './Users.css'
import { useSearchParams } from "react-router-dom"


export default function Users() {
    let [searchParams,setSearchParams]= useSearchParams()
    const init = Number(searchParams.get("page")) || 1
    const [users, setUsers] = React.useState([])
    const [page,setPage] = React.useState(init)

    useEffect(() => {
        fetchUsers()
        // console.log('user', users);
        setSearchParams({
            page: page,
        })
    },[page])

    const fetchUsers = async () => {
        const data = await fetch(`https://reqres.in/api/users?page=${page}`)
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
        <button onClick={()=> setPage(page-1)}>PREV</button>
        <h1>{page}</h1>
        <button onClick={()=> setPage(page+1)}>NEXT</button>
    </div>
}