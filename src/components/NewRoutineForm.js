import React, { useState } from "react";
import { newRoutine } from "../api/api";
import "./popup.css";

const NewRoutineModal = (props) => {
    const { trigger, setTrigger, tokenString } = props;
    const [checked, setChecked] = useState(false);
    const [routineName, setRoutineName] = useState("");
    const [routineGoal, setRoutineGoal] = useState("");
    const [success, setSuccess] = useState(null);
    const [message, setMessage] = useState("");

    const CreateNewRoutine = async (event) => {
        event.preventDefault();
        try {
            if (routineName.length === 0 || routineGoal.length === 0 ) {
                setMessage("Error. Name/Goal fields cannot be empty.")
                setSuccess(false);
                return;
            }

            const createdRoutine = await newRoutine(routineName, routineGoal, checked, tokenString);
            console.log("CREATED ROUTINE:", createdRoutine)

            if (createdRoutine.error) {
                setMessage("Error. Could not create Routine.")
                setSuccess(false)
            }
            else if (createdRoutine.id) {
                setMessage("Success! A Routine has been created.")
                setSuccess(true)
            }
        } catch (error) {
            throw error;
        }
    }

    return trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => {
                        setTrigger(false);
                    }}>
                    close
                </button>
                <h1 className="center-title">Create a New Routine</h1>
                <form className="ui form" onSubmit={CreateNewRoutine}>
                    <div className="field">
                        <label>Enter the Name of the Routine</label>
                        <input placeholder="Name" value={routineName} onChange={(e) => setRoutineName(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Enter the goal of the Routine</label>
                        <input placeholder="Goal" value={routineGoal} onChange={(e) => setRoutineGoal(e.target.value)}/>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input
                                type="checkbox"
                                tabIndex="0"
                                defaultChecked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <label>Make Routine Public?</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">
                        Submit
                    </button>
                    {success ? <div style={{'color': 'green'}}>{message}</div> : null}
                    {!success ? <div style={{'color': 'red'}}>{message}</div> : null}
                </form>
            </div>
        </div>
    ) : null;
};

export default NewRoutineModal;
