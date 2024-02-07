import * as React from 'react';
import Button from '@mui/material/Button';
import '../App.css'
import Activity from "../interfaces/Activity";


export default function ActivityCard(props: {
    activity: Activity
}) {
    const activity = props.activity;
    const image = activity.image == null ? undefined : activity.image;

    return (
        <div className="standard-container" style={{ marginTop: 0 }}>
            <img alt={`activity-${activity.id}`} src={image} style={{ width: "100%", height: "240px" }}/>
            <h1 style={{ margin: "0px" }}>{activity.title}</h1>
            <div className="posted-on-container" style={{ marginTop: "2px" }}>
                <p>Posted on: {new Date(activity.created_at * 1000).toLocaleString()}</p>
                {
                    activity.created_at !== activity.updated_at &&
                    <p>{new Date(activity.updated_at * 1000).toLocaleString()}</p>
                }
            </div>
            <p style={{ marginTop: "10px" }}>{activity.overview}</p>
            <Button
                disableElevation
                variant="contained"
                fullWidth
                sx={{ mt: "10px" }}
                href={`/activities/${activity.id}`}
            >Learn More</Button>
        </div>
    );
}