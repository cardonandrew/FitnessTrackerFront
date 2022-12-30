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

export async function newRoutine (rName, rGoal, rPublic) {
    try {
        const response = await fetch(`${BASEURL}/routines`, {
            method: "POST",
            header: {
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

export async function updateRoutine (rId, routineParams) {
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

export async function deleteRoutine (rId) {
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

export async function addActivityToRoutine (rId, actId, actCount, actDur) {
    try {
        const response = await fetch(`${BASEURL}/routines/${rId}/activities`, {
            method: "POST",
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