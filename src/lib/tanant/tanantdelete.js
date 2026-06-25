"use server"
import { headers } from "next/headers"
import { auth } from "../auth"

const serverUrl = process.env.NEXT_PUBLIC_API_URL

export const deleteData = async (id) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUrl}/api/my/booking/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token?.token}`
        }

    })
    return await res.json()
}
export const deleteFavouriteData = async (id) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUrl}/api/my/favourite/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token?.token}`
        }

    })
    return await res.json()
}

