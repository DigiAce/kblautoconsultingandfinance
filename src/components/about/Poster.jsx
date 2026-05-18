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
    <div className="min-h-screen bg-[#f4f8ff] text-[#0b2a5b]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-200 bg-white shadow-[0_20px_60px_rgba(15,46,99,0.08)] overflow-hidden">
          <div className="bg-[#0b2a5b] px-6 py-6 sm:px-10 sm:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              KBL Poster Collection
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              White & Blue Poster Gallery
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-blue-100 sm:text-base">
              Tap any poster to open it in a blurred fullscreen preview.
            </p>
          </div>

          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {posters.map((poster, index) => (
                <button
                  key={`${poster.src}-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <div className="relative aspect-[4/5] w-full bg-[#eef4ff]">
                    <img
                      src={poster.src}
                      alt={poster.alt || `Poster ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a5b]/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#0b2a5b] shadow-md backdrop-blur-sm">
                      <ZoomIn className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-blue-100 px-4 py-3 text-left">
                    <div>
                      <p className="text-sm font-semibold text-[#0b2a5b]">
                        Poster {index + 1}
                      </p>
                      <p className="text-xs text-slate-500">Click to view</p>
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#0b2a5b]" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#06162f]/55 p-4 backdrop-blur-lg"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-white/20 bg-white shadow-2xl"
            >
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-[#0b2a5b] p-2 text-white shadow-lg transition hover:scale-105 hover:bg-[#123b7c]"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[90vh] overflow-auto bg-white p-3 sm:p-4">
                <img
                  src={activePoster.src}
                  alt={activePoster.alt || "Selected poster"}
                  className="mx-auto h-auto w-full rounded-[1.25rem] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
