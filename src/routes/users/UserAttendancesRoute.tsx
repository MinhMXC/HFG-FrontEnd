import {useLoaderData} from "react-router-dom";
import timeAgoTextGenerator from "../../helpers/timeAgoTextGenerator";
import SimpleActivityCard from "../../components/SimpleActivityCard";
import Divider from "@mui/material/Divider";
import Attendance from "../../interfaces/Attendance";
import {Button} from "@mui/material";

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
                        <p style={{ marginTop: "4px" }}>
                            <strong>Status:&nbsp;</strong>
                            <p className="status-text" style={{ color: attendance.attended ? "green" : "red" }}>
                                {attendance.attended ? "Attended" : "Not Attended"}
                            </p>
                        </p>
                        { attendance.attended &&
                            <Button
                                variant="contained"
                                disableElevation
                                sx={{ mt: "10px" }}
                            >Request Certificates</Button>
                        }
                        <Divider sx={{ mt: "10px", mb: "10px" }} />
                        <SimpleActivityCard activity={attendance.activity!} />
                    </div>
                ))
            }
        </div>
    )
}