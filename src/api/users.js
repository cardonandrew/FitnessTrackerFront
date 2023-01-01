import React, { useState, useEffect } from 'react';
import BASEURL from './api';

export const registerUser = async (username, password, action) => {
    try {
      const response = await fetch(`${BASEURL}/users/${action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
      });

      const data = await response.json();
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

      const data = await response.json();
      return data;
    } catch {
      console.error("Could not retrieve user",error);
    }
  };

  