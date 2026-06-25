
import DeleteHandle from "@/component/DeleteHandle";
import NotFoundData from "@/component/NotFoundData";
import { userSession } from "@/lib/session";
import { getBookingData } from "@/lib/tanant/tanantget";
import { div } from "motion/react-client";
import { Suspense } from "react";
import {
    FaCheckCircle,
    FaTimesCircle,

} from "react-icons/fa";

// const statusStyles = {

//     Pending: {
//         className: "bg-yellow-100 text-yellow-700",
//         icon: <FaClock className="text-yellow-500" />,
//     },
//     Approved: {
//         className: "bg-green-100 text-green-700",
//         icon: <FaCheckCircle className="text-green-500" />,
//     },
//     Rejected: {
//         className: "bg-red-100 text-red-700",
//         icon: <FaTimesCircle className="text-red-500" />,
//     },
// };

export default async function RequestTable() {
    const user = await userSession()
    const requests = await getBookingData(user?.email)
    console.log(requests, 'from my bookig');
    const statusStyles = {
        pending: "bg-yellow-100 text-yellow-700",
        approved: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700",
    };
    const notFound = {
        title: 'Booking Not Found',
        description: 'You have not added any properties to your Book List yet',
        button: ' Browse Properties'
    }
    return (
        <>
            {
                requests?.length === 0 ?
                    <Suspense fallback={<h1>loading...</h1>}>
                        <NotFoundData notFound={notFound} />

                    </Suspense>
                    :

                    <div className="container w-full">
                        <h1 className='text-3xl font-bold text-gray-600 my-4'>My Booking <span className='text-cyan-500'>Properties</span></h1>
                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-5 min-w-50 py-4 text-left text-xl font-semibold text-slate-700">
                                            Property
                                        </th>
                                        <th className="px-5 py-4 text-left text-xl font-semibold text-slate-700">
                                            Tenant Email
                                        </th>
                                        <th className="px-5 min-w-50 py-4 text-left text-xl font-semibold text-slate-700">
                                            Payment
                                        </th>
                                        <th className="px-5 py-4 text-left text-xl font-semibold text-slate-700">
                                            Status
                                        </th>
                                        <th className="px-5 py-4 text-left text-xl font-semibold text-slate-700">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {requests?.map((item) => (
                                        <tr
                                            key={item._id}
                                            className="border-t border-slate-100 hover:bg-slate-50 transition"
                                        >
                                            <td className="px-5 py-4 font-medium text-slate-800">
                                                {item.title}
                                            </td>

                                            <td className="px-5 py-4 text-slate-600">
                                                {item.userEmail}
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[14px] font-semibold ${item.status === "Approved"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                        }`}
                                                >
                                                    {item.payStatus === "paid" ? (
                                                        <FaCheckCircle />
                                                    ) : (
                                                        <FaTimesCircle />
                                                    )}

                                                    {item.status === "Approved" ? 'Paid Success' : 'Paid Pending'}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[14px] font-semibold capitalize ${statusStyles[item.status?.toLowerCase()] || "bg-gray-100 text-gray-600"
                                                        }`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <DeleteHandle id={item._id} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </>

    );
}