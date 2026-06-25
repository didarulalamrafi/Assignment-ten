"use client";

import { updateUsers } from "@/lib/admin/updateUser";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserRoleUpdate = ({ id }) => {
    const router = useRouter()
    const roleHandle = async (e) => {
        e.preventDefault()
        const data = {
            role: e.target.value
        }
        const roleupdate = await updateUsers(id, data)
        toast.success(`Make ${e.target.value} Successfull`)
        console.log(roleupdate);
        router.refresh()

    }

    return (

        <select
            name="role"
            onChange={roleHandle}
            className="border p-1 rounded"
        >
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="tenant">Tenant</option>
            <option value="owner">Owner</option>
        </select>


    );
};

export default UserRoleUpdate;