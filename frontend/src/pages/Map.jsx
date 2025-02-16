import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const CallAnimal = async (country) => {
  try {
    console.log("Fetching animal data for:", country);
    const response = await fetch(`https://your-api.com/CallAnimal?country=${country}`);
    const data = await response.json();
    console.log("Animal data:", data);
  } catch (error) {
    console.error("Error fetching animal data:", error);
  }
};

const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const WorldMap = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl p-4 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">World Map - Click a Country</h1>
        <ComposableMap projectionConfig={{ scale: 140 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => CallAnimal(geo.properties.name)}
                  className="cursor-pointer"
                  style={{
                    default: { fill: "#374151", outline: "none" },
                    hover: { fill: "#f59e0b", transition: "0.3s" },
                    pressed: { fill: "#dc2626" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMap;
