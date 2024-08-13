import React, { useState } from "react";
import UpdatePriceForm from "./UpdatePriceForm";

function PlantCard({ plant, onPlantDelete }) {
  const [isInStock, setIsInStock] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [price, setPrice] = useState(plant.price);

  const handleButtonClick = () => {
    setIsInStock(!isInStock);
  };

  const handleChangePriceButton = () => {
    setIsHidden(false);
  };

  const handleDeleteButtonClick = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => {
      onPlantDelete();
    });
  };

  const onPriceChange = (newPrice) => {
    setPrice(newPrice);
    setIsHidden(true);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleButtonClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleButtonClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteButtonClick} className="deleteButton">
        Delete Plant
      </button>
      {isHidden ? (
        <button onClick={handleChangePriceButton} className="changePriceButton">
          Change Price
        </button>
      ) : null}
      {isHidden ? null : (
        <UpdatePriceForm plant={plant} onPriceChange={onPriceChange} />
      )}
    </li>
  );
}

export default PlantCard;
