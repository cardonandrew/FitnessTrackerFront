import React, {useState} from "react";
import "./popup.css";
import { newActivity } from "../api/activities"

const CreateAct = (props) => {
    const { createTrigger, setCreateTrigger, user, tokenString } = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    

async function handleSubmit (event) {
    console.log(tokenString)
    event.preventDefault()
        if (title.length > 0 && description.length > 0) {
            const data = await newActivity(tokenString, title, description)
            if (data) {console.log("new activity created", data)}
        }
    }

    if(user) {
        return (props.createTrigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => {setCreateTrigger(false)}}>close</button>
            <h1 className="center-title">Make your own activity!</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label >Name:</label>
                    <input onChange={(e) => setTitle(e.target.value)}></input>
                    <label>Description:</label>
                    <input onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                <button className="ui button" type="submit">Create</button>
                
            </form>
    
        </div>
        
    </div>
    ) : '' }
    else{
        return (props.createTrigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => {setCreateTrigger(false)}}>close</button>
                    <div>You must sign in to create an activity.</div>
            
                </div>
                
            </div>
            ) : '' 
     }
    }

export default CreateAct;