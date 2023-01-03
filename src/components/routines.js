import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allRoutines } from "../api/api";
import { NewRoutineModal } from "./index";

const Routines = (props) => {
    const { tokenString, user } = props;
    const [routines, setRoutines] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        const getRoutines = async () => {
            try {
                const routinesData = await allRoutines();
                setRoutines(routinesData);
            } catch (error) {
                throw error;
            }
        };
        getRoutines();
    }, []);

    const viewActivityHandler = (obj) => {
        window.localStorage.removeItem("activityname");
        window.localStorage.removeItem("activitydescription");
        window.localStorage.removeItem("activityduration");
        window.localStorage.removeItem("activitycount");
        window.localStorage.setItem("activityname", activity.name);
        window.localStorage.setItem("activitydescription", activity.description);
        window.localStorage.setItem("activityduration", activity.duration);
        window.localStorage.setItem("activitycount", activity.count);

        navigate("/activities/" + obj._id);
    };

    return (
        <div className="routines">
            {user ? (
                <div className="new-routine" >
                    <button className="ui button" onClick={() => setTrigger(true)}>
                        Create a New Routine
                    </button>
                </div>
            ) : null}
            <div className="ui cards">
                {routines.map((routine) => {
                    if (routine.isPublic === true) {
                        return (
                            <fieldset key={routine.id} className="ui card">
                                <div className="content">
                                    <h3 className="header">{routine.name}</h3>
                                    <p className="goal">{routine.goal}</p>
                                    <p className="creator">Author: {routine.creatorName}</p>
                                    {user === routine.creatorName ? (
                                        <button
                                            className="viewActBtn"
                                            onClick={() => viewActivityHandler(v)}>
                                            View Activity
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}
                                    <NewRoutineModal trigger={trigger} setTrigger={setTrigger} tokenString={tokenString} />
                                </div>
                            </fieldset>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Routines;
