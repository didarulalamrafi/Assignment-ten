"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Dropdown } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import Logo from './Logo';

const Navbar = () => {
    const pathName = usePathname()
    const { data: session } = authClient.useSession()
    const name = session?.user?.name.split(" ")[0]
    console.log(session, 'from navabar');
    const logOutHanle = async () => {
        await authClient.signOut()
        redirect("/")
    }

    const LinksNav = <>
        <li className={`${pathName === '/' && 'border-b-4 pb-1'}`}><Link href={'/'}>Home</Link></li>
        <li className={`${pathName === '/allProperty' && 'border-b-4 pb-1'}`}><Link href={'/allProperty'}>All Properties</Link></li>
    </>

    const LinksProfile = <>
        <li className={`${pathName === `/deshboard/${session?.user?.role}` && 'border-b-4 pb-1'}`}><Link href={`/deshboard/${session?.user?.role}`}>Dashboard</Link></li>
    </>

    if (pathName.startsWith("/deshboard")) {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-cyan-900/80 via-sky-800/80 to-blue-900/80 border-b border-cyan-400/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">

                <Logo />

                {/* CENTER (Desktop) */}
                <ul className="hidden lg:flex gap-6 font-medium">
                    {LinksNav}
                    {session && LinksProfile}
                </ul>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    {session ? (
                        <>
                            <Dropdown>
                                <Button
                                    variant="ghost"
                                    aria-label="Menu"
                                    className="p-0 h-auto hover:bg-transparent focus:bg-transparent active:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                >
                                    <Image
                                        width={48}
                                        height={48}
                                        alt="profile"
                                        src={session?.user?.image || "https://i.pravatar.cc/150"}
                                        className="rounded-full border-2 h-12 w-12 border-cyan-300 object-cover"
                                    />
                                </Button>
                                <Dropdown.Popover>
                                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                        <Dropdown.Item textValue="Profile">
                                            <Link
                                                href={`/deshboard/${session?.user?.role}/profile`}
                                                className="w-full block"
                                            >
                                                Profile
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item textValue="Dashboard">
                                            <Link
                                                href={`/deshboard/${session?.user?.role}`}
                                                className="w-full block"
                                            >
                                                Dashboard
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item variant="danger" textValue="Sign Out">
                                            <button
                                                onClick={logOutHanle}
                                                className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-1 rounded"
                                            >
                                                Sign Out
                                            </button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>

                            {/* Avatar */}
                            <div className="relative group">
                            </div>

                            <span className="hidden text-xl md:block text-cyan-100 -ml-6 font-medium">
                                Hi, {name}
                            </span>
                        </>
                    ) : (
                        <>
                            {/* Desktop Buttons */}
                            <div className="hidden lg:flex gap-3">
                                <Link href="/login">
                                    <button className="px-4 py-2 border border-cyan-300 text-cyan-200 rounded-lg hover:bg-cyan-500 hover:text-black transition">
                                        Login
                                    </button>
                                </Link>

                                <Link href="/register">
                                    <button className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition">
                                        Create Account
                                    </button>
                                </Link>
                            </div>

                            {/* Mobile Hamburger Menu */}
                            <div className="lg:hidden">
                                <Dropdown>
                                    <Button
                                        variant="ghost"
                                        aria-label="Menu"
                                        className="text-white text-3xl border-cyan-400/40 hover:bg-cyan-500/20"
                                    >
                                        Menu
                                    </Button>

                                    <Dropdown.Popover>
                                        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                            <Dropdown.Item textValue="Home">
                                                <Link href="/" className="w-full block py-1">Home</Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item textValue="All Properties">
                                                <Link href="/allProperty" className="w-full block py-1">All Properties</Link>
                                            </Dropdown.Item>

                                            {session && (
                                                <>
                                                    <Dropdown.Item textValue="Dashboard">
                                                        <Link href={`/deshboard/${session?.user?.role}`} className="w-full block py-1">Dashboard</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item textValue="My Bookings">
                                                        <Link href="/my-booking" className="w-full block py-1">My Bookings</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item variant="danger" textValue="Sign Out">
                                                        <button onClick={logOutHanle} className="w-full text-left text-red-500 font-medium py-1">
                                                            Sign Out
                                                        </button>
                                                    </Dropdown.Item>
                                                </>
                                            )}

                                            {!session && (
                                                <Dropdown.Section title="Account" className="border-t border-gray-200 mt-2 pt-2">
                                                    <Dropdown.Item textValue="Login">
                                                        <Link href="/login" className="w-full block py-1 font-medium text-cyan-600">Login</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item textValue="Register">
                                                        <Link href="/register" className="w-full block py-1 font-medium text-cyan-600">Register</Link>
                                                    </Dropdown.Item>
                                                </Dropdown.Section>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;