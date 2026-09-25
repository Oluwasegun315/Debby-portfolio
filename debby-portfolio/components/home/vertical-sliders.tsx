"use client";

const phrases = [
  "Social Media Design",
  "Canva Templates",
  "PowerPoint",
  "Presentation Design",
  "Ebook Cover Design",
  "Hire Debby",
  "Order on Fiverr",
  "Client-focused design",
];

export function VerticalSliders() {
  const loop = [...phrases, ...phrases];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 right-0 z-[1] hidden overflow-hidden lg:block"
    >
      <div className="absolute left-3 top-0 h-full w-10 overflow-hidden opacity-35">
        <div className="vertical-slide vertical-slide-up">
          {loop.map((text, index) => (
            <span
              key={`up-${text}-${index}`}
              className="block py-6 text-[11px] uppercase tracking-[0.28em] text-[#1B2A41] [writing-mode:vertical-rl]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-3 top-0 h-full w-10 overflow-hidden opacity-35">
        <div className="vertical-slide vertical-slide-down">
          {loop.map((text, index) => (
            <span
              key={`down-${text}-${index}`}
              className="block py-6 text-[11px] uppercase tracking-[0.28em] text-[#C97B84] [writing-mode:vertical-rl]"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
