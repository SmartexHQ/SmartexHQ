"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function useArrayRef<T>() {
  const lettersRef = useRef<T[]>([]);
  lettersRef.current = [];
  return [
    lettersRef,
    (ref: T | null) => {
      if (ref) lettersRef.current.push(ref);
    },
  ] as const;
}

const TextReveal: React.FC = () => {
  const [lettersRef, setLettersRef] = useArrayRef<HTMLSpanElement>();
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  // Updated text for Susej's smart prepaid meter
  const text =
    "Take control of your electricity with Susej Smart Prepaid Meters—reliable, efficient, and easy to manage from anywhere.";

  useEffect(() => {
    if (!triggerRef.current || lettersRef.current.length === 0) return;

    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 0.1,
    });

    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <>
      <div className="spacing-small"></div>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setLettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="spacing"></div>
    </>
  );
};

export default TextReveal;
