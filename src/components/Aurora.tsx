"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function Aurora() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-base" />

      <motion.div
        style={{ y: y1 }}
        className="animate-float-slow absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,210,63,0.30),transparent_62%)] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="animate-float-slow-2 absolute -right-52 top-1/3 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(247,143,30,0.22),transparent_62%)] blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="animate-float-slow absolute bottom-0 left-1/4 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,122,69,0.16),transparent_60%)] blur-3xl"
      />

      {/* grain + vignette */}
      <div className="bg-grain absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
