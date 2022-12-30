import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Header, Home, Routines, Dashboard, AuthorizeUser, Activities } from "./components";

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

    const logOut = () => {
        setTokenString("");
        history.push("/")
    }
    return (
        <div className="main">
            <div className="head">
                <header>Fitness Tracker</header>
                <Header user={user} token={tokenString} />
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
