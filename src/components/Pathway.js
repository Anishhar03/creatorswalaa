import React from 'react';

const ProductionServices = () => {
  const features = [
    {
      icon: "🚀",
      title: "Subscribe & get started",
      description: "Submit any design request with unlimited revisions at a flat monthly project fee."
    },
    {
      icon: "🎯",
      title: "Polished designs - on time",
      description: "Our designs will be sent to scale, polish and optimize within a few days."
    },
    {
      icon: "↻",
      title: "Revisions made simple",
      description: "Gather editing request before presenting to stakeholders with unlimited revisions."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-sm uppercase mb-2 text-gray-400">unlimited requests</p>
        <h1 className="text-4xl font-bold mb-4">
          Seamless Production Services Tailored to Your Brand.
        </h1>
        <p className="text-gray-400 mb-6">
          Your trusted partner in creating unforgettable video experiences that elevate brands and rapidly market project verticals.
        </p>
        {/* Added See Pricing button */}
        <button className="bg-transparent text-[#a3ff12] px-6 py-2 rounded border-2 border-[#a3ff12] hover:bg-[#8ee610] mt-4 transition-colors">
          See Pricing
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16 relative">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}

        {/* Arrows between features */}
        <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 text-white text-3xl">
          &#8594;
        </div>
        <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 text-white text-3xl">
          &#8594;
        </div>
      </div>

      {/* Services Section with Pathway */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 relative">
        <div className="text-4xl font-bold">Branding</div>
        <div className="text-4xl font-bold">Storytelling</div>
        <div className="text-4xl font-bold">Editing</div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 hidden md:block" />
      </div>

      {/* Arrows between Branding, Storytelling, and Editing */}
      <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 text-white text-3xl">
        &#8594;
      </div>
      <div className="absolute left-3/4 top-1/2 transform -translate-x-1/2 text-white text-3xl">
        &#8594;
      </div>
    </div>
  );
};

export default ProductionServices;
