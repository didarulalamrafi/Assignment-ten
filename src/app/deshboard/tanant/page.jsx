import { userSession } from "@/lib/session";
import { getBookingData, getFavourite } from "@/lib/tanant/tanantget";
import { FaCalendarCheck, FaHeart, FaUserCheck } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";

const TanantHomePage = async () => {
    const user = await userSession()
    const totalFavourite = await getFavourite(user?.id)
    const totalBooking = await getBookingData(user?.email)
    const stats = [
        {
            title: "Total Booked",
            value: totalBooking.length,
            icon: FaCalendarCheck,
            bg: "bg-blue-100",
            color: "text-blue-600",
        },
        {
            title: "Active Rentals",
            value: 3,
            icon: HiHomeModern,
            bg: "bg-green-100",
            color: "text-green-600",
        },
        {
            title: "Favorites",
            value: totalFavourite.length,
            icon: FaHeart,
            bg: "bg-pink-100",
            color: "text-pink-600",
        },
        {
            title: "Profile Status",
            value: "Complete",
            icon: FaUserCheck,
            bg: "bg-emerald-100",
            color: "text-emerald-600",
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500">{item.title}</p>
                                    <h2 className="text-3xl font-bold text-slate-800 mt-2">
                                        {item.value}
                                    </h2>
                                </div>

                                <div className={`p-4 rounded-xl ${item.bg}`}>
                                    <Icon className={`text-2xl ${item.color}`} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* recently activity */}
            <div className="mt-8 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-800 mb-6">
                    Recent Activity
                </h2>

                <div className="space-y-5">
                    <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                        <div>
                            <p className="font-medium text-slate-800">
                                Successfully booked Modern Apartment in Dhaka
                            </p>
                            <p className="text-sm text-slate-500">
                                2 hours ago
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                            <p className="font-medium text-slate-800">
                                Added Luxury Villa to favorites
                            </p>
                            <p className="text-sm text-slate-500">
                                Yesterday
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                        <div>
                            <p className="font-medium text-slate-800">
                                Rental payment completed
                            </p>
                            <p className="text-sm text-slate-500">
                                3 days ago
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                            <p className="font-medium text-slate-800">
                                Profile information updated
                            </p>
                            <p className="text-sm text-slate-500">
                                1 week ago
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TanantHomePage;