import {
    FaHome,
    FaHeart,
    FaUserShield,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const features = [
    {
        icon: <FaHome size={24} />,
        badgeBg: "bg-blue-50 text-blue-600",
        title: "Verified Properties",
        description:
            "Browse trusted and verified rental properties with complete details.",
    },
    {
        icon: <MdPayments size={24} />,
        badgeBg: "bg-emerald-50 text-emerald-600 ",
        title: "Secure Payments",
        description:
            "Pay rent securely through Stripe with a smooth checkout experience.",
    },
    {
        icon: <FaHeart size={24} />,
        badgeBg: "bg-rose-50 text-rose-600",
        title: "Favorites System",
        description:
            "Save your favorite properties and access them anytime.",
    },
    {
        icon: <FaUserShield size={24} />,
        badgeBg: "bg-purple-50 text-purple-600",
        title: "Role-Based Access",
        description:
            "Separate dashboards and permissions for tenants and property owners.",
    },
];

export default function WhyChoosePropertyHub() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100/60 px-6">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 mb-4">
                        Why Choose Property
                        <span className="text-cyan-600 italic">
                            Hub?
                        </span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        A modern platform that makes renting and managing properties
                        simple, secure, and efficient.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl border border-slate-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:bg-primary/[0.01] hover:border-primary/20 cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 ${feature.badgeBg}`}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-primary">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}