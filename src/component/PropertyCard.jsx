import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function PropertyCard({ property }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">

      {/* Image Container with Zoom Effect */}
      <div className="relative overflow-hidden aspect-[4/3] w-full">
        <Image
          src={property?.image || "/placeholder.jpg"}
          alt={property?.propertyName || "Property"}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-gray-800 font-medium text-xs px-3 py-1.5 rounded-full shadow-sm tracking-wide">
          {property?.propertyType}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">

        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center text-gray-400 text-xs font-medium tracking-wide uppercase gap-1.5">
            <FaMapMarkerAlt className="text-rose-500 shrink-0" />
            <span className="truncate">{property?.location || "Location N/A"}</span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">
            {property?.propertyName}
          </h2>
        </div>

        {/* Rent & Action Section */}
        <div className="pt-2 border-t border-gray-50 flex items-center justify-between gap-2">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Monthly Rent</p>
            <p className="text-gray-500 text-sm font-medium">
              <span className="text-xl font-extrabold text-blue-600">৳{property?.monthlyRent}</span> / mo
            </p>
          </div>

          {/* Call to Action Link styled as a modern Button */}
          <Link
            href={`/allProperty/${property?._id}`}
            className="inline-flex items-center justify-center gap-2  bg-cyan-500 hover:bg-blue-600 text-gray-700 font-medium text-sm px-4 hover:text-white py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-200"
          >
            Details
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}