import SimpleActivity from "../interfaces/SimpleActivity";

export default function SimpleActivityCard(props: {
    activity: SimpleActivity
}) {
    const activity = props.activity
    return (
        <div>
            <p className="activity-text">
                <a className="simple-activity-anchor" href={`/activities/${activity.id}`}>Activity&nbsp;</a>
                <p style={{ display: "inline", fontSize: "17px" }}>(ID: {activity.id})</p>
            </p>
            <p style={{ marginTop: "5px" }}><strong>{activity.title}</strong></p>
            <p>{activity.overview}</p>
        </div>
    )
}