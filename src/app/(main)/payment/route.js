import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { userSession } from '@/lib/session'

export async function POST(request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')
        const user = await userSession()
        const formData = await request.formData()
        const price = formData.get('price')
        const title = formData.get('title')
        const productId = formData.get('productId')
        const ownerId = formData.get('ownerId')
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.email,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        unit_amount: Number(price) * 100,
                        product_data: {
                            name: title,
                        }
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                price,
                title,
                productId: productId,
                ownerId,
                userEmail: user?.email,
            },
            mode: 'payment',
            success_url: `${origin}/productPaymetn?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}