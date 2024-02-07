import fetchWithAuth from "../helpers/fetchWithAuth";

// TODO REFACTOR THESE CODE TEMPLATE FUNCTION
export default async function userAttendancesLoader({params}: any) {
    const res = await fetchWithAuth(`/user/${params.id}/attendances`, "GET")
    if (res.status === "error")
        throw new Response(res.errors.full_messages, {status: res.response_code})

    return res.data
}