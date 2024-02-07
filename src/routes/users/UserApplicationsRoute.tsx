import {useLoaderData} from "react-router-dom";
import UserApplication from "../../interfaces/UserApplication";
import timeAgoTextGenerator from "../../helpers/timeAgoTextGenerator";
import SimpleActivityCard from "../../components/SimpleActivityCard";
import Divider from "@mui/material/Divider";

export default function UserApplicationsRoute() {
    const applications = (useLoaderData() as Array<any>).map(element => element.attributes)
    return (
        <div className="standard-container" style={{ width: "900px" }}>
            <p id="application-text">Applications</p>
            {
                applications.map((application) => (
                    <div className="standard-container" style={{ fontSize: "18px" }}>
                        <p>
                            <strong>Applied:</strong> {timeAgoTextGenerator(application.created_at)}
                        </p>
                        <p>
                            <strong>Status:</strong> {application.accepted ? "Accepted" : "Pending"}
                        </p>
                        <Divider sx={{ mt: "10px", mb: "10px" }} />
                        <SimpleActivityCard activity={application.activity} />
                    </div>
                ))
            }
        </div>
    )
}
