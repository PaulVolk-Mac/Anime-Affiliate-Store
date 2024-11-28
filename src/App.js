import React from "react";
import HeroSection from "./frontend/components/HeroSection";
import ProductGrid from "./frontend/components/ProductGrid";
import Testimonials from "./frontend/components/Testimonials";
import Footer from "./frontend/components/Footer";
import Navigation from "./frontend/components/Navigation";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Naruto Action Figure",
      description: "Eine detaillierte Naruto-Figur für Fans der Serie.",
      price: "29.99",
      image: "/assets/naruto.jpg",
    },
    {
      id: 2,
      name: "One Piece T-Shirt",
      description: "Ein cooles T-Shirt mit einem Design aus One Piece.",
      price: "19.99",
      image: "/assets/onepiece.jpg",
    },
    {
      id: 3,
      name: "Attack on Titan Poster",
      description: "Ein Poster von Attack on Titan in hoher Qualität.",
      price: "9.99",
      image: "/assets/attackontitan.jpg",
    },
  ];

  return (
    <div>
      <Navigation />
      <HeroSection />
      <ProductGrid products={products} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
