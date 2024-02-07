import Application from "../interfaces/Application";
import timeAgoTextGenerator from "../helpers/timeAgoTextGenerator";
import Divider from "@mui/material/Divider";
import SimpleActivityCard from "../components/SimpleActivityCard";

export default function ApplicationsSection(props: {
    applications: Application[]
}) {
    return (
        <div className="standard-container" style={{ width: "900px" }}>
            <p id="application-text">Applications</p>
            {
                props.applications.map((application) => (
                    <div className="standard-container" style={{ fontSize: "18px" }}>
                        <p>
                            <strong>Applied:</strong> {timeAgoTextGenerator(application.created_at)}
                        </p>
                        <p style={{ marginTop: "4px" }}>
                            <strong>Status:&nbsp;</strong>
                            <p className="status-text" style={{ color: application.accepted ? "green" : "red" }}>
                                {application.accepted ? "Accepted" : "Pending"}
                            </p>
                        </p>
                        <Divider sx={{ mt: "10px", mb: "10px" }} />
                        <SimpleActivityCard activity={application.activity!} />
                    </div>
                ))
            }
        </div>
    )
}