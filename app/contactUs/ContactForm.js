"use client";

import React from "react";
import Image from "next/image";


export default function Contact() {
  return (
    <>
      <form>
        <div className=" min-h-screen text-black flex justify-center items-center ">
          <div className="w-full max-w-md mx-4 rounded-2xl bg-purple-100 shadow-xl p-4 sm:p-8">
            <div className="font-bold text-2xl flex justify-center py-6">
              Contact Us
            </div>

            <div className="flex items-center bg-white rounded-full p-2 w-full  mb-4 hover:scale-105 transition">
              <Image
                height={24}
                width={24}
                src="/person.png"
                alt="person"
                className="ml-2"
              />
              <input
                type="text"
                placeholder="Name"
                id="Name"
               
                className="bg-white focus:outline-purple-600  outline-none ml-3 w-full placeholder:text-gray-500  "
              />
            </div>
            <div className="flex items-center bg-white rounded-full p-2 w-full  mb-4 hover:scale-105 transition">
              <Image
                height={100}
                width={100}
                src="/emailsta.png"
                alt="email"
                className="w-6 h-6 ml-3 "
              />
              <input
                type="text"
                placeholder="Email"
                id="Email"
                
                className="text-shadow-black outline-none bg-white focus:outline-purple-600 ml-3 w-full placeholder:text-gray-500 "
              />
            </div>
            <div className="flex flex-col items-center justify-center mr-2  my-3 ">
              {/* Message Textarea */}
              <textarea
                placeholder="Message"
                id="Message"
                rows={4}
                className="bg-white rounded-xl w-full max-w-md  p-4 text-shadow-black placeholder:text-gray-500 outline-none resize-none mb-4 hover:transform transition duration-300 hover:scale-105"
              />

              {/* Send Button */}
              <button
                type="submit"
                className="bg-purple-500 w-full text-white font-medium py-3 px-8 rounded-full hover:bg-purple-600 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
