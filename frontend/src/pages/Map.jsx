import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const CallAnimal = async (country) => {
  try {
    const response = await fetch(`http://localhost:8080/CallAnimal?country=${country}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Animal data:", data);

    setAnimalData(data);
    data.forEach((item) => {
      console.log(`Country: ${item.country}, Animal: ${item.animal}, Habitat: ${item.habitat}`);
    });
  } catch (error) {
    console.error("Error fetching animal data:", error);
  }
};

const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const Map = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [animalData, setAnimalData] = useState([]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country); // Set the selected country
    CallAnimal(country, setAnimalData);
  };

  return (
<div className="flex justify-center items-center min-h-screen bg-[#f0ead6] text-[#4a4a3f]">
      <div className="w-full max-w-5xl p-6 bg-[#d6d2c4] shadow-2xl rounded-2xl border border-[#7a7867]">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-[#4a4a3f]">
          🌍 Discover Endangered Species by Country
        </h1>
        <ComposableMap
          projectionConfig={{ scale: 160 }}
          className="rounded-lg shadow-lg"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isSelected = selectedCountry === geo.properties.name;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo.properties.name)}
                    className="cursor-pointer focus:outline-none" // Ensures no outline
                    tabIndex={-1} // Prevents keyboard focus
                    style={{
                      default: { 
                        fill: isSelected ? "#e76f51" : "#a8a793", 
                        stroke: "#4a4a3f", 
                        strokeWidth: 0.6, 
                        outline: "none", 
                      },
                      hover: { 
                        fill: "#f4a261", 
                        stroke: "#3a3a2f", 
                        transition: "0.3s" 
                      },
                      pressed: { 
                        fill: "#e63946", 
                        stroke: "#3a3a2f" 
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;