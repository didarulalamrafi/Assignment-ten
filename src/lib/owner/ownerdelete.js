"use server"
import { headers } from "next/headers"
import { auth } from "../auth"

const serverUri = process.env.NEXT_PUBLIC_API_URL
export const deleteOwnerData = async (id) => {
    const token = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/ownerdata/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return await res.json()
}