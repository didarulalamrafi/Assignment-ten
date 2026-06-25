"use client"
import { clientSays } from '@/lib/owner/ownerpost';
import { userSession } from '@/lib/session';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const ClientSays = () => {
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const clientHandle = async (e) => {
        e.preventDefault();

        // Validation: Ensure user has selected a rating
        if (rating === 0) {
            alert("Please select a rating before submitting!");
            return;
        }

        setLoading(true);
        const user = await userSession();
        const form = e.target;
        const description = form.description.value;

        const clientSay = {
            rating: String(rating), // Sending rating as a string to match your old structure
            description,
            name: user?.name,
            email: user?.email,
            image: user?.image
        };

        const client = await clientSays(clientSay);
        console.log(client, 'from client saysa');
        setLoading(false);
        setRating(0); // Reset rating state
        form.reset(); // Reset textarea
    };

    return (
        <div className="max-w-3xl bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-5">Leave a Review</h3>

            <form onSubmit={clientHandle} className="flex flex-col md:flex-row gap-6 items-start">

                {/* Textarea Field */}
                <div className="flex-1 w-full">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        What do you think about this property?
                    </label>
                    <textarea
                        rows={4}
                        name='description'
                        required
                        placeholder="Share your detailed experience about the neighborhood, space, or owner..."
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    />
                </div>

                {/* Rating & Submission Action Column */}
                <div className="w-full md:w-56 flex flex-col justify-between h-full self-stretch">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                            Your Rating
                        </label>

                        {/* Interactive Stars Component */}
                        <div className="flex items-center gap-1.5 mb-6">
                            {[...Array(5)].map((_, index) => {
                                const currentRating = index + 1;
                                return (
                                    <button
                                        key={currentRating}
                                        type="button"
                                        className="transition-transform duration-100 active:scale-90"
                                        onClick={() => setRating(currentRating)}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        <FaStar
                                            size={26}
                                            className={`transition-colors duration-200 cursor-pointer ${currentRating <= (hover || rating)
                                                ? "text-amber-400"
                                                : "text-gray-200"
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                            {rating > 0 && (
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded ml-1">
                                    {rating}/5
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center ${loading
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-md hover:shadow-blue-100'
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <span className="h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
                                Posting...
                            </span>
                        ) : (
                            'Submit Review'
                        )}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ClientSays;