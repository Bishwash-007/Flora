"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="px-4 md:px-12 pt-24 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0"
          variants={imageVariants}
        >
          <Image
            src="/plant.png"
            alt="Decorative plant"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          variants={textVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-foreground leading-tight"
            variants={textVariants}
          >
            Discover Your Perfect Pet Plant
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto md:mx-0"
            variants={textVariants}
          >
            Flora helps you find, care for, and enjoy the best plants for your
            space. Start your plant journey today!
          </motion.p>

          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold transition-colors hover:bg-primary-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
