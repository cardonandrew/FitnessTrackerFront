import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";

const App = () => {
    return (
        <div className="container">
            <h1>Fitness Tracker</h1>
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />)
