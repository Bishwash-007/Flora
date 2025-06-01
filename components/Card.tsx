"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

type ProductCardProps = {
  name: string;
  image: string;
  price: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="group relative rounded-2xl overflow-hidden bg-background border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
            <Heart size={20} className="text-foreground" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
            <ShoppingCart size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            {price}
          </span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-2 w-full bg-primary text-white rounded-xl py-2 font-semibold text-sm hover:bg-primary-hover transition-colors"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;