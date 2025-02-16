import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Function to determine color based on extinction prediction
const getColorByExtinctionPrediction = (years) => {
  if (years === null) return null; // Green if no extinction prediction
  if (years <= 2) return "#ff4c4c"; // Red for critically endangered (0-10 years)
  if (years <= 5) return "#ff914c"; // Orange for endangered (11-30 years)
  if (years <= 20) return "#ffd700"; // Yellow for vulnerable (31-50 years)
  return "#91c483"; // Light green for near threatened (51+ years)
};

const CallAnimal = async (country) => {
  try {
    const response = await fetch(`http://localhost:8080/CallAnimal?country=${country}`);
    console.log("Response status:", response.status);  // Log the response status

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Animal data:", data);

    setAnimalData(data);
    data.forEach((item) => {
      console.log(`Country: ${item.country}, Animal: ${item.name}, Habitat: ${item.region}, Extinction: ${item.predictedExtinction}`);
    });
  } catch (error) {
    console.error("Error fetching animal data:", error);  // Log the error to get more info
  }
};


const Map = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [animalData, setAnimalData] = useState([]);
  const [allAnimals, setAllAnimals] = useState([]);

  useEffect(() => {
    if (!selectedCountry) return;
    const fetchData = async () => {
      try {
        const encodedCountry = encodeURIComponent(selectedCountry);
        const response = await fetch(`http://localhost:8080/CallAnimal?country=${encodedCountry}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const formattedData = data.map((animal) => ({
          ...animal,
          predicted_extinction_years: animal.predicted_extinction_years
            ? parseInt(animal.predicted_extinction_years, 10)
            : null,
        }));
        console.log("Formatted data:", formattedData);
        setAllAnimals(formattedData);
      } catch (error) {
        console.error("Error loading animal dataset:", error);
      }
    };
    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && allAnimals.length > 0) {
      setAnimalData(allAnimals);
    }
  }, [selectedCountry, allAnimals]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="bg-[#eae7dc] min-h-screen flex flex-col items-center ">
      <Header />

      {/* Map Section */}
      <section className="flex-grow w-20/30 h-[600px] bg-[#d6d2c4] flex flex-col items-center justify-center mt-3 mx-auto p-2 rounded-2xl shadow-lg border border-[#7a7867]">
        <h1 className="text-xl font-extrabold text-center mb-3 text-[#4a4a3f]">
          🌍 Discover Endangered Species by Country
        </h1>
        <ComposableMap projectionConfig={{ scale: 200 }} className="rounded-lg shadow-lg">
          <Geographies geography="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson">
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
          {animalData.length > 0 ? (
            animalData.map((animal, index) => (
              <div
                key={index}
                className="w-48 h-24 rounded-lg flex-shrink-0 inline-flex flex-col items-center justify-center p-2 text-[#4a4a3f] font-medium text-center shadow-md"
                style={{ backgroundColor: getColorByExtinctionPrediction(animal.predictedExtinction) }}
              >
                <p className="text-lg font-bold">{animal.name}</p>
                <p className="text-sm">Extinction: {animal.predictedExtinction !== null ? `${animal.predictedExtinction} years` : "Not at risk"}</p>
              </div>
            ))
          ) : (
            [...Array(5)].map((_, index) => (
              <div key={index} className="w-48 h-24 bg-[#b5a88f] rounded-lg flex-shrink-0 inline-block"></div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Map;
