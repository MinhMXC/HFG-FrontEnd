import Activity from "../interfaces/Activity";
import {useLoaderData, useNavigate} from "react-router-dom";
import * as React from "react";
import ActivitySection from "../components/ActivitySection";
import {Button, ButtonGroup} from "@mui/material";
import {useState} from "react";
import ApplicationSection from "../components/ApplicationSection";
import AttendanceSection from "../components/AttendanceSection";

export default function ActivityRoute () {
    const navigate = useNavigate()
    const [currentView, setCurrentView] = useState<number>(0)
    const loaderData = useLoaderData() as any
    const activity = loaderData.activity as Activity

    return (
        <div>
            <div className="standard-container">
                <ButtonGroup
                    disableElevation
                    fullWidth
                >
                    <Button
                        variant={currentView === 0 ? "contained" : "outlined"}
                        onClick={() => setCurrentView(0)}
                    >View</Button>
                    <Button
                        variant={currentView === 1 ? "contained" : "outlined"}
                        onClick={() => setCurrentView(1)}
                    >Applications</Button>
                    <Button
                        variant={currentView === 2 ? "contained" : "outlined"}
                        onClick={() => setCurrentView(2)}
                    >Attendance</Button>
                </ButtonGroup>
            </div>

            {currentView === 0 ? <ActivitySection activity={activity} /> : undefined}

            {
                currentView === 1
                ? <ApplicationSection loaderData={loaderData} activity_id={activity.id} navigate={navigate} />
                : undefined
            }

            {
                currentView === 2
                ? <AttendanceSection loaderData={loaderData} activity_id={activity.id} navigate={navigate} />
                : undefined
            }
        </div>
    );
}