import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        onFormSubmit(data);
        setFormData({
          name: "",
          image: "",
          price: 0,
        });
      });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleInputChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleInputChange}
          value={formData.price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
