"use server"

import { headers } from "next/headers"
import { auth } from "../auth"


const serverUri = process.env.NEXT_PUBLIC_API_URL

export const deleteUserData = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/deleteuser/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json()
}