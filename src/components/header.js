import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [Auth, setAuth] = useState(false);
    const [Token, setToken] = useState("");

    return (
        <div className="ui menu">
            <Link className="item" to="/">
                Home
            </Link>
            <Link className="item" to="/Routines">
                Routines
            </Link>
            {Token ? (
                <Link className="item" to="/Account/Dash">
                    Account
                </Link>
            ) : null}
            {Token ? (
                <Link className="item" to="/" /*onClick={}*/>
                    Log Out
                </Link>
            ) : (
                <Link className="item" to="/Account/Login">
                    Log In
                </Link>
            )}
            {Token ? null : (
                <Link className="item" to="/Account/register">
                    Sign Up
                </Link>
            )}
        </div>
    )
}

export default Header;