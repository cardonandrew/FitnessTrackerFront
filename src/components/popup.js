import React, {useState} from "react";

import './popup.css' 
import Routines from "./routines";

const Popup = (props) => {
    const { trigger, setTrigger, pubRoutines, children} = props

    return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => {setTrigger(false)}}>close</button>
            <h1 className="center-title">Routines with this activity</h1>
                {pubRoutines.length > 0 ? pubRoutines.map((routine, index) => {
                    return ( 
                        <div className="routine" key={index}>
                        <h2>{"Name: " + routine.name}</h2>
                        <h3>{"Goal: " + routine.goal}</h3>
                        <p>{"Creator: " + routine.creatorName}</p>
                        <hr/>
                        </div>
                        
                        )
                }):<div>This activity has no public routines.</div>}
    
        </div>
        
    </div>
    ) : ''
}

export default Popup;