import { BookingModal } from "@/component/BookModal";
import ClientSays from "@/component/ClientSaysForm";
import AddFavouriteHandle from "@/component/CustomHandle";
import { getSingleOwnerDataById } from "@/lib/owner/ownerget";
import { Button } from "@heroui/react";
import Image from "next/image";
import { Suspense } from "react";
import {
    FaMapMarkerAlt,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaHome,
    FaCheckCircle,
    FaMoneyBillWave
} from "react-icons/fa";

export default async function PropertyDetails({ params }) {
    const { id } = await params;
    const property = await getSingleOwnerDataById(id);
    console.log(property, 'from');
    const amenitiesList = property.amenities || [];

    return (
        <div className="min-h-screen bg-slate-50/50 pb-16">


            <div className="max-w-[1400px] mx-auto px-4 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">

                    <div className="lg:col-span-7 space-y-8">

                        {/* Hero Image */}
                        <div className="relative h-[350px] md:h-[480px] w-full rounded-[32px] overflow-hidden shadow-lg group border border-slate-200/40">
                            <Image
                                src={property.image}
                                alt={property.propertyName}
                                fill
                                priority
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                            {/* Floating Property Type Tag */}
                            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/85 dark:bg-slate-900/85 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-white/40">
                                <FaHome size={18} className="text-indigo-600" />
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                                    {property.propertyType}
                                </span>
                            </div>
                        </div>

                        {/* Title & Location Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-50/50">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                {property.propertyName}
                            </h1>
                            <div className="flex items-center gap-3 text-slate-600 mt-4 text-base">
                                <div className="p-2.5 bg-rose-50 rounded-full flex-shrink-0">
                                    <FaMapMarkerAlt size={20} className="text-rose-500" />
                                </div>
                                <span className="font-semibold text-slate-700">{property.location}</span>
                            </div>
                        </div>

                        {/* Property Overview Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-50/50">
                            <h2 className="text-xl font-bold text-slate-900 mb-5">Property Overview</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-indigo-100/50">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                                        <FaHome size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Type</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{property.propertyType}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-emerald-100/50">
                                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                        <FaBed size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Bedrooms</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{property.bedrooms} Beds</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-violet-100/50">
                                    <div className="p-3 bg-violet-50 text-violet-600 rounded-xl">
                                        <FaBath size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Bathrooms</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{property.bathrooms} Baths</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-amber-100/50">
                                    <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                                        <FaRulerCombined size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Area Size</p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{property.size} sqft</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-50/50">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">About This Property</h2>
                            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base font-medium">
                                {property.description}
                            </p>
                        </div>

                        {/* Amenities Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-50/50">
                            <h2 className="text-xl font-bold text-slate-900 mb-5">What This Place Offers</h2>
                            {amenitiesList.length > 0 ? (
                                <div className="flex flex-wrap gap-3">
                                    {amenitiesList.map((item, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50/60 text-emerald-700 border border-emerald-100 font-bold text-sm transition-all duration-300 hover:bg-emerald-50 hover:shadow-sm"
                                        >
                                            <FaCheckCircle className="text-emerald-500" size={14} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-slate-400 text-sm italic">
                                    No standard amenities listed.
                                </p>
                            )}
                        </div>

                        {/* Customer Review Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-50/50">
                            <h2 className="text-xl font-bold text-slate-900 mb-5">Customer Review</h2>
                            <ClientSays />
                        </div>

                        {/* Location Map Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-50/50">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Neighborhood Location</h2>
                            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-inner group">
                                <iframe
                                    title="Property Location"
                                    width="100%"
                                    height="320"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                                        property.location
                                    )}&output=embed`}
                                    className="border-0 w-full transition-transform duration-700 group-hover:scale-[1.01]"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-3 lg:sticky lg:top-6">
                        <div className="w-full bg-white border border-slate-200/60 shadow-lg rounded-[32px] p-6 space-y-6 transition-all duration-300 hover:shadow-xl hover:border-indigo-100/80">

                            {/* Rental Price Header */}
                            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100 flex items-center justify-between transition-colors duration-300 hover:bg-slate-50">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Rent</p>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">৳ {property.monthlyRent}</span>
                                        <span className="text-sm text-slate-500 font-semibold">/mo</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/20">
                                    <FaMoneyBillWave size={22} />
                                </div>
                            </div>

                            {/* Booking Actions */}
                            <div className="flex flex-col gap-3">
                                <Suspense fallback="loading...">
                                    <BookingModal
                                        ownerId={property?.userId}
                                        price={property?.monthlyRent}
                                        productId={property?._id}
                                        title={property?.propertyName}
                                    />
                                </Suspense>

                                <AddFavouriteHandle property={property} />
                            </div>

                            {/* Footer Note */}
                            <p className="text-xs text-center text-slate-400 leading-relaxed px-2">
                                Pressing request connects your profile directly to the landlord to arrange safe check-ins and lock pricing.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}