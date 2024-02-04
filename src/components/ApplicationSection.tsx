import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Avatar, Button, Checkbox, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import React, {useState} from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import {NavigateFunction} from "react-router-dom";
import fetchWithAuth from "../helpers/fetchWithAuth";
import Application from "../interfaces/Application";
import timeAgoTextGenerator from "../helpers/timeAgoTextGenerator";

export default function ApplicationSection(props: {
    loaderData: any
    activity_id: number,
    navigate: NavigateFunction
}) {
    const applications: Application[] = props.loaderData.applications
        .map((application: any) => {
            const app: Application = {
                accepted: application.attributes.accepted,
                created_at: application.attributes.created_at,
                user: application.attributes.user
            }
            return app
        })

    const users = applications.map(app => app.user)
    const [errors, setError] = useState(new Map())
    const [checked, setChecked] = useState<boolean[]>
        (Array(applications.length).fill(false).map((_, index) => applications[index].accepted));

    const handleToggle = (index: number) => {
        return () => {
            checked[index] = !checked[index]
            setChecked([...checked])
        }
    };

    async function acceptApplicationsOnClick() {
        const ids: number[] = []
        for (let i = 0; i < checked.length; i++)
            if (checked[i])
                ids.push(users[i].id)

        const res = await fetchWithAuth(`/attendances/activity/${props.activity_id}`, "POST",{ attendance: { user_ids: ids }})
        if (res.status === "error") {
            const keys = Object.keys(res.errors)
            const values = Object.values(res.errors)
            keys.forEach((key, index) => errors.set(key, values[index]))
            setError(new Map(errors))
            console.log(errors)
        } else {
            alert("Successful")
        }
    }

    return (
        <div className="standard-container" style={{ width: "900px" }}>
            <Button
                disableElevation
                variant="contained"
                fullWidth
                onClick={acceptApplicationsOnClick}
            >Accept Applications</Button>

            <List disablePadding>
                {
                    applications.map((application, index) => {
                        const user = application.user
                        return (
                            <ListItem key={user.id} sx={{ padding: 0, mt: "15px" }}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked[index]}
                                        tabIndex={-1}
                                        disableRipple
                                        onClick={handleToggle(index)}
                                    />
                                </ListItemIcon>
                                <ListItemAvatar>
                                    <a href={`/users/${user.id}`} style={{ width: "fit-content" }}>
                                        <Avatar
                                            alt={user.full_name}
                                            src={user.image!}
                                            sx={{ width: "60px", height: "60px" }}
                                        />
                                    </a>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.full_name}
                                    secondary={`ID: ${user.id} (Applied: ${timeAgoTextGenerator(application.created_at)})`}
                                    sx={{ ml: "20px" }}
                                />
                                <p style={{ color: "red" }}>{errors.get(`${user.id}`)}</p>
                            </ListItem>
                        )
                    }
                    )
                }
            </List>
        </div>
    )
}