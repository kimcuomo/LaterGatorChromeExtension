import React, { useState } from 'react';

const ShowSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='showSearchContainer'>
      <input
        className="searchBar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a TV show"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default ShowSearchBar;