import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const animalData = [
  { name: "animal_1", region: "South Korea" },
  { name: "animal_2", region: "Canada" },
  { name: "animal_3", region: "Brazil" },
];

const WorldMap = () => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.NAME;
    const animalsInCountry = animalData.filter(
      (animal) => animal.region === countryName
    );

    setSelectedAnimals(animalsInCountry);
  };

  return (
    <div style={{ display: "flex" }}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: { fill: "#D6D6DA", stroke: "#000" },
                  hover: { fill: "#F53", stroke: "#000" },
                  pressed: { fill: "#E42", stroke: "#000" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      <div
        style={{
          width: "200px",
          padding: "10px",
          borderLeft: "2px solid black",
        }}
      >
        <h3>Animals</h3>
        {selectedAnimals.length > 0 ? (
          <ul>
            {selectedAnimals.map((animal, index) => (
              <li key={index}>{animal.name}</li>
            ))}
          </ul>
        ) : (
          <p>Click on a country</p>
        )}
      </div>
    </div>
  );
};

export default WorldMap;
