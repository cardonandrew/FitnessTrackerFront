import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const {tokenString, user, logOut} = props

    return (
        <div className="ui menu" style={{'marginBottom': '20px'}}>
            <Link className="item" to="/">
                Home
            </Link>
            <Link className="item" to="/routines">
                Routines
            </Link>
            <Link className='item' to="/activities">
                Activities
            </Link>
            {tokenString ? (
                <Link className="item" to="/" onClick={logOut}>
                    Log Out
                </Link>
            ) : (
                <Link className="item" to="/Account/Login">
                    Log In
                </Link>
            )}
            {tokenString ? null : (
                <Link className="item" to="/Account/register">
                    Sign Up
                </Link>
            )}
        </div>
    )
}

export default Header;