import Activity from "../interfaces/Activity";
import {useLoaderData} from "react-router-dom";

export default function ActivityRoute () {
    const activity = useLoaderData() as Activity

    return (
        <>
            <p>{activity.title}</p>
            <p>{activity.body}</p>
            <p>{activity.image}</p>
            <p>{activity.manpower_needed}</p>
            <p>{activity.location}</p>
            <p>{activity.time_start.toString()}</p>
            <p>{activity.time_end.toString()}</p>
            <p>{activity.created_at.toString()}</p>
            <p>{activity.updated_at.toString()}</p>
        </>
    );
}