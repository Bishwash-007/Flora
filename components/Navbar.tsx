"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/flora.png"
            width={40}
            height={40}
            alt="Flora logo"
            className="rounded-md"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {NavItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.08 }}
              className="text-sm font-medium"
            >
              <Link
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Login button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors">
            Login
          </button>
        </motion.div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-4 py-6">
              {NavItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="block text-lg text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileTap={{ scale: 0.95 }}>
                <button className="w-full bg-primary text-white px-4 py-2 mt-4 rounded-full font-medium hover:bg-primary-hover transition">
                  Login
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;