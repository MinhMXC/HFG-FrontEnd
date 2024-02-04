import fetchWithAuth from "../helpers/fetchWithAuth";

export default async function activityLoader({params}: any) {
    const resActivity = await fetchWithAuth(`/activities/${params.id}`, "GET")
    if (resActivity.status === "error")
        throw new Response(resActivity.errors.full_messages, {status: resActivity.response_code})

    const resApplications = await fetchWithAuth(`/applications/activity/${params.id}`, "GET")
    if (resApplications.status === "error")
        throw new Response(resApplications.errors.full_messages, {status: resApplications.response_code})

    const resAttendances = await fetchWithAuth(`/attendances/activity/${params.id}`, "GET")
    if (resAttendances.status === "error")
        throw new Response(resAttendances.errors.full_messages, {status: resAttendances.response_code})

    return { activity: resActivity.data, applications: resApplications.data, attendances: resAttendances.data }
}