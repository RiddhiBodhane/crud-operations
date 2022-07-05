import React, {useState , useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  //alert({id});
  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    website:"",
  })

  const  onInputChange = (e) => {
    //console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    loadUser()
  },[])

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}` , user);
    history("/"); 
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  }

  return(
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-5">
          <h2 className="text-center mb-4">Edit User</h2>
        
          <form onSubmit={onSubmit}>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={user.name}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={user.username}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={user.email}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group  mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={user.phone}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={user.website}
                onChange={onInputChange}
              />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default EditUser;