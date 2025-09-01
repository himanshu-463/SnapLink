import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-500 text-white flex items-center justify-between px-10">
      <div className="logo font-bold text-2xl flex items-center gap-2">
        <Image height={30} width={30} src="/logo.gif" alt="Logo" />
        <Link href="/">SnapLink</Link>
      </div>
      <ul className=" flex items-center justify-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href={"/About"}>
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href={"/contactUs"}>
          <li>Contact Us</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1">
              Try Now
            </button>
          </Link>
          <a
            href="https://github.com/himanshu-463"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
