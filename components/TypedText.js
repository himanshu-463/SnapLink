"use client"; // (for Next.js 13+ with app directory)

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Privacy-First", "No Tracking URL", "Data-Safe URL","Privacy Friendly Link Tool"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      // Destroy instance on unmounting
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="text-purple-600 font-bold"></span>;
}
