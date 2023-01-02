import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allActivities } from "../api/api";

const Activities = () => {
    const [activities, setActivities] = useState([]);

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
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Activities;
