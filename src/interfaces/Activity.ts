import SimpleUser from "./SimpleUser";
import Application from "./Application";

export default interface Activity {
    id: number,
    title: string,
    overview: string,
    body: string,
    image: null | string,
    manpower_needed: number,
    location: string,
    time_start: number,
    time_end: number,
    created_at: number,
    updated_at: number,
    application?: Application
}