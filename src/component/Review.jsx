import React from "react";
import ClientSaysCard from "./ClientSaysCard";
import { reviewFromCliet } from "@/lib/owner/ownerget";
import Marquee from "react-fast-marquee";

const Review = async () => {
  const reviews = await reviewFromCliet();
  console.log(reviews, "from review");

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 py-16 px-4 rounded-2xl border border-slate-100">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          What Our Clients Say
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed">
          Real feedback from real people. Discover how we help our clients
          achieve their goals and why they love working with us.
        </p>
      </div>

      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor="rgba(248, 250, 252, 0.8)"
        gradientWidth={50}
      >
        <div className="flex items-center gap-8 pr-8 ">
          {reviews?.map((review) => (
            <ClientSaysCard key={review._id} review={review} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
