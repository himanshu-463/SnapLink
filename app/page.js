import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const poppins = Geist({
  src: "./fonts/Poppins-Extrabold",
  variable: "--font-poppins",
  weight: "900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-[#d5dcf1]">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className} `}>
            The best URL shortener in the Market
          </p>
          <p className="px-33">
            We are the most straightfoward UR do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
           <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-blue-950 shadow-lg p-3 rounded-lg font-bold py-1 text-white text-center">Try Now</button>
          </Link>
          <Link href="/github">
            <button className="bg-blue-950 shadow-lg p-3 rounded-lg font-bold py-1 text-white text-center">GitHub</button>
          </Link>
        </li>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="an Image of a vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
