import React, { useState, useEffect } from 'react';
import BASEURL from './api';


// delete public.routine_activities based on routine ID
export async function deleteRoutineActivitybyRoutineId (routineActivityId) {
  try {
      const response = await fetch(`${BASEURL}/routine_activities/${routineActivityId}`, {
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
      const response = await fetch(`${BASEURL}/routine_activities/${routineActivityId}`, {
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
