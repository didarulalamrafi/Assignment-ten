"use server"

import { headers } from "next/headers"
import { auth } from "../auth"

const serverUrl = process.env.NEXT_PUBLIC_API_URL

export const getBookingData = async (email) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUrl}/api/postbooking?email=${email}`, {
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return await res.json()
}
// get favourite
export const getFavourite = async (userId) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUrl}/api/favourite?userId=${userId}`, {
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return await res.json()
}