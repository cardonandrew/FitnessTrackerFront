import React, { useState } from "react";

import "../popup.css";

const ViewAct = (props) => {
    const { trigger2, setTrigger2, activities } = props;

    return trigger2 ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => {
                        setTrigger2(false);
                    }}>
                    close
                </button>
                <h1 className="center-title">Activities</h1>
                {activities.length > 0 ? (
                    activities.map((activity, index) => {
                        return (
                            <div className="routine" key={index}>
                                <h2>{"Name: " + activity.name}</h2>
                                <h3>{"Description: " + activity.description}</h3>
                                <hr />
                            </div>
                        );
                    })
                ) : (
                    <div>This Routine has no activities.</div>
                )}
            </div>
        </div>
    ) : (
        ""
    );
};

export default ViewAct;
