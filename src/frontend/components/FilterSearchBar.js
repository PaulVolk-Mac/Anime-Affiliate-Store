import React, { useState } from 'react';
import './frontend/styles/FilterSearchBar.css';

const FilterSearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Weitere Filterlogik kann hier hinzugefügt werden
  };

  return (
    <div className="filter-search-bar">
      <input
        type="text"
        placeholder="Suche nach Produkten..."
        value={query}
        onChange={handleSearch}
      />
      <button>Suchen</button>
    </div>
  );
};

export default FilterSearchBar;
