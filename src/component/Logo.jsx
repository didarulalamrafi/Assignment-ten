import Link from "next/link";
import React from "react";
import { FcHome } from "react-icons/fc";
import { IoHome } from "react-icons/io5";

const Logo = () => {
  return (
    <div>
      {/* LEFT */}
      <Link href="/" className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-pink-500/10 border border-pink-300/30">
          <FcHome size={26} className="text-pink-500" />
        </div>

        <h1 className="text-3xl font-bold tracking-wide">PrimeHaven</h1>
      </Link>
    </div>
  );
};

export default Logo;
