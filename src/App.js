import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pathway from "./components/Pathway";
const App = () => {
  return (
    <div className="bg-darkGreen text-white">
      <Header />
      <Hero/>
      <main>
      <Pathway/>
        <Features />
        <Testimonials />
        
        <Pricing />
        <FAQ />
      </main>
    </div>
  );
};

export default App;
