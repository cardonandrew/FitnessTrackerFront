import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Activity = (props) => {
    const param = useParams();
    const currentAct = param.activityID;

}

export default Activity;