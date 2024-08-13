import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  const onFormSubmit = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const onSearchChange = (searchKey) => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        const searchKeyLowerCase = searchKey.toLowerCase();
        setPlants(
          data.filter((plant) =>
            plant.name.toLowerCase().includes(searchKeyLowerCase)
          )
        );
      });
  };

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search onSearchChange={onSearchChange} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
