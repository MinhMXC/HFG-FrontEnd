import SimpleActivity from "./SimpleActivity";

export default interface UserApplication {
    accepted: boolean,
    created_at: number,
    activity: SimpleActivity
}