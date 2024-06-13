import React from 'react';

const CurrentlyWatching = ({ shows }) => {
  return (
    <div>
      <h2>Currently Watching</h2>
      {shows
        .filter(show => show.label === 'Currently Watching')
        .map(show => (
          <div key={show.id}>
            <h4>{show.name}</h4>
            <p>{show.description}</p>
          </div>
        ))}
    </div>
  );
};

export default CurrentlyWatching;