import React from "react";
import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
    "https://images.unsplash.com/photo-1553062407-98eeb94c6a62",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    "https://images.unsplash.com/photo-1572509018340-67443106da11",
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
    "https://images.unsplash.com/photo-1553913861-c0fddf2619ee",
    "https://images.unsplash.com/photo-1473625247510-8ceb1760943f",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-black text-zinc-900 mb-12 text-center">
        GALLERY
      </h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={`${img}?auto=format&fit=crop&q=80&w=800`}
              alt={`Gallery ${idx}`}
              className="w-full hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
