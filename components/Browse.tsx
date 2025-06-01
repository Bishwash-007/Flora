"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./Card";

const plants = [
  { name: "Monstera", image: "/plant.png", price: "$24.99" },
  { name: "Fiddle Leaf Fig", image: "/plant.png", price: "$24.99" },
  { name: "Snake Plant", image: "/plant.png", price: "$24.99" },
  { name: "Peace Lily", image: "/plant.png", price: "$24.99" },
  { name: "Aloe Vera", image: "/plant.png", price: "$24.99" },
  { name: "ZZ Plant", image: "/plant.png", price: "$24.99" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BrowsePlants() {
  return (
    <section className="px-4 md:px-12 py-20 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 text-foreground"
      >
        Browse Popular Plants
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {plants.map((plant) => (
          <ProductCard
            key={plant.name}
            name={plant.name}
            image={plant.image}
            price={plant.price}
          />
        ))}
      </motion.div>
    </section>
  );
}