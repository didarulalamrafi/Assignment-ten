import FavouriteDelete from "@/component/alldeleteHandle/Favourite";
import NotFoundData from "@/component/NotFoundData";
import { userSession } from "@/lib/session";
import { getFavourite } from "@/lib/tanant/tanantget";
import Image from "next/image";
import { Suspense } from "react";
import { FaClover } from "react-icons/fa6";

const FavouritePage = async () => {
    const user = await userSession()
    const favourite = await getFavourite(user?.id);
    console.log(favourite, 'from favoiurite page');
    const notFound = {

        title: 'No Favourite Properties',
        description: 'You have not added any properties to your favourites yet',
        button: ' Browse Properties'
    }
    return (
        <>
            {
                !favourite || favourite.length === 0 ?
                    <Suspense fallback={<h1>loading...</h1>}>
                        <NotFoundData notFound={notFound} />
                    </Suspense>

                    :

                    <div className="container w-full">
                        <h1 className='text-3xl font-bold text-gray-600 my-4'>My Favourite<span className='text-cyan-500'> Properties</span></h1>

                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">

                                {/* Table Head */}
                                <thead className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
                                    <tr>
                                        <th className="p-3">Image</th>
                                        <th className="p-3 min-w-50">Property</th>
                                        <th className="p-3">Location</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3 text-center">Action</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {favourite?.map((item) => (
                                        <tr
                                            key={item._id}
                                            className="border-t hover:bg-gray-50"
                                        >

                                            {/* Image */}
                                            <td className="p-3">
                                                <Image
                                                    src={item.image}
                                                    alt={item.propertyName}
                                                    width={70}
                                                    height={70}
                                                    className="w-16 h-16 object-cover rounded-md"
                                                />
                                            </td>

                                            {/* Property Name */}
                                            <td className="p-3 font-medium">
                                                {item.propertyName}
                                            </td>

                                            {/* Location */}
                                            <td className="p-3 text-gray-600">
                                                {item.location || "N/A"}
                                            </td>

                                            {/* Price */}
                                            <td className="p-3 font-semibold text-green-600">
                                                ${item.monthlyRent}
                                            </td>

                                            {/* Action */}
                                            <td className="p-3 text-center">
                                                <FavouriteDelete id={item._id} />

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
};

export default FavouritePage;