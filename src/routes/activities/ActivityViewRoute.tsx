import Activity from "../../interfaces/Activity";
import Divider from "@mui/material/Divider";
import * as React from "react";
import {Button} from "@mui/material";
import fetchWithAuth from "../../helpers/fetchWithAuth";
import {useState} from "react";
import {useLoaderData} from "react-router-dom";

async function applyOnClick(activity_id: number, applicationStatus: number, setApplicationStatus: Function) {
    if (applicationStatus === 1) {
        const res = await fetchWithAuth(`/activity/${activity_id}/applications`, "DELETE", { activity_id: activity_id })
        if (res.status === "error")
            alert(res.errors.full_messages)
        else {
            alert("Application successfully withdrew")
            setApplicationStatus(0)
        }
    } else if (applicationStatus === 0) {
        const res = await fetchWithAuth(`/activity/${activity_id}/applications`, "POST", { activity_id: activity_id })
        if (res.status === "error")
            alert(res.errors.full_messages)
        else {
            alert("ActivityApplication successfully sent")
            setApplicationStatus(1)
        }
    } else {
        alert("Your application has been accepted and cannot be withdrawn anymore. Please contact administrators if you want to withdraw!")
    }
}

export default function ActivityViewRoute() {
    const activity = (useLoaderData() as any) as Activity
    console.log(activity)
    const application = activity.application
    const status = application === undefined || application === null
                   ? 0
                   : application.accepted
                   ? 2
                   : 1

    const [applicationStatus, setApplicationStatus] = useState<number>(status)

    const buttonText = applicationStatus === 0
                       ? "Apply"
                       : applicationStatus === 1
                       ? "Withdraw"
                       : "Accepted"

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
                onClick={() => applyOnClick(activity.id, applicationStatus, setApplicationStatus)}
                sx={{ width: "100%", mt: "20px" }}
            >{buttonText}</Button>
        </div>
    );
}