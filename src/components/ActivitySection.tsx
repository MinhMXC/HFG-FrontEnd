import Activity from "../interfaces/Activity";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {Button} from "@mui/material";
import fetchWithAuth from "../helpers/fetchWithAuth";
import {useState} from "react";

async function applyOnClick(activity_id: number, applied: boolean, setApplied: Function) {
    if (applied) {
        const res = await fetchWithAuth(`/applications/activity/${activity_id}`, "DELETE", { activity_id: activity_id })
        if (res.status === "error")
            alert(res.errors.full_messages)
        else {
            alert("Application successfully withdrew")
            setApplied(false)
        }
    } else {
        const res = await fetchWithAuth(`/applications/activity/${activity_id}`, "POST", { activity_id: activity_id })
        if (res.status === "error")
            alert(res.errors.full_messages)
        else {
            alert("Application successfully sent")
            setApplied(true)
        }
    }
}

export default function ActivitySection (props: {
    activity: Activity
}) {
    const activity = props.activity
    const [applied, setApplied] = useState<boolean>(activity.applied === undefined ? false : activity.applied)

    return (
        <div className="standard-container" id="activity-container">
            <h1 id="activity-title">{activity.title}</h1>

            <div id="posted-on-container">
                <p>Posted on: {new Date(activity.created_at * 1000).toLocaleString()}</p>
                {
                    activity.created_at !== activity.updated_at &&
                    <p>{new Date(activity.updated_at * 1000).toLocaleString()}</p>
                }
            </div>

            <img
                id="activity-image"
                alt="post-image"
                src={activity.image === null ? undefined : activity.image}
            />
            <p id="activity-body">{activity.body}</p>

            <Divider sx={{ mt: "20px", mb: "20px" }}/>

            <div>
                <h2 id="about-this-activity">About this activity:</h2>
                <li><span className="about-span">Manpower Needed:</span> {activity.manpower_needed}</li>
                <li><span className="about-span">Location:</span> {activity.location}</li>
                <li>
                    <span className="about-span">Begins At:</span> {new Date(activity.time_start).toLocaleString()}
                    <span className="about-span"> &nbsp;&nbsp;&nbsp;&nbsp;Ends At:</span> {new Date(activity.time_end).toLocaleString()}
                </li>
            </div>

            <Button
                disableElevation
                variant="contained"
                onClick={() => applyOnClick(activity.id, applied, setApplied)}
                sx={{ width: "100%", mt: "20px" }}
            >{applied ? "Withdraw Application" : "Apply"}</Button>
        </div>
    );
}