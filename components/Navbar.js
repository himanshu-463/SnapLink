import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-500 text-white flex items-center justify-between px-10">
      <div className="logo font-bold text-2xl">
        <Link href="/">
          SnapLink
        </Link>
        </div>
      <ul className=" flex items-center justify-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1">Try Now</button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1">GitHub</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
