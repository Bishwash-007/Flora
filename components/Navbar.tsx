"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, Heart, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Browse Plants", href: "/plants" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [search, setSearch] = useState("");
  const [hoverItem, setHoverItem] = useState<null | string>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    console.log("Searching for:", search);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-14 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/flora.png"
            width={50}
            height={50}
            alt="Flora logo"
            className="rounded-md"
          />
        </Link>

        {/* Center Nav + Search */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 relative">
            {NavItems.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoverItem(item.label)}
                onMouseLeave={() => setHoverItem(null)}
                className="relative text-sm font-medium"
              >
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>

                {/* Animated Panel */}
                <AnimatePresence>
                  {hoverItem === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoverItem(item.label)}
                      onMouseLeave={() => setHoverItem(null)}
                      className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl p-4 z-40"
                    >
                      {item.label === "Search" && (
                        <form onSubmit={handleSearch} className="relative">
                          <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search plants..."
                            className="w-full rounded-full px-4 py-2 text-sm bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                          >
                            <Search size={18} />
                          </button>
                        </form>
                      )}

                      {item.label === "About" && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            About Us
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Learn more about our mission, team, and commitment
                            to sustainable plant care.
                          </p>
                        </div>
                      )}

                      {item.label === "Browse Plants" && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Categories
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>
                              <Link
                                href="/plants/indoor"
                                className="hover:text-primary"
                              >
                                Indoor Plants
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/plants/outdoor"
                                className="hover:text-primary"
                              >
                                Outdoor Plants
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/plants/succulents"
                                className="hover:text-primary"
                              >
                                Succulents
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Icons + Login */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/wishlist" className="text-foreground hover:text-primary">
            <Heart size={22} />
          </Link>
          <Link href="/cart" className="text-foreground hover:text-primary">
            <ShoppingCart size={22} />
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Login
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
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
            className="md:hidden bg-background/90 backdrop-blur-md overflow-hidden mx-12 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-6">
              {NavItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.0 }}
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
              <motion.li>
                <form onSubmit={handleSearch} className="relative mt-2">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search plants..."
                    className="w-full rounded-full px-4 py-2 text-sm bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    <Search size={18} />
                  </button>
                </form>
              </motion.li>
              <motion.li className="flex items-center justify-between px-1 mt-2">
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <Heart size={20} />
                  <span>Wishlist</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </Link>
              </motion.li>
              <motion.li whileTap={{ scale: 0.95 }}>
                <button className="w-full bg-primary text-white px-4 py-2 mt-4 rounded-full font-medium hover:bg-primary/90 transition">
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
