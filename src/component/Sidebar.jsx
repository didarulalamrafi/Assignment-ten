"use client";

import { usePathname } from "next/navigation";
import { Button, Drawer, Menu } from "@heroui/react";
import Link from "next/link";
import { BsHouse, BsJournalCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHome, IoReceiptOutline } from "react-icons/io5";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Logo from "./Logo";

export function Sidebar({ user }) {
    const pathname = usePathname();
    const navigatinItem = {
        admin: [
            { icon: CgProfile, label: "Profile", href: "/deshboard/admin/profile" },
            { icon: BsHouse, label: "Home", href: "/deshboard/admin" },
            { icon: FaUsers, label: "All Users", href: "/deshboard/admin/totalUsers" },
            { icon: MdOutlineRealEstateAgent, label: "All Properties", href: "/deshboard/admin/totalOwners" },
            { icon: HiOutlineClipboardDocumentCheck, label: "All Bookings", href: "/deshboard/admin/totalBookings" },
        ],
        owner: [
            { icon: CgProfile, label: "Profile", href: "/deshboard/owner/profile" },
            { icon: BsHouse, label: "Home", href: "/deshboard/owner" },
            { icon: IoIosAddCircleOutline, label: "Add Property", href: "/deshboard/owner/addProperty" },
            { icon: IoReceiptOutline, label: "My Property", href: "/deshboard/owner/myproperty" },
            { icon: HiOutlineClipboardDocumentCheck, label: "Booked Property", href: "/deshboard/owner/bookedProperty" },
        ],
        tanant: [
            { icon: CgProfile, label: "Profile", href: "/deshboard/tanant/profile" },
            { icon: BsHouse, label: "Home", href: "/deshboard/tanant" },
            { icon: BsJournalCheck, label: "My Booking", href: "/deshboard/tanant/myBooking" },
            { icon: GiSelfLove, label: "favourite", href: "/deshboard/tanant/favourite" },
        ],
    };

    const navItems = navigatinItem[user?.role || "tanant"];

    const isActive = (href) => pathname === href;

    return (
        <div className="bg-white md:min-h-screen md:w-70 border-r border-slate-200 shadow-sm pl-5">
            {/* Logo */}
            <div className="hidden md:flex">
                <Logo />
            </div>
            {/* <Link href="/" className=" items-center gap-3 mb-5">
                <div className="p-2 rounded-full bg-cyan-50 border border-cyan-200">
                    <IoHome size={24} className="text-cyan-600" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800">
                    Property
                    <span className="text-cyan-600 italic">Hub </ span>
                </h1>
            </Link> */}

            {/* Dashboard Title */}
            <h2 className="text-xl hidden md:flex items-center gap-2 font-semibold text-slate-700 my-6">
                <span className="text-cyan-600 font-bold capitalize">
                    {user?.role}
                </span>{" "}
                Dashboard
            </h2>

            {/* Desktop Menu */}
            <nav className="hidden md:flex flex-col gap-2">
                {navItems?.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            href={item.href}
                            key={item.label}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${active
                                ? "bg-cyan-600 text-white font-medium shadow-md shadow-cyan-100"
                                : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
                                }`}
                        >
                            <item.icon className={`text-lg ${active ? "text-white" : ""}`} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Mobile Drawer */}
            <div className="md:hidden">
                <Drawer>
                    <Button
                        variant="secondary"
                        className="w-full bg-cyan-50 text-cyan-700 border border-cyan-200"
                    >
                        <Menu size={20} />
                        Menu
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content placement="left" className="bg-white">
                            <Drawer.Dialog>
                                <Drawer.CloseTrigger />

                                <Drawer.Header>
                                    <Drawer.Heading className="text-slate-800">
                                        <Logo />

                                        <h2 className="text-xl flex items-center gap-2 font-semibold mt-3 text-slate-700 mb-6">
                                            <span className="text-cyan-600 text-2xl font-bold capitalize">
                                                {user?.role}
                                            </span>{" "}
                                            Dashboard
                                        </h2>
                                    </Drawer.Heading>
                                </Drawer.Header>

                                <Drawer.Body>
                                    <nav className="flex flex-col gap-2">
                                        {navItems?.map((item) => {
                                            const active = isActive(item.href);
                                            return (
                                                <Link
                                                    href={item.href}
                                                    key={item.label}
                                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${active
                                                        ? "bg-cyan-600 text-white font-medium shadow-sm"
                                                        : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
                                                        }`}
                                                >
                                                    <item.icon className={`text-lg ${active ? "text-white" : ""}`} />
                                                    <span>{item.label}</span>
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </div>
    );
}