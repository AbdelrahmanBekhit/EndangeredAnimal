import React, { useState } from "react";
import Header from "../components/Header";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const CallAnimal = async (country, setAnimalData) => {
  try {
    const response = await fetch(`http://localhost:8080/CallAnimal?country=${country}`);

    console.log("Response:", response);
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
    // Optionally, set an error state here to display an error message in the UI
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
    <div className="bg-[#eae7dc] min-h-screen flex flex-col items-center">
      <Header />

      {/* Map Section */}
      <section className="flex-grow w-20/30 h-[600px] bg-[#d6d2c4] flex flex-col items-center justify-center mt-0 mx-auto p-2 rounded-2xl shadow-lg border border-[#7a7867]">
        <h1 className="text-xl font-extrabold text-center mb-1 text-[#4a4a3f]">
          🌍 Discover Endangered Species by Country
        </h1>
        <ComposableMap projectionConfig={{ scale: 200 }} className="rounded-lg shadow-lg">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isSelected = selectedCountry === geo.properties.name;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo.properties.name)}
                    className="cursor-pointer focus:outline-none"
                    tabIndex={-1}
                    style={{
                      default: { fill: isSelected ? "#e76f51" : "#a8a793", stroke: "#4a4a3f", strokeWidth: 0.6, outline: "none" },
                      hover: { fill: "#f4a261", stroke: "#3a3a2f", transition: "0.3s" },
                      pressed: { fill: "#e63946", stroke: "#3a3a2f" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </section>

      {/* Endangered Species Section */}
      <h2 className="text-lg font-bold mb-2 text-center text-[#4a4a3f] mt-4">
        Endangered Animals within {selectedCountry || "Selected Country"}
      </h2>
      <section className="h-1/4 w-11/12 bg-[#d6d2c4] p-4 rounded-2xl shadow-lg flex flex-col items-center overflow-x-auto">
        <div className="flex gap-4 p-4 rounded-2xl overflow-x-auto whitespace-nowrap w-full">
          {/* More boxes, scrollable from left to right */}
          {[...Array(20)].map((_, index) => (
            <div key={index} className="w-24 h-12 bg-[#b5a88f] rounded-lg flex-shrink-0 inline-block"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Map;