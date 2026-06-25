"use client"

import { updateOwnerallData, updateOwnerData } from "@/lib/owner/ownerupdate";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AdminRejectModal } from "../AdminRejectModal";

const AdminPropertyUpdate = ({ id, title }) => {
    const router = useRouter();

    const approveHandle = async () => {
        const data = { status: 'Approved' };
        const approve = await updateOwnerallData(id, data);
        console.log(approve, 'from approve handle');
        router.refresh();
        toast.success('Approve Booking Success')
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={approveHandle}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
                Approve
            </button>
            <AdminRejectModal id={id} title={title} />
            {/* <button
                onClick={rejectHandle}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Reject
            </button> */}
        </div>
    );
};

export default AdminPropertyUpdate;