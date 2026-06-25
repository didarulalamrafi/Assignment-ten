"use client";
import { motion } from "motion/react"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Register = () => {
    const [loadig, setLoading] = useState(false)
    const [errors, setErrors] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signUp.email({
            name: user?.name, // required
            email: user?.email, // required
            password: user?.password, // required
            image: user?.photoUrl,
            callbackURL: "/",
        });
        setErrors(error?.message)
        console.log(data, error);
        setLoading(false)
    };


    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] px-4 selection:bg-emerald-500 selection:text-black">

            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, ease: 'easeIn' } }}
                className="w-full max-w-md bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl p-8 backdrop-blur-sm z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                        Create Account
                    </h2>
                    <p className="text-sm text-gray-400">
                        Register to start booking rental properties
                    </p>
                </div>

                <form

                    onSubmit={handleSubmit} className="space-y-5">

                    {/* name */}
                    <div className="group">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors duration-200">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-3 bg-[#1F2937] border border-gray-700 rounded-xl text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                        />
                    </div>

                    {/* emial */}
                    <div className="group">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors duration-200">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3 bg-[#1F2937] border border-gray-700 rounded-xl text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                        />
                    </div>

                    {/* url*/}
                    <div className="group">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors duration-200">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photoUrl"
                            placeholder="Enter your photo URL"
                            className="w-full px-4 py-3 bg-[#1F2937] border border-gray-700 rounded-xl text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                        />
                    </div>
                    {/* password */}
                    <div className="group">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 group-focus-within:text-emerald-400 transition-colors duration-200">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-3 bg-[#1F2937] border border-gray-700 rounded-xl text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                        />
                    </div>
                    <p className="text-lg font-semibold text-red-500">{errors}</p>

                    <button
                        type="submit"
                        className="w-full mt-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-[#0B0F19] font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 active:scale-[0.98] transition-all duration-200"
                    >
                        {
                            loadig ? 'Register...' : 'Register'
                        }

                    </button>
                </form>

                <div className="relative my-6 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <span className="relative px-3 bg-[#111827] text-xs font-semibold uppercase tracking-wider text-gray-500">
                        OR
                    </span>
                </div>

                {/* google */}
                <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#1F2937] border border-gray-700 hover:border-gray-600 text-gray-200 font-medium rounded-xl hover:bg-[#253142] active:scale-[0.98] transition-all duration-200"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" className="text-[#4285F4]" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" className="text-[#34A853]" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" className="text-[#FBBC05]" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" className="text-[#EA4335]" />
                    </svg>
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        href={"/login"}
                        className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline transition-colors duration-200"
                    >
                        Login
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Register;