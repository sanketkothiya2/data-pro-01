"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function Aurora() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />

      {/* parallax grid */}
      <motion.div
        style={{ y: gridY }}
        className="bg-grid absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_50%_30%,#000_30%,transparent_75%)]"
      />

      {/* warm blob */}
      <motion.div
        style={{ y: y1 }}
        className="animate-float-slow absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,210,63,0.26),transparent_62%)] blur-3xl"
      />
      {/* cyan blob */}
      <motion.div
        style={{ y: y2 }}
        className="animate-float-slow-2 absolute -right-52 top-1/3 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_62%)] blur-3xl"
      />
      {/* violet blob */}
      <motion.div
        style={{ y: y3 }}
        className="animate-float-slow absolute bottom-0 left-1/4 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,108,255,0.16),transparent_60%)] blur-3xl"
      />

      <div className="bg-grain absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(3,5,11,0.6))]" />
    </div>
  );
}
