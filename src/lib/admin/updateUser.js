"use server"

import { headers } from "next/headers"
import { auth } from "../auth"

const serverUri = process.env.NEXT_PUBLIC_API_URL
export const updateUsers = async (id, data) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/updateuser/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}