import React from 'react';
import '../App.css'
import ActivityCard from "../components/ActivityCard";
import Activity from "../interfaces/Activity";
import {useLoaderData} from "react-router-dom";
import {Grid} from "@mui/material";

export default function MainPage() {
    const activities = (useLoaderData() as any).map((element: any) => element.attributes as Activity)

    return (
        // <div className="item-container">
        //     {
        //         activities.map((activity: any) => <ActivityCard key={activity.id} activity={activity} />)
        //     }
        // </div>
        <Grid container sx={{ width: "900px", mt: "10px" }} spacing="20px">
            {
                activities.map((activity: any) =>
                    <Grid item xs={6}>
                        <ActivityCard key={activity.id} activity={activity} />
                    </Grid>
                )
            }
        </Grid>
    );
}