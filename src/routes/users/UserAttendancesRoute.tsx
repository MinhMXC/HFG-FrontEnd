import {useLoaderData} from "react-router-dom";
import timeAgoTextGenerator from "../../helpers/timeAgoTextGenerator";
import SimpleActivityCard from "../../components/SimpleActivityCard";
import Divider from "@mui/material/Divider";
import Attendance from "../../interfaces/Attendance";

export default function UserAttendancesRoute() {
    const attendances = (useLoaderData() as Array<any>).map(element => element.attributes as Attendance)
    return (
        <div className="standard-container" style={{ width: "900px" }}>
            <p id="application-text">Attendances</p>
            {
                attendances.map((attendance) => (
                    <div className="standard-container" style={{ fontSize: "18px" }}>
                        <p>
                            <strong>Created At:</strong> {timeAgoTextGenerator(attendance.created_at)}
                        </p>
                        <p>
                            <strong>Status:</strong> {attendance.attended ? "Attended" : "Not Attended"}
                        </p>
                        <Divider sx={{ mt: "10px", mb: "10px" }} />
                        <SimpleActivityCard activity={attendance.activity!} />
                    </div>
                ))
            }
        </div>
    )
}