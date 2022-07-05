import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  }

  const deletUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  }

  return(
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => (
                  <tr>
                    <th scop="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <NavLink className="btn btn-primary me-2" to={`/users/${user.id}`}>View</NavLink>
                      <NavLink className="btn btn-outline-primary me-2" to={`/users/edit/${user.id}`}>Edit</NavLink>
                      <NavLink className="btn btn-danger" to="" onClick={() => deletUser(user.id) }>Delete</NavLink>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home;