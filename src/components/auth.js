import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { registerUser } from '../api/users';

const AuthorizeUser = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const { action } = useParams();
    const history = useNavigate();
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        const { newUser } = await registerUser(username, password);
        console.log("newUser", newUser)
        setToken(newUser.token);
        
        
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    };
  
    const title = action === "Login" ? "Log In" : "Sign Up";
  
    return (
      <form className="loginPage" onSubmit={onSubmitHandler}>
        <h1>{title}</h1>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            placeholder="username"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="password"
            minLength="8"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          {title}
        </button>
      </form>
    );
  };


export default AuthorizeUser;