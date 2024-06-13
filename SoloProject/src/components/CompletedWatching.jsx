import React from 'react';

const CompletedWatching = ({ shows }) => {
  return (
    <div>
      <h2>Already Watched</h2>
      {shows
        .filter(show => show.label === 'Already Watched')
        .map(show => (
          <div key={show.id}>
            <h4>{show.name}</h4>
            <p>{show.description}</p>
          </div>
        ))}
    </div>
  );
};

export default CompletedWatching;