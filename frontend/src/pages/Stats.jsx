import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

 function Stats() {
  return (
    <div className="bg-[#d6d5c4] min-h-screen">
        <Header />
        <div className="bg-[#d6d5c4] min-h-screen flex flex-col items-center p-6">
        {/* Navigation Bar */}
        {/* <nav className="w-full max-w-5xl flex justify-between items-center bg-[#d6d2c4] p-4 rounded-lg shadow-lg mb-6">
            <h1 className="text-lg font-bold text-[#4a4a3f]">Protect Our Planet</h1>
            <div className="flex gap-6">
            <a href="#" className="text-[#4a4a3f] font-medium">Home</a>
            <a href="#" className="text-[#4a4a3f] font-medium">Map</a>
            <a href="#" className="text-[#4a4a3f] font-medium">Volunteer</a>
            <a href="#" className="text-[#4a4a3f] font-medium">Donate</a>
            </div>
        </nav> */}

        {/* Description */}
        <p className="text-center text-[#4a4a3f] max-w-3xl mb-4">
            This chart illustrates the Living Planet Index (LPI), which tracks the relative decline in monitored wildlife populations over time across different global regions. The index measures the change in abundance of 34,836 populations spanning 5,495 native species, using 1970 as the baseline (set at 100%).
        </p>

        {/* Chart Section */}
        <div className="bg-[#d6d5c4] p-4 rounded-xl shadow-lg w-full max-w-3xl flex justify-center mb-6">
            <img src="../../public/global-living-planet-index.webp" alt="Living Planet Index Chart" className="rounded-lg" />
        </div>

        {/* Key Insights */}
        <div className="bg-[#d6d5c4] p-6 rounded-xl shadow-lg w-full max-w-3xl">
            <h2 className="text-xl font-bold mb-3 text-[#4a4a3f]">Key Insights from the Chart:</h2>
            <ul className="list-disc pl-5 text-[#4a4a3f]">
            <li><strong>Overall Decline in Wildlife Populations:</strong> Global biodiversity has experienced a steady decline since 1970.</li>
            <li><strong>Regional Trends:</strong></li>
            <ul className="list-disc pl-5">
                <li><strong>Latin America and the Caribbean (Purple Line):</strong> Dropped to below 20% of its 1970 levels, indicating a drastic biodiversity loss.</li>
                <li><strong>Africa (Green Line):</strong> Declined by approximately 40%.</li>
                <li><strong>World Average (Blue Line):</strong> Biodiversity dropped to 30-40% of 1970 levels.</li>
                <li><strong>Asia and the Pacific (Red Line):</strong> Experienced an initial drop but stabilized slightly after 2000.</li>
                <li><strong>North America & Europe and Central Asia:</strong> Least severe declines, maintaining 60-80% of 1970 levels.</li>
            </ul>
            </ul>
        </div>
        </div>
    </div>
  );
}
export default Stats;
