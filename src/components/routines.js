import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allRoutines, deleteRoutine } from "../api/api";
import { NewRoutineModal, ViewAct } from "./index";

const Routines = (props) => {
    const { tokenString, user } = props;
    const [routines, setRoutines] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [activities, setActivities] = useState([]);
    const [trigger2, setTrigger2] = useState(false);

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

    return (
        <div className="routines">
            {user ? (
                <div className="new-routine">
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
                                    <p className="creator">Creator: {routine.creatorName}</p>
                                    <button
                                        className="ui button mini"
                                        onClick={() => {
                                            setActivities(routine.activities);
                                            setTrigger2(true);
                                        }}>
                                        Activities with this Routine
                                    </button>
                                    {user === routine.creatorName ? (
                                        <button
                                            style={{ margin: "3px" }}
                                            type="submit"
                                            className="ui button negative mini"
                                            onClick={() => {
                                                deleteRoutine(routine.id, tokenString);
                                            }}>
                                            Delete
                                        </button>
                                    ) : null}
                                    <ViewAct
                                        trigger2={trigger2}
                                        setTrigger2={setTrigger2}
                                        activities={activities}
                                    />
                                    <NewRoutineModal
                                        trigger={trigger}
                                        setTrigger={setTrigger}
                                        tokenString={tokenString}
                                    />
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
