"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="w-full mt-10 bg-background/90 backdrop-blur-md text-foreground"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t-[0.2px]">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/flora.png"
              width={60}
              height={60}
              alt="Flora logo"
              className="rounded-md"
            />
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} Flora. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-muted-foreground">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#000" }}
            className="hover:text-primary transition"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.1 }}
            className="hover:text-primary transition"
          >
            <Mail size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="hover:text-primary transition"
          >
            <Linkedin size={20} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
