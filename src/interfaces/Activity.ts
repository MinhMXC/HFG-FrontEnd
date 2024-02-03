export default interface Activity {
    id: number,
    title: string,
    overview: string,
    body: string,
    image: null | string,
    manpower_needed: number,
    location: string,
    time_start: bigint,
    time_end: bigint,
    created_at: bigint,
    updated_at: bigint
}