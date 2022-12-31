import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { getCurrentUser } from "./api/users";
import { Header, Home, Routines, Dashboard, AuthorizeUser, Activities } from "./components";


const App = () => {
    const history = useNavigate();
    const [token, setToken] = useState(window.localStorage.getItem("token") || null);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        if (token) {
            const getCurrentUsername = async () => {
                const user = await getCurrentUser(token)
                setCurrentUser(user.username)
                console.log(username)
            }
            getCurrentUsername();
        }
    }, token);

    useEffect(() => {
        if (token) {
          window.localStorage.setItem("token", token);
        } else {
          window.localStorage.removeItem("token");
        }
      }, [token]);

    const logOut = () => {
        setToken("");
        setCurrentUser(null);
        history.push("/");
    };

    return (
        <div className="main">
            <div className="head">
                <header>Fitness Tracker</header>
                <Header />
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/routines" element={<Routines />} />
                <Route exact path="/account/dash" element={<Dashboard />} />
                <Route exact path="/account/:action" element={<AuthorizeUser />} /> 
                <Route path="/activities/:postID" element={<Activities />} />    
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
