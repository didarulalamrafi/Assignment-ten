"use server"
import { headers } from "next/headers"
import { auth } from "../auth"

const serverUri = process.env.NEXT_PUBLIC_API_URL

export const bookingPost = async (booking) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/postbooking`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(booking)
    })
    return await res.json()
}
// add favourite
export const favouritePost = async (properties) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/favourite`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token?.token}`
        },
        body: JSON.stringify(properties)
    })
    return await res.json()
}