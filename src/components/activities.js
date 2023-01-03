import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allActivities } from "../api/api";
import { Popup, CreateAct } from "./index"
import { pubRoutinesByActivity } from "../api/activities"
import './activities.css' 

const Activities = (props) => {
    const [activities, setActivities] = useState([]);
    const [pubRoutines, setPubRoutines] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [createTrigger, setCreateTrigger] = useState(false);
    const [actId, setActId] = useState('');
    const { user, tokenString } = props
    

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

    // const handleAddAct = async (params) => {

    // }
    
    }

    return (
        <div className="activities">
            <button id="addbutton" className="ui button" onClick={() => {setCreateTrigger(true)}}>Create Activity</button>
            <div className="ui cards">
                {activities.map((activity) => {
                    return (
                        <div key={activity.id} className="ui card">
                            <div className="content">
                                <div className="header">{activity.name}</div>
                                <div className="meta">Activity#: {activity.id}</div>
                                <div className="description">{activity.description}</div>
                                <button className="ui button" onClick={() => {handlePubRoutines(activity.id), setTrigger(true)}} >Routines including this workout</button>
                                <Popup trigger={trigger} setTrigger={setTrigger} pubRoutines={pubRoutines}>Routines with this Activity:</Popup>
                                <CreateAct user={user} createTrigger={createTrigger} setCreateTrigger={setCreateTrigger} tokenString={tokenString}></CreateAct>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Activities;
