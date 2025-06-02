"use client";

import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

type SlideData = {
  title: string;
  button: string;
  src: string;
};

export const slideData: SlideData[] = [
  {
    title: "Flowers",
    button: "Learn More",
    src: "/plant.png",
  },
  {
    title: "Outdoor Plants",
    button: "Explore",
    src: "/plant.png",
  },
  {
    title: "Indoor Plants",
    button: "Discover",
    src: "/plant.png",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
