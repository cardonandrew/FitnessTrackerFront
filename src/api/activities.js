import React, { useState, useEffect } from 'react';
import BASEURL from './api';

export async function allActivities () {
    try {
        const response = await fetch(`${BASEURL}/activities`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = response.json();
        return result

    } catch (error) {
        console.error("Could not retrieve Activities", error)
    }
}

export async function newActivity (actName, actDesc) {
    
}