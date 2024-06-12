import React, { useState } from 'react';

const ShowSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='showSearchContainer'>
      <input
        className="searchBar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a TV show"
      />
      <button onClick={handleSearch} onKeyDown={e => e.key === 'Enter' ? handleSearch: ''}>
        Search
      </button>
    </div>
  );
};

export default ShowSearchBar;