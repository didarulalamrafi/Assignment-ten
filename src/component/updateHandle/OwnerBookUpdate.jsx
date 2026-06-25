"use client"

import { updateOwnerData } from "@/lib/owner/ownerupdate";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const OwnerBookUpdate = ({ id }) => {
    const router = useRouter();

    const approveHandle = async () => {
        const data = { status: 'Approved' };
        const approve = await updateOwnerData(id, data);
        console.log(approve, 'from approve handle');
        router.refresh();
        toast.success('Approve Booking Success')
    };

    const rejectHandle = async () => {
        const data = { status: 'Rejected' };
        const reject = await updateOwnerData(id, data);
        console.log(reject, 'from reject handle');
        router.refresh();
        toast.error('Rejected Booking')

    };

    return (
        <div className="flex gap-2">
            <button
                onClick={approveHandle}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
                Approve
            </button>

            <button
                onClick={rejectHandle}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Reject
            </button>
        </div>
    );
};

export default OwnerBookUpdate;