import SimpleUser from "./SimpleUser";

export default interface ActivityApplication {
    accepted: boolean,
    created_at: number,
    user: SimpleUser
}