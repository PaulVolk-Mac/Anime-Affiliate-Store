import React from "react";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <h2 className="text-2xl font-bold text-center mt-8">Unsere Produkte</h2>
      <ProductGrid />
    </div>
  );
};

export default HomePage;
