import Chart from "@/component/Chart";
import { getOwner, getUserData, totalBookingsData, totalPorperty, } from "@/lib/admin/getadmin";
import { Suspense } from "react";


import { FaUsers, FaUserTie, FaHome, FaCalendarCheck } from "react-icons/fa";

const DashboardCards = async () => {
    const getTotalUsers = await getUserData()
    const getTotalOwners = await getOwner('owner')
    const totalBookings = await totalBookingsData()
    const getTtotalProperty = await totalPorperty()
    console.log(getTtotalProperty, 'from');
    const cards = [
        {
            title: "Total Users",
            value: getTotalUsers?.length,
            icon: <FaUsers />,
            color: "bg-blue-500",
        },
        {
            title: "Total Owners",
            value: getTotalOwners?.length,
            icon: <FaUserTie />,
            color: "bg-green-500",
        },
        {
            title: "Total Properties",
            value: getTtotalProperty.length,
            icon: <FaHome />,
            color: "bg-purple-500",
        },
        {
            title: "Total Bookings",
            value: totalBookings.length,
            icon: <FaCalendarCheck />,
            color: "bg-orange-500",
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 md:p-8">
                {cards?.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition"
                    >
                        {/* Left Content */}
                        <div>
                            <p className="text-gray-500 text-sm">{card.title}</p>
                            <h2 className="text-2xl font-bold">{card.value}</h2>
                        </div>

                        {/* Icon */}
                        <div
                            className={`text-white text-2xl p-3 rounded-full ${card.color}`}
                        >
                            {card.icon}
                        </div>
                    </div>
                ))}

            </div>
            <Suspense fallback={<h1>loading...</h1>}>
                <Chart bookingData={totalBookings} />
            </Suspense>

        </div>

    );
};

export default DashboardCards;