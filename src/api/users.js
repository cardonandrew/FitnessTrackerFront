import React, { useState, useEffect } from 'react';
import BASEURL from './api';

export const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${BASEURL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          },
        }),
      });
      console.log("RESPONSE->", response);
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("There was an error registering the user", error);
    }
  };

  export const getCurrentUser = async (token) => {
    try {
      const response = await fetch(`${BASEURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      console.log("USER RESP BODY ->", response);
      const { data } = await response.json();
      console.log("USER DATA ->", data);
      return data;
    } catch {
      console.log(error);
    }
  };