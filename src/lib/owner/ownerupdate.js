"use server"
import { headers } from "next/headers"
import { auth } from "../auth"

const serverUri = process.env.NEXT_PUBLIC_API_URL
// update status
export const updateOwnerData = async (id, data) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/postbooking/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}
// update all data
export const updateOwnerallData = async (id, data) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/updateowner/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}


