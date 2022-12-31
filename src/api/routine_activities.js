import React, { useState, useEffect } from 'react';
import BASEURL from './api';


// delete public.routine_activities based on routine ID
export async function deleteRoutineActivitybyRoutineId (routineId) {
  try {
      const response = await fetch(`${BASEURL}/routineactivities/${routineId}`, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TokenString}`
          }
      })

      const result = await response.json();
      return result;
  } catch (error) {
      console.error("Could not delete routine activity based on routine ID.", error)
  }
}

//be able to update the duration or count of any activity on the routine
export async function updateRoutineActivity (routineActivityId, updateFields) {
  try {
      const response = await fetch(`${BASEURL}/routineActivityId/${routineActivityId, updateFields}`, {
          method: "PATCH",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TokenString}`
          },
          body: JSON.stringify({
              count: updateFields.count,
              duration: updateFields.duration
          })
      })

      const result = await response.json();
      return result;
  } catch (error) {
      console.error("Could not update the duration or count of any activity on the routine.", error)
  }
}


//delete public.routine_activities based on activity ID
export async function deleteRoutineActivitybyActivityId (activityId) {
  try {
      const response = await fetch(`${BASEURL}/routineactivities/${activityId}`, {
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TokenString}`
          }
      })

      const result = await response.json();
      return result;
  } catch (error) {
      console.error("Could not delete routine activity based on activity ID.", error)
  }
}

// get count and duration based on activity ID or routine ID
export async function getCountAndDuration (token) {
  try {
    const response = await fetch(`${BASEURL}/routineactivities/info`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    console.log("ROUTINE ACTIVITY RESP BODY ->", response);
    const { data } = await response.json();
    console.log("ROUTINE ACTIVITY DATA ->", data);
    return data;
  } catch {
    console.log(error);
  }
};