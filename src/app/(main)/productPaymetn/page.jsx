import { stripe } from '@/lib/stripe'
import { bookingPost } from '@/lib/tanant/tanantpost'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        metadata,
        customer_details: { email: customerEmail }
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }
    const bookings = {
        ...metadata,
        // sessionId: session_id,
        status: 'Pending',
        payStatus: 'paid'
    }
    const booking = await bookingPost(bookings)
    console.log(booking, 'from paymet succews page');
    if (status === 'complete') {

        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <svg
                                className="w-10 h-10 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-slate-800 mb-3">
                        Payment Successful
                    </h1>

                    <p className="text-slate-600 mb-2">
                        Thank you for your booking.
                    </p>

                    <p className="text-sm text-slate-500 mb-6">
                        A confirmation email has been sent to
                    </p>

                    <p className="font-medium text-emerald-600 break-all mb-8">
                        {customerEmail}
                    </p>

                    <div className="flex gap-3">
                        <a
                            href="/deshboard/tanant"
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition"
                        >
                            Go to Deshboard
                        </a>

                        <Link
                            href="/"
                            className="flex-1 border border-slate-300 hover:bg-slate-100 py-3 rounded-xl font-medium transition"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}