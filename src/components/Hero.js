import React from "react";
import { Layers, Grid, Clock, Shield, Command } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-24 text-center relative">
      <div className="relative max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Crafting Visual Stories
          <span className="inline-block relative">
            ✦
            <div
              className="absolute w-[20px] h-[20px] top-[-10px] left-[105%] bg-lime-400/25 text-lime-400 flex items-center justify-center rounded-full transform rotate-[-45deg]"
              style={{ fontSize: "16px", fontWeight: "bold" }}
            >
              ✦
            </div>
          </span>
          <br />
          That <span className="text-lime-400">Demand</span>
          <br />
          Attention
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-sm sm:text-lg md:text-xl leading-relaxed">
          We increase revenue and ensure sustainable long-term growth for your
          business through a powerful team.
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors focus:ring-4 focus:ring-lime-300 focus:outline-none">
          Book A Meeting
        </button>

        {/* Trusted Brands Section */}
        <div className="mt-16 relative">
          {/* Decorative Rectangles */}
          <div className="flex items-center justify-center mb-8">
            {/* Left Rectangle */}
            <div className="w-12 h-0.5 bg-lime-400 mr-4"></div>

            {/* Text */}
            <p className="text-gray-400 text-base sm:text-lg font-medium">
              TRUSTED BY AMAZING BRANDS
            </p>

            {/* Right Rectangle */}
            <div className="w-12 h-0.5 bg-lime-400 ml-4"></div>
          </div>

          <div className="bg-[rgba(34,34,34,1)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-4 rounded-md">
            {/* Brand Items */}
            <div className="flex flex-col items-center">
              <Layers className="w-16 h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-sm sm:text-base">
                Layers
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Grid className="w-16 h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-sm sm:text-base">
                Quotient
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-16 h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-sm sm:text-base">
                Circooles
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-16 h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-sm sm:text-base">
                HourGlass
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Command className="w-16 h-16 text-gray-300" />
              <span className="text-gray-300 mt-2 text-sm sm:text-base">
                Command+R
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
