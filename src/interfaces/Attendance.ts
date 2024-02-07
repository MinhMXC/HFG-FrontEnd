import SimpleUser from "./SimpleUser";
import SimpleActivity from "./SimpleActivity";

export default interface Attendance {
    attended: boolean,
    created_at: number,
    updated_at: number,
    user?: SimpleUser,
    activity?: SimpleActivity
}