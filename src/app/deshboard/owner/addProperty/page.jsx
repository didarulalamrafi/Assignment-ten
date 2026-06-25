"use client";
import { postOwnerProperty } from "@/lib/owner/ownerpost";
import { userSession } from "@/lib/session";
import { useState } from "react";
import {
    FaWifi,
    FaParking,
    FaShieldAlt,
    FaBolt,
    FaSnowflake,
    FaDumbbell,
    FaSwimmingPool,
} from "react-icons/fa";
import { MdElevator } from "react-icons/md";

export default function AddPropertyForm() {
    const [loading, setLoading] = useState(false)
    const formHandle = async (e) => {
        e.preventDefault()
        setLoading(true)
        const user = await userSession()
        const userId = user?.id
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const amenities = formData.getAll("aminity");
        const ownerData = {
            ...data,
            amenities,
            userId,
            status: 'Pending'
        }

        const postData = await postOwnerProperty(ownerData)
        console.log(postData, 'from from handle post');
        setLoading(false)
        e.target.reset()
    }

    return (
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8">Add Property</h2>

            <form onSubmit={formHandle} className="space-y-6">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Property Title
                        </label>
                        <input
                            required
                            name="propertyName"
                            type="text"
                            placeholder="Luxury Apartment in Dhaka"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Location
                        </label>
                        <input
                            required
                            name="location"
                            type="text"
                            placeholder="Khulna, Bangladesh"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Property Type
                        </label>
                        <select required name="propertyType" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                            <option>Select Type</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Villa</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Rent Type
                        </label>
                        <select required name="rentyType" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500">
                            <option>Select Rent Type</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Monthly Rent
                        </label>
                        <input
                            required
                            name="monthlyRent"
                            type="number"
                            placeholder="15000"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Property Size (sqft)
                        </label>
                        <input
                            required
                            name="size"
                            type="number"
                            placeholder="1200"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>

                {/* Row 4 */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Bedrooms
                        </label>
                        <input
                            required
                            name="bedrooms"
                            type="number"
                            placeholder="2"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Bathrooms
                        </label>
                        <input
                            required
                            name="bathrooms"
                            type="number"
                            placeholder="2"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>

                {/* Row 5 */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Extra Features
                        </label>
                        <input
                            required
                            name="extraFeature"
                            type="text"
                            placeholder="Balcony, Pet Friendly, Rooftop, CCTV"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Image URL
                        </label>
                        <input
                            required
                            name="image"
                            type="url"
                            placeholder="Cloudinary / ImgBB URL"
                            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        required
                        name="description"
                        rows="4"
                        placeholder="Write property details..."
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                {/* Amenities */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Amenities</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {[
                            { icon: FaWifi, label: "WiFi" },
                            { icon: FaParking, label: "Parking" },
                            { icon: FaShieldAlt, label: "Security" },
                            { icon: FaBolt, label: "Generator" },
                            { icon: FaSnowflake, label: "Air Conditioning" },
                            { icon: FaDumbbell, label: "Gym" },
                            { icon: MdElevator, label: "Lift" },
                            { icon: FaSwimmingPool, label: "Swimming Pool" },
                        ].map((item) => (
                            <label
                                key={item.label}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <input type="checkbox" className="w-4 h-4" name="aminity" value={item.label} />
                                <item.icon className="text-cyan-600 text-lg" />
                                <span>{item.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                    {
                        loading ? 'Posting...' : 'Add Property'
                    }

                </button>
            </form>
        </div>
    );
}