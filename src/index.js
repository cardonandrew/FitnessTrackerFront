import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Header, Home, Routines, Dashboard, AuthorizeUser, Activities, Activity } from "./components";


const App = () => {
    const [user, setUser] = useState("");
    const [tokenString, setTokenString] = useState(window.localStorage.getItem("token") || "");

    const history = useNavigate();

    useEffect(() => {
        const user = async () => {
            try {
                
            } catch (error) {
                
            }
        }
        user();
    }, [tokenString])

    useEffect(() => {
        if (tokenString) {
            window.localStorage.setItem("token", tokenString);
        }
    }, [tokenString]);

    const logOut = () => {
        setTokenString("");
        history.push("/");
    }
    return (
        <div className="main">
            <div className="head">
                <header>Fitness Tracker</header>
                <Header user={user} token={tokenString} logout={logOut} />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/routines" element={<Routines />} />
                <Route path="/activities" element={<Activities />} />
                <Route exact path="/activities/:activityID" element={<Activity />} />
                <Route exact path="/account/dash" element={<Dashboard />} />
                <Route exact path="/account/:action" element={<AuthorizeUser />} />
                
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
