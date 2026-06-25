"use client"
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

const Chart = ({ bookingData }) => {
    console.log(bookingData, 'from charts');
    // const filterData = bookingData?.filter(data => data.status)
    // const monthlyDatas = bookingData.reduce((acc, item) => {
    //     const month = new Date(item.createdAt).getMonth();

    //     acc[month] = (acc[month] || 0) + Number(item.price);

    //     return acc;
    // }, {});

    // console.log(monthlyDatas, 'from charts');

    const mapData = bookingData.map(price => price.price)
    console.log(mapData, 'from chart', bookingData);
    // const monthlyData = [
    //     { month: "Jan", earnings: 120000 },
    //     { month: "Feb", earnings: 180000 },
    //     { month: "Mar", earnings: 150000 },
    //     { month: "Apr", earnings: 220000 },
    //     { month: "May", earnings: 280000 },
    //     { month: "Jun", earnings: 320000 },
    //     { month: "Jul", earnings: 290000 },
    //     { month: "Aug", earnings: 350000 },
    //     { month: "Sep", earnings: 400000 },
    //     { month: "Oct", earnings: 380000 },
    //     { month: "Nov", earnings: 450000 },
    //     { month: "Dec", earnings: 520000 },
    // ];
    return (
        <div className="mt-10">
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="payStatus" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="price"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;