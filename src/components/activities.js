import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allActivities } from "../api/api";
import { Popup } from "./index"
import { pubRoutinesByActivity } from "../api/activities"

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [pubRoutines, setPubRoutines] = useState([]);
    const [trigger, setTrigger] = useState(false)
    const [actId, setActId] = useState('')
    

    useEffect(() => {
        const getActs = async () => {
            try {
                const activitiesData = await allActivities();
                setActivities(activitiesData);
            } catch (error) {
                throw error;
            }
        };
        getActs();
    }, []);

    const handlePubRoutines = async (actId) => {
        if(actId >= 0){
            setPubRoutines(await pubRoutinesByActivity(actId))
      }
        
    
        
    }

    return (
        <div className="activities">
            <div className="ui cards">
                {activities.map((activity) => {
                    return (
                        <div key={activity.id} className="ui card">
                            <div className="content">
                                <div className="header">{activity.name}</div>
                                <div className="meta">Activity#: {activity.id}</div>
                                <div className="description">{activity.description}</div>
                                <button className="ui button" onClick={() => {handlePubRoutines(activity.id), setTrigger(true)}} >Routines including this workout</button>
                                <Popup trigger={trigger} setTrigger={setTrigger} pubRoutines={pubRoutines}>Routines with this Activity</Popup>
                    
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Activities;
