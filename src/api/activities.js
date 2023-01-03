import React, { useState, useEffect } from 'react';
import BASEURL from './api';

async function allActivities () {
    try {
        const response = await fetch(`${BASEURL}/activities`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Could not retrieve Activities.", error)
    }
}
async function newActivity (TokenString, actName, actDesc) {
    try {
        const response = await fetch(`${BASEURL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenString}`
            },
            body: JSON.stringify({
                name: actName,
                description: actDesc
            })
        })
        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Could not create new activity.", error)
    }
}

async function updateActivity (actId, actName, actDesc) {
    try {
        const response = await fetch(`${BASEURL}/activities/${actId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenString}`
            },
            body: JSON.stringify({
                name: actName,
                description: actDesc
            })
        })

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Could not update activity.", error)
    }
}

async function pubRoutinesByActivity (actId) {
    try {
        const response = await fetch(`${BASEURL}/activities/${actId}/routines`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Could not retrieve public routines by activity.", error)
    }
}

export { allActivities, newActivity, updateActivity, pubRoutinesByActivity };