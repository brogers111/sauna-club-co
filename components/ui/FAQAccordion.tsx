"use client";

import { useState, type ReactNode } from "react";
import { ArrowIcon } from "./ArrowIcon";

const FADE_MS = 300;

type FAQ = { question: string; answer: ReactNode };

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false);

  function toggle() {
    if (open) {
      setAnswerVisible(false); // fade the answer out first
      window.setTimeout(() => setOpen(false), FADE_MS);
    } else {
      setOpen(true);
      // Wait a frame so the answer paints at opacity-0 before flipping to
      // opacity-100 — otherwise there's no prior frame to transition from.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnswerVisible(true));
      });
    }
  }

  return (
    <div className="border-b border-black/10 py-4">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <h3 className="font-display text-xl uppercase tracking-wide text-black">{faq.question}</h3>
        {/* Rotation lives on this wrapper, separate from ArrowIcon's own
            fixed "right" orientation, so the two transforms compose instead
            of fighting over the same class list — this one just adds a
            clean +90° turn on top. */}
        <span className={`inline-block shrink-0 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}>
          <ArrowIcon direction="right" className="h-5 w-5 text-black" />
        </span>
      </button>
      {open ? (
        <p className={`mt-3 text-black/80 transition-opacity duration-300 ${answerVisible ? "opacity-100" : "opacity-0"}`}>
          {faq.answer}
        </p>
      ) : null}
    </div>
  );
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="flex flex-col">
      {faqs.map((faq) => (
        <FAQItem key={faq.question} faq={faq} />
      ))}
    </div>
  );
}
