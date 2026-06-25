"use client"
import { motion } from "motion/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaLocationPinLock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const SearchSection = () => {
    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [sortBy, setSortBy] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        redirect(`/allProperty?search=${location || propertyType}&sortBy=monthlyRent&order=${sortBy}`)
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -100,
                y: 100
            }}
            animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.9, ease: 'easeIn' }
            }}
            className="p-6 md:p-10 bg-gray-300/50 backdrop-blur-md rounded-2xl max-w-5xl mx-auto shadow-lg mt-10">
            <form
                onSubmit={handleSearch}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
            >
                {/* Search by Location */}
                <div>
                    <label className="text-lg text-gray-800 font-semibold">
                        Search by Location
                    </label>

                    <div className="relative mt-1">
                        {/* Icon */}
                        <IoLocationOutline size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-100" />

                        {/* Input */}
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g. Dhaka, Chittagong"
                            className="w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                </div>

                {/* Select Property Type */}
                <div>
                    <label className="text-lg text-gray-800 font-semibold">
                        Property Type
                    </label>
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-900"
                    >
                        <option value="">All Types</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="vill">Vill</option>

                    </select>
                </div>

                {/* Sort by Price */}
                <div>
                    <label className="text-lg text-gray-800 font-semibold">
                        Sort By Price
                    </label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-900"
                    >
                        <option value="">Default</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition"
                >
                    Search
                </button>
            </form>
        </motion.div>
    );
};

export default SearchSection;

