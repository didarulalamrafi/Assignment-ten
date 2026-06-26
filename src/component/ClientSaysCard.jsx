import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ClientSasyCard = ({ review }) => {
  return (
    <div className="group max-w-[320px] bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/50 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
      <div className="p-6 relative">
        {/* Decorative background element on hover */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-primary mb-4 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" />

        {/* Star Ratings */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-base transition-transform duration-300 group-hover:scale-110`}
              style={{ transitionDelay: `${index * 50}ms` }}
              color={index < Number(review.rating) ? "#FACC15" : "#CBD5E1"} // text-yellow-400 or text-slate-300
            />
          ))}
        </div>

        {/* User Info */}
        <div className="border-t border-slate-100 pt-5">
          {/* Image Wrapper for Zoom Effect */}
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary shadow-sm group-hover:shadow-md transition-all duration-500">
            <Image
              src={review.image}
              alt={review.name}
              width={200}
              height={200}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div>
            <h4 className="font-bold text-xl mt-4 mb-1 text-center text-slate-800 group-hover:text-primary transition-colors duration-300">
              {review.name}
            </h4>
            <p className="text-xs text-center text-slate-400 group-hover:text-slate-500 transition-colors duration-300 mb-4">
              {review.email}
            </p>
          </div>

          {/* Review Description Box */}
          <p className="bg-slate-50 group-hover:bg-primary/[0.02] rounded-xl border border-slate-200 group-hover:border-primary/20 p-4 text-slate-600 text-sm leading-relaxed text-center shadow-inner transition-all duration-500">
            {review.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientSasyCard;
