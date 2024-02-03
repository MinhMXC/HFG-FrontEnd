import fetchWithAuth from "../helpers/fetchWithAuth";

export default async function viewUserLoader({params}: any) {
    const res = await fetchWithAuth(`/users/${params.id}`, "GET")
    console.log(res)
    if (res.status === "error")
        throw new Response(res.errors.full_messages, {status: res.response_code})

    return res.data
}