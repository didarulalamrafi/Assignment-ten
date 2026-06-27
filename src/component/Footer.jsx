"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "./Logo";

export default function Footer() {
  const pathName = usePathname();
  if (pathName.startsWith("/deshboard")) {
    return null;
  }
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-slate-200 mt-4 text-sm leading-relaxed max-w-sm">
              Manage bookings, owners, tenants, and properties effortlessly with
              a sleek, high-performance dashboard.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-200 text-sm">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-white transition cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/allProperty"}
                  className="hover:text-white transition cursor-pointer"
                >
                  All Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-200 text-sm flex items-center gap-2">
              <MdOutlineMailOutline size={25} className="text-white" />{" "}
              support@primehaven.com
            </p>
            <p className="text-slate-200 text-sm flex items-center gap-2">
              <IoLocationOutline size={25} className="text-white" /> Chattogram,
              Bangladesh
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-300 text-sm">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} PropertyHub. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <span className="hover:text-cyan-200 cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-cyan-200 cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-cyan-200 cursor-pointer transition">
              Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
