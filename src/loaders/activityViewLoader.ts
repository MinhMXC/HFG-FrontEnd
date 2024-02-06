import fetchWithAuth from "../helpers/fetchWithAuth";

export default async function activityViewLoader({params}: any) {
    const res = await fetchWithAuth(`/activities/${params.id}`, "GET")
    if (res.status === "error")
        throw new Response(res.errors.full_messages, {status: res.response_code})

    return res.data
}