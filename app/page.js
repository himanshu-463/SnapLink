import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import TypedText from "@/components/TypedText";

const poppins = Geist({
  src: "./fonts/Poppins-Extrabold",
  variable: "--font-poppins",
  weight: "900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="">
      <section className="flex h-[50vh] my-50">
        <div className=" flex flex-col gap-4 items-start mx-40 justify-center">
          <p className={`text-3xl font-bold ${poppins.className} `}>
            The Best URL Shortener in the Market
          </p>
          <p className="my-3">
            SnapLink is a fast and privacy-first URL shortener that keeps your
            data safe.
          </p>
          <div className="flex flex-start">
            <span>
              <TypedText />
            </span>
          </div>
          <li className="flex gap-3 my-3 items-start">
            <Link href="/shorten">
              <button className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 text-white text-center">
                Try Now
              </button>
            </Link>
            <a
              href="https://github.com/himanshu-463"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500  text-white shadow-lg p-3 rounded-lg font-bold py-1"
            >
              GitHub
            </a>
          </li>
        </div>
        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="an Image of a vector"
            src={"/vector.jpg"}
            height={500}
            width={500}
          />
        </div>
      </section>
    </main>
  );
}
