import {NavigateFunction, useLoaderData, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import ErrorText from "../components/ErrorText";
import fetchWithAuth from "../helpers/fetchWithAuth";
import Activity from "../interfaces/Activity";
import dayjs from "dayjs";

interface UpdateActivityData {
    title: string,
    overview: string,
    body: string,
    image: null | string,
    manpower_needed: number | undefined,
    location: string,
    time_start: number | undefined,
    time_end: number | undefined
}

async function updateActivityOnClick(data: UpdateActivityData, setError: Function, navigate: NavigateFunction) {
    const res = await fetchWithAuth("/activities", "POST", data)
    console.log(res)
    if (res.status === "error")
        setError(res.errors.full_messages)
    else
        navigate(`/activities/${(res.data as Activity).id}`)
}

export default function UpdateActivityRoute() {
    const activity = useLoaderData() as Activity
    const navigate = useNavigate()
    const [timeStart, setTimeStart] = useState<Date | null>(null)
    const [timeEnd, setTimeEnd] = useState<Date | null>(null)
    const [manpowerNeeded, setManpowerNeeded] = useState<string | null>(null)
    const [error, setError] = useState<string>("")

    return (
        <div className="standard-container" id="create-activity-container">
            <TextField id="title" label="Title" defaultValue={activity.title} />
            <TextField id="overview" label="Overview" defaultValue={activity.overview} />
            <TextField id="body" label="Body" multiline defaultValue={activity.body} />
            <TextField id="image" label="Image URL" defaultValue={activity.image} />
            <TextField
                id="manpower_needed"
                label="Manpower Needed"
                defaultValue={activity.manpower_needed}
                onChange={(event) => setManpowerNeeded(event.target.value)}
            />
            <TextField id="location" label="Locaton" defaultValue={activity.location} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Time Start"
                    defaultValue={dayjs(activity.time_start)}
                    onChange={(value, _) => setTimeStart(value as any as Date)}
                />
                <DateTimePicker
                    label="Time End"
                    defaultValue={dayjs(activity.time_end)}
                    onChange={(value, _) => setTimeEnd(value as any as Date)}
                />
            </LocalizationProvider>

            <ErrorText error={error} />

            <Button
                disableElevation
                variant="contained"
                onClick={() => updateActivityOnClick({
                        title: (document.getElementById("title") as HTMLInputElement).value,
                        overview: (document.getElementById("overview") as HTMLInputElement).value,
                        body: (document.getElementById("body") as HTMLInputElement).value,
                        image: (document.getElementById("image") as HTMLInputElement).value,
                        manpower_needed: manpowerNeeded === null ? undefined : Number(manpowerNeeded),
                        location: (document.getElementById("location") as HTMLInputElement).value,
                        time_start: timeStart === null ? undefined : (new Date(timeStart)).getTime(),
                        time_end: timeEnd === null ? undefined : (new Date(timeEnd)).getTime()
                    }, setError, navigate
                )}
            >Update Activity</Button>
        </div>
    )
}