import fetchWithAuth from "../helpers/fetchWithAuth";

export default async function activityAttendancesLoader({params}: any) {
    const res = await fetchWithAuth(`/activity/${params.id}/attendances`, "GET")
    if (res.status === "error")
        throw new Response(res.errors.full_messages, {status: res.response_code})

    return res.data
}