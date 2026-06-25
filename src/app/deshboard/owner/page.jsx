import { HiHomeModern } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import Chart from "@/component/Chart";
import { getBookedData, getOwnerData } from "@/lib/owner/ownerget";
import { userSession } from "@/lib/session";
import { Suspense } from "react";


const OwnerPage = async () => {
    const user = await userSession()
    const bookingData = await getBookedData(user?.id)
    const properties = await getOwnerData(user?.id)

    return (
        <div className="m-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Total Properties */}
                <div className="bg-white rounded-2xl p-6 shadow border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm">Total Properties</p>
                            <h2 className="text-3xl font-bold mt-2">{properties.length}</h2>
                        </div>
                        <div className="p-4 bg-blue-100 rounded-xl">
                            <HiHomeModern className="text-3xl text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Total Bookings */}
                <div className="bg-white rounded-2xl p-6 shadow border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm">Total Bookings</p>
                            <h2 className="text-3xl font-bold mt-2">{bookingData.length}</h2>
                        </div>
                        <div className="p-4 bg-green-100 rounded-xl">
                            <FaCalendarCheck className="text-3xl text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Total Earnings */}
                <div className="bg-white rounded-2xl p-6 shadow border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm">Total Earnings</p>
                            <h2 className="text-3xl font-bold mt-2">$12,450</h2>
                        </div>
                        <div className="p-4 bg-yellow-100 rounded-xl">
                            <MdAttachMoney className="text-3xl text-yellow-600" />
                        </div>
                    </div>
                </div>
            </div>
            <Suspense fallback={<h1 className="text-black">loading...</h1>}>
                <Chart bookingData={bookingData} />
            </Suspense>

        </div>
    );
};

export default OwnerPage;