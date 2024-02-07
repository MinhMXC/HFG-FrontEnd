import SimpleUser from "./SimpleUser";
import SimpleActivity from "./SimpleActivity";

export default interface Application {
    accepted: boolean,
    created_at: number,
    user?: SimpleUser
    activity?: SimpleActivity
}