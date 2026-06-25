"use server"

import { headers } from "next/headers"
import { auth } from "../auth"


const serverUri = process.env.NEXT_PUBLIC_API_URL

export const postRejectMessage = async (message) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/rejectowner`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(message)
    })
    return await res.json()
}