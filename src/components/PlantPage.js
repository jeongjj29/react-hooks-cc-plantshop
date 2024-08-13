import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
      });
  }, []);

  const onFormSubmit = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const onSearchChange = (searchKey) => {
    console.log(searchKey);
    const newPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchKey)
    );
    setFilteredPlants(newPlants);
  };

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search onSearchChange={onSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
