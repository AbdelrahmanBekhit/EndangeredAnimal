import React from "react";
import Header from "../components/Header";

export default function Species() {
  return (
    <div className="bg-[#f4f1ea] min-h-screen flex flex-col items-center p-6">
      {/* Header */}
      <Header />
      
      {/* Search Bar */}
      <div className="w-full max-w-3xl mt-6 mb-4">
        <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-3 border border-[#7a7867] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a8a793]"
        />
        </div>
      

      
      {/* Scrollable Vertical Content */}
      <div className="w-full max-w-7xl h-150 overflow-y-auto p-4 bg-[#d6d2c4] rounded-xl shadow-lg">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="p-10 bg-[#a8a793] mb-4 rounded-lg shadow-sm">
            <p className="text-[#4a4a3f] font-medium">Scrollable Content {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
