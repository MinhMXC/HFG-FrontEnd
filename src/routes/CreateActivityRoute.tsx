import {Button, TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export default function CreateActivityRoute() {
    return (
        <div id="create-activity-container">
            <TextField id="title" label="Title" />
            <TextField id="overview" label="Overview" />
            <TextField id="body" label="Body" multiline />
            <TextField id="image" label="Image URL" />
            <TextField id="manpower_needed" label="Manpower Needed" />
            <TextField id="location" label="Locaton" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker label="Time Start" />
                <DateTimePicker label="Time End" />
            </LocalizationProvider>

            <Button disableElevation variant="contained">Create Activity</Button>
        </div>
    )
}