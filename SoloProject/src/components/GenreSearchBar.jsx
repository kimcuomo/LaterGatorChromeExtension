import React, { useState } from 'react';

const GenreSearchBar = ({ onRandom }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller'
  ];

  const handleRandomSearch = () => {
    onRandom(selectedGenre);
  };

return (
    <div className='genreSearchContainer'>
      <select
        className="genreDropdown"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Select Genre</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      <button onClick={handleRandomSearch}>
        Get Random Show
      </button>
    </div>
  );
};

export default GenreSearchBar;