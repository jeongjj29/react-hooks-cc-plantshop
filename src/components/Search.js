import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (e) => {
    const newSearchKey = e.target.value.toLowerCase();
    setSearchKey(newSearchKey);
    onSearchChange(newSearchKey);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInputChange}
        value={searchKey}
      />
    </div>
  );
}

export default Search;
