import React from "react";
import { useParams } from "react-router-dom";
import './SingleUser.css'


export default function SingleUser() {
  const user = useParams()
  const [users,setUsers] = React.useState({})

  console.log('users', users);


  React.useEffect(() => {
    fetchUserById(user.id)
  }, [])

  const fetchUserById = async (id) => {
    var data = await fetch(`https://reqres.in/api/users/${id}`)
    data = await data.json()
    // console.log('data', data.data);
    setUsers(data.data)
  }


  return <div>
    <div className="card">
      <img src={users.avatar} alt={`${users.first_name} ${users.last_name}`} className="card-photo" />
      <div className="card-details">
        <p><strong>ID:</strong> {users.id}</p>
        <p><strong>Email:</strong> {users.email}</p>
        <p><strong>Name:</strong> {users.first_name} {users.last_name}</p>
      </div>
    </div>
  </div>
}