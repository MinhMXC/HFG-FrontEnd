import {Button, TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useState} from "react";
import fetchWithAuth from "../helpers/fetchWithAuth";
import {NavigateFunction, useNavigate} from "react-router-dom";
import Activity from "../interfaces/Activity";
import ErrorText from "../components/ErrorText";

interface CreateActivityData {
    title: string,
    overview: string,
    body: string,
    image: null | string,
    manpower_needed: number | undefined,
    location: string,
    time_start: number | undefined,
    time_end: number | undefined
}

async function createActivityOnClick(data: CreateActivityData, setError: Function, navigate: NavigateFunction) {
    const res = await fetchWithAuth("/activities", "POST", data)
    console.log(res)
    if (res.status === "error")
        setError(res.errors.full_messages)
    else
        navigate(`/activities/${(res.data as Activity).id}`)

}

export default function CreateActivityRoute() {
    const navigate = useNavigate()
    const [timeStart, setTimeStart] = useState<Date | null>(null)
    const [timeEnd, setTimeEnd] = useState<Date | null>(null)
    const [manpowerNeeded, setManpowerNeeded] = useState<string | null>(null)
    const [error, setError] = useState<string>("")

    return (
        <div className="standard-container" id="create-activity-container">
            <TextField id="title" label="Title" />
            <TextField id="overview" label="Overview" />
            <TextField id="body" label="Body" multiline />
            <TextField id="image" label="Image URL" />
            <TextField id="manpower_needed" label="Manpower Needed" onChange={(event) => setManpowerNeeded(event.target.value)} />
            <TextField id="location" label="Locaton" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Time Start"
                    onChange={(value, _) => setTimeStart(value as Date)}
                />
                <DateTimePicker
                    label="Time End"
                    onChange={(value, _) => setTimeEnd(value as Date)}
                />
            </LocalizationProvider>

            <ErrorText error={error} />

            <Button
                disableElevation
                variant="contained"
                onClick={() => createActivityOnClick({
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
            >Create Activity</Button>
        </div>
    )
}