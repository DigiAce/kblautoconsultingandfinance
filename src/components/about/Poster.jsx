import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const defaultPosters = [
  { src: "/img/1.jpeg", alt: "Poster 1" },
  { src: "/img/2.jpeg", alt: "Poster 2" },
  { src: "/img/3.jpeg", alt: "Poster 3" },
  { src: "/img/4.jpeg", alt: "Poster 4" },
  { src: "/img/5.jpeg", alt: "Poster 5" },
  { src: "/img/6.jpeg", alt: "Poster 6" },
];

export default function Poster({ posters = defaultPosters }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const activePoster = useMemo(() => {
    if (activeIndex === null) return null;
    return posters[activeIndex] || null;
  }, [activeIndex, posters]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* <div className="mb-8 text-center">
          <p className="text-sm font-medium tracking-[0.25em] text-slate-500 uppercase">
            KBL Poster Collection
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Poster Gallery
          </h1>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Click any poster to view it in full screen.
          </p>
        </div> */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt=16">
          {posters.map((poster, index) => (
            <button
              key={`${poster.src}-${index}`}
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              <div className="relative aspect-[4/5] bg-slate-100">
                <img
                  src={poster.src}
                  alt={poster.alt || `Poster ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-700 shadow-sm backdrop-blur">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
                <div className="text-left">
                  <p className="text-sm font-medium text-slate-900">
                    Poster {index + 1}
                  </p>
                  <p className="text-xs text-slate-500">Tap to open</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activePoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-slate-700 shadow-md transition hover:bg-slate-100"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[90vh] overflow-auto p-4 sm:p-6">
                <img
                  src={activePoster.src}
                  alt={activePoster.alt || "Selected poster"}
                  className="mx-auto h-auto w-full rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
