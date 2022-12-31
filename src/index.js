import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { getCurrentUser } from "./api/users";
import { Header, Home, Routines, Dashboard, AuthorizeUser, Activities } from "./components";


const App = () => {
    const history = useNavigate();
    const [tokenString, setTokenString] = useState(window.localStorage.getItem("token") || null);
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (tokenString) {
            const getUsername = async () => {
                const data = await getCurrentUser(tokenString)
                setUser(data)
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

    const logOut = () => {
        setTokenString("");
        setCurrentUser(null);
        history.push("/");
    };

    return (
        <div className="main">
            <div className="head">
                <header>Fitness Tracker</header>
                <Header tokenString={tokenString} user={user} />
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/routines" element={<Routines tokenString={tokenString}/>} />
                <Route exact path="/account/dash" element={<Dashboard tokenString={tokenString}/>} />
                <Route exact path="/account/:action" element={<AuthorizeUser setTokenString={setTokenString} tokenString={tokenString} />} /> 
                <Route path="/activities/:postID" element={<Activities tokenString={tokenString}/>} /> 
            </Routes>

            {/* <Footer /> */}
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
