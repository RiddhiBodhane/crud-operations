import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    message:'',
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) =>{
      return{
        ...preVal, 
        [name] : value,
      }
    })
  }

  const formSubmit = (e) =>{
    e.preventDefault()
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}`
    )
  };
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={data.fullname}
                  name="fullname"
                  onChange={InputEvent}
                  placeholder="Enter your Name" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Phone
                </label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={data.phone}
                  name="phone"
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control"
                  value={data.email}
                  name="email"
                  onChange={InputEvent}
                  placeholder="name@example.com" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  rows="3"
                  value={data.message}
                  name="message"
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;