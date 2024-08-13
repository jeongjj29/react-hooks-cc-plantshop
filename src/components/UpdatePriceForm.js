import React, { useState } from "react";

function UpdatePriceForm({ plant, onPriceChange }) {
  const [newPrice, setNewPrice] = useState(plant.price ? plant.price : 0);

  const handleInputChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: newPrice,
      }),
    }).then(() => {
      onPriceChange(newPrice);
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="changePriceForm">
      <input
        onChange={handleInputChange}
        value={newPrice}
        type="number"
        name="price"
        step="0.01"
        placeholder="Price"
      />
      <button type="submit">Update Price</button>
    </form>
  );
}

export default UpdatePriceForm;
