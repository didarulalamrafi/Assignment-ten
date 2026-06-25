"use server"

import { headers } from "next/headers"
import { auth } from "../auth"

const serverUri = process.env.NEXT_PUBLIC_API_URL

export const getUserData = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/user`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json()
}
// all owner data
export const getOwner = async (owner) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/owner?role=${owner}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json()
}
// total property
export const totalPorperty = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/owneralldata`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json()
}
// total booking
export const totalBookingsData = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${serverUri}/api/postbooking`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return await res.json()
}
// get reject messge
// export const getRejectMessage = async (title) => {
//     const { token } = await auth.api.getToken({
//         headers: await headers()
//     })
//     const res = await fetch(`${serverUri}/api/rejectowner?title=${title}`, {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     })
//     const data = await res.json()
//     console.log(data, 'fro reject messge');
//     return data;
// }