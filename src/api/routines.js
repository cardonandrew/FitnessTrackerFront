import React, { useState, useEffect } from 'react';
import BASEURL from './api';

export async function allRoutines () {
    try {
        const response = await fetch(`${BASEURL}/routines`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Could not retrieve all routines.", error)
    }
}