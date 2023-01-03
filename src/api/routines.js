import React, { useState, useEffect } from 'react';
import BASEURL from './api';

async function allRoutines () {
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

async function newRoutine (rName, rGoal, rPublic, TokenString) {
    try {
        const response = await fetch(`${BASEURL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenString}`
            },
            body: JSON.stringify({
                name: rName,
                goal: rGoal,
                isPublic: rPublic
            })
        })
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Could not create new routine.", error)
    }
}

async function updateRoutine (rId, routineParams) {
    try {
        const response = await fetch(`${BASEURL}/routines/${rId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenString}`
            },
            body: JSON.stringify(routineParams)
        })
        const result = await response.json();
        return result
    } catch (error) {
        console.error("Could not update routine.", error)
    }
}

async function deleteRoutine (rId) {
    try {
        const response = await fetch(`${BASEURL}/routines/${rId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenString}`
            }
        })

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Could not delete routine.", error)
    }
}

async function addActivityToRoutine (rId, actId, actCount, actDur) {
    try {
        const response = await fetch(`${BASEURL}/routines/${rId}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                activityId: actId,
                count: actCount,
                duration: actDur
            })
        })

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Could not add activity to routine.", error)
    }
}


export { allRoutines, newRoutine, updateRoutine, deleteRoutine, addActivityToRoutine };