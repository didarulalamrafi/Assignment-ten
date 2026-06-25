
import { Accordion } from "@heroui/react";
import { BiChevronDown } from "react-icons/bi";

const faqItems = [
    {
        title: "How do I list my property on PropertyHub?",
        content: "As an owner, you can register, go to your dedicated dashboard, and click on 'Add Property'. Fill in the details, upload photos, and your property will be listed after a quick verification.",
    },
    {
        title: "Is the payment process secure?",
        content: "Yes, absolutely. We use Stripe, one of the world's leading payment gateways. Your card details are completely encrypted and securely processed; we do not store any payment credentials.",
    },
    {
        title: "How does the favorites or wishlist system work?",
        content: "When browsing properties, you can click the heart icon on any property card. This saves it to your personal wishlist, which you can access anytime from your user dashboard to compare later.",
    },
    {
        title: "Can I communicate directly with property owners?",
        content: "Yes! PropertyHub provides a seamless contact and booking system. Once you express interest or request a booking, owners can view your profile and contact details to proceed further.",
    },
    {
        title: "What is Role-Based Access?",
        content: "It means the platform changes based on who you are. Tenants see options for finding homes and tracking rent, while property owners get a powerful dashboard to manage listings, track payments, and accept bookings.",
    },
];

export default function FAQSection() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Got questions? We have answers. Explore our most common inquiries about
                        renting, managing, and payments.
                    </p>
                </div>

                {/* HeroUI Accordion Component with your requested structure */}
                <Accordion className="w-full space-y-4" variant="surface">
                    {faqItems.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            className="bg-white border border-slate-200/60 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20"
                        >
                            <Accordion.Heading>
                                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 md:text-lg hover:text-primary transition-colors duration-200 group focus:outline-none">
                                    {item.title}
                                    <Accordion.Indicator className="ml-4 text-slate-400 transition-transform duration-300 group-data-[open=true]:rotate-180 group-data-[open=true]:text-primary flex-shrink-0">
                                        <BiChevronDown size={18} />
                                    </Accordion.Indicator>
                                </Accordion.Trigger>
                            </Accordion.Heading>

                            <Accordion.Panel className="border-t border-slate-100/80 bg-slate-50/30">
                                <Accordion.Body className="p-6 text-slate-600 leading-relaxed text-sm md:text-base">
                                    {item.content}
                                </Accordion.Body>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>

            </div>
        </section>
    );
}