"use server"

import { headers } from "next/headers"
import { auth } from "../auth"

const nextUri = process.env.NEXT_PUBLIC_API_URL
export const postOwnerProperty = async (ownerData) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${nextUri}/api/ownerpost`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(ownerData)
    })
    return await res.json()
}
// client ssays
export const clientSays = async (clientSay) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${nextUri}/api/clientsays`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(clientSay)
    })
    const req = await res.json()
    return req;
}