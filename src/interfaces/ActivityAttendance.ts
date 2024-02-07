import SimpleUser from "./SimpleUser";

export default interface ActivityAttendance {
    attended: boolean,
    created_at: number,
    updated_at: number,
    user: SimpleUser
}