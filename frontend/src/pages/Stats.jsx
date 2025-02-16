import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

function Stats() {
    return (
        <div className="bg-[#f0efe6] min-h-screen p-10">
            <h1 className="text-3xl font-bold text-center">Wildlife Population Statistics</h1>
            
            <div className="flex justify-center mt-5">
                <img 
                    src="../../public/living_planet_chart.png" 
                    alt="Living Planet Index Chart"
                    className="w-[700px] rounded-lg"
                />
            </div>

            {/* Key Insights Section */}
            <div className="mt-8 px-5">
                <h2 className="text-2xl font-bold">Key Insights from the Chart:</h2>
                
                <ul className="list-disc list-inside mt-3 text-lg">
                    <li><strong>Overall Decline in Wildlife Populations:</strong> Global biodiversity has experienced a steady decline since 1970, with varying rates across different regions.</li>
                    
                    <li><strong>Regional Trends:</strong>
                        <ul className="list-disc list-inside ml-5 mt-2">
                            <li><strong>Latin America and the Caribbean (Purple Line):</strong> The most severe decline, dropping below 20% of its 1970 levels, indicating a drastic loss of biodiversity.</li>
                            <li><strong>Africa (Green Line):</strong> A significant decline, reaching around 40%, showing a major loss in monitored species.</li>
                            <li><strong>World Average (Blue Line):</strong> Global biodiversity has dropped to approximately 30-40% of 1970 levels.</li>
                            <li><strong>Asia and the Pacific (Red Line):</strong> Experienced an initial drop but stabilized slightly after 2000, now fluctuating around 60% of its 1970 value.</li>
                            <li><strong>North America (Dark Red Line) & Europe and Central Asia (Brown Line):</strong> The least severe declines, with populations maintaining 60-80% of their 1970 levels. Europe and Central Asia even saw a brief increase before gradually declining.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Stats;
