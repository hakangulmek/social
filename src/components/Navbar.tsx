import React from "react";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
function Navbar() {
  return (
    <div className=" h-24 flex items-center justify-between">
      <div>
        <Link href="/" className="font-bold text-xl text-blue-600">
          Social
        </Link>
      </div>
      <div>2</div>
      <div>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
