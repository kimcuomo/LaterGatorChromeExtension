import React from 'react';

const WantToWatch = ({ shows }) => {
  return (
    <div>
      <h2>Want to Watch</h2>
      {shows
        .filter(show => show.label === 'Want to Watch')
        .map(show => (
          <div key={show.id}>
            <h4>{show.name}</h4>
            <p>{show.description}</p>
          </div>
        ))}
    </div>
  );
};

export default WantToWatch;