import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../pages/user.css"

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    image: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className=" form container py-4">
      <Link className="btn btn-primary" to="/details">
        Back to Details
      </Link>
      <h1 className="text-center">User Details: </h1>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <div className="d-flex justify-content-center align-item-ceneter">
        <img src={user.image} className="rounded-circle" alt="" height="300px" width="250px"/>
        <div className="mr-2 formView">
          <h2 className="userName">Name: <span>{user.name}</span></h2>
          <h2 className="userName">Username: <span>{user.username}</span></h2>
          <h2 className="userName">Email: <span>{user.email}</span></h2>
          <h2 className="userName">Mobile Number: <span>{user.phone}</span></h2>
        </div>
      </div>
      {/* <div>
      
      </div> */}
      
    </div>
  );
};

export default User;
