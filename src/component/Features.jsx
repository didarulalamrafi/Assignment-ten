import { FaHome, FaCalendarCheck, FaUsers } from "react-icons/fa";

export default function FeaturesSection() {
    return (
        <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-slate-100/60">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                        Key Features
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Everything you need to streamline property operations, enhance booking experiences,
                        and manage users effortlessly.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="group p-8 bg-white rounded-2xl border border-slate-200/50 shadow-sm text-center
                        transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md 
                        hover:bg-primary/[0.02] hover:border-primary/20 cursor-pointer">

                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-105">
                            <FaHome className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary">
                            Property Management
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                            Seamlessly list, update, and oversee your entire real estate portfolio from a single, intuitive dashboard.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-8 bg-white rounded-2xl border border-slate-200/50 shadow-sm text-center
                        transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md 
                        hover:bg-primary/[0.02] hover:border-primary/20 cursor-pointer">

                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-105">
                            <FaCalendarCheck className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary">
                            Smart Booking System
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                            Track applications, manage reservations, and deliver real-time status updates to clients instantly.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group p-8 bg-white rounded-2xl border border-slate-200/50 shadow-sm text-center
                        transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md 
                        hover:bg-primary/[0.02] hover:border-primary/20 cursor-pointer">

                        <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-105">
                            <FaUsers className="text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary">
                            Advanced User Roles
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                            Take full control with dedicated panels and granular permissions for owners, managers, and tenants.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}