import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { getCurrentUser } from "./api/api";
import { Header, Home, Routines, AuthorizeUser, Activities, Footer } from "./components";


const App = () => {
    const history = useNavigate();
    const [tokenString, setTokenString] = useState(window.localStorage.getItem("token") || null);
    const [user, setUser] = useState(null)

    const logOut = () => {
        setTokenString("");
        setUser(null);
        history("/");
    };

    useEffect(() => {
        if (tokenString) {
            const getUsername = async () => {
                const data = await getCurrentUser(tokenString)
                if(data){setUser(data.username)}
                }
            
            getUsername();
        }
    }, [tokenString]);

    useEffect(() => {
        if (tokenString) {
          window.localStorage.setItem("token", tokenString);
        } else {
          window.localStorage.removeItem("token");
        }
      }, [tokenString]);

    return (
        <div className="main">
            <div className="head">
                <header>Fitness Tracker</header>
                <Header tokenString={tokenString} user={user} logOut={logOut}/>
            </div>
            <Routes>
                <Route exact path="/" element={<Home user={user}/>} />
                <Route exact path="/routines" element={<Routines tokenString={tokenString} user={user} />} />
                <Route exact path="/account/:action" element={<AuthorizeUser setTokenString={setTokenString} tokenString={tokenString} user={user}/>} />
                <Route path="/activities" element={<Activities tokenString={tokenString} user={user}/>} />
            </Routes>

            <Footer />
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
