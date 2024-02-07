import {NavigateFunction, useLoaderData, useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";
import fetchWithAuth from "../../helpers/fetchWithAuth";
import {Avatar, Button, ButtonGroup, Checkbox, ListItemAvatar} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import timeAgoTextGenerator from "../../helpers/timeAgoTextGenerator";
import Attendance from "../../interfaces/Attendance";
import Divider from "@mui/material/Divider";

export default function ActivityAttendancesRoute() {
    const navigate = useNavigate()
    const { id } = useParams()
    const attendances: Attendance[] = (useLoaderData() as any)
        .map((attendance: any) => {
            const app: Attendance = {
                attended: attendance.attributes.attended,
                created_at: attendance.attributes.created_at,
                updated_at: attendance.attributes.updated_at,
                user: attendance.attributes.user
            }
            return app
        })

    const users = attendances.map(app => app.user)
    const [errors, setError] = useState(new Map())
    const [checked, setChecked] = useState<boolean[]>(Array(attendances.length).fill(false));

    const handleToggle = (index: number) => {
        return () => {
            checked[index] = !checked[index]
            setChecked([...checked])
        }
    };

    function buttonOnClick(action: "mark" | "unmark" | "delete") {
        return async () => {
            const ids: number[] = []
            for (let i = 0; i < checked.length; i++)
                if (checked[i])
                    ids.push(users[i]!.id)

            const res = await fetchWithAuth(
                `/activity/${id}/attendances/${action}`,
                "POST",
                { attendance: { user_ids: ids }}
            )
            if (res.status === "error") {
                const keys = Object.keys(res.errors)
                const values = Object.values(res.errors)
                keys.forEach((key, index) => errors.set(key, values[index]))
                setError(new Map(errors))
            } else {
                alert("Successful")
                navigate(0)
            }
        }
    }

    return (
        <div className="standard-container" style={{ width: "900px" }}>
            <ButtonGroup disableElevation fullWidth>
                <Button onClick={buttonOnClick("mark")}>Mark Attendance</Button>
                <Button onClick={buttonOnClick("unmark")}>Unmark Attendance</Button>
                <Button onClick={buttonOnClick("delete")}>Delete Attendance</Button>
            </ButtonGroup>

            <List disablePadding>
                {
                    attendances.map((attendance, index) => {
                        const user = attendance.user!
                        return (
                            <>
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
                                        secondary={`USER_ID: ${user.id} (Accepted: ${timeAgoTextGenerator(attendance.created_at)})`}
                                        sx={{ ml: "20px" }}
                                    />
                                    <p className="attendance_status" style={{ color: attendance.attended ? "green" : "red" }}>
                                        {attendance.attended ? "Marked" : "Not Marked"}
                                    </p>
                                </ListItem>
                                <Divider sx={{ mt: "15px" }} />
                            </>
                        )
                        }
                    )
                }
            </List>
        </div>
    )
}