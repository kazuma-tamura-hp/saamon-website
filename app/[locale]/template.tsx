"use client";

import { motion } from "framer-motion";

export default function LocaleTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: 0.7,
        ease: [0.12, 0.9, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
