import {useLoaderData} from "react-router-dom";
import Application from "../interfaces/Application";
import ApplicationsSection from "../components/ApplicationsSection";

export default function AllApplicationsRoute() {
    const applications = (useLoaderData() as Array<any>).map(element => element.attributes as Application)
    return (
        <ApplicationsSection applications={applications} />
    )
}