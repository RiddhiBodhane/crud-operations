import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    website:"",
  });
  
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  },[])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  } 

  return(
    <>
      <div className="container py-4">
        <NavLink className="btn btn-primary mt-5" to="/">Back to Home</NavLink>
        <h1 className="display-4">User Id: {id}</h1>
        <hr/>
        <ul className="list-group w-50">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Username: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Website: {user.website}</li>
        </ul>
      </div>
    </>
  )
}

export default User;