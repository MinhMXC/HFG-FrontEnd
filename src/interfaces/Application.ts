import SimpleUser from "./SimpleUser";

export default interface Application {
    accepted: boolean,
    created_at: number,
    user: SimpleUser
}