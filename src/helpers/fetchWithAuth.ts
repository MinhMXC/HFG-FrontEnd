import Cookies from "js-cookie"
import APP_CONSTANTS from "./CONSTANTS";
import {unmountComponentAtNode} from "react-dom";

const accessToken = 'access-token'
const client = 'client'
const expiry = 'expiry'
const uid = 'uid'

export default async function fetchWithAuth(
    url: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    data: any = undefined
) {
    try {
        const res = await fetch(APP_CONSTANTS.BACKEND_URL + url, {
            method: method,
            body: data === undefined ? undefined : JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                [accessToken]: getCookie(accessToken),
                [client]: getCookie(client),
                [expiry]: getCookie(expiry),
                [uid]: getCookie(uid)
            }
        })

        if (res.headers.get(accessToken))
            saveToken(res)

        return await res.json()
    } catch(error) {
        return error;
    }
}

function getCookie(name: string): string {
    const cookie = Cookies.get(name)
    return cookie === undefined ? "" : cookie
}

function saveToken(res: Response) {
    const save = (cookieName: string) => {
        Cookies.set(cookieName, res.headers.get(cookieName)!) //, {sameSite: 'None', secure: true})
    }
    save(accessToken)
    save(client)
    save(expiry)
    save(uid)
}