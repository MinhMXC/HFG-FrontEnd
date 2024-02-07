import fetchWithAuth from "../helpers/fetchWithAuth";

export default async function userApplicationsLoader({params}: any) {
    const res = await fetchWithAuth(`/user/${params.id}/applications`, "GET")
    if (res.status === "error")
        throw new Response(res.errors.full_messages, {status: res.response_code})

    return res.data
}