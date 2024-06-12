import React from 'react';

const RecommendationsList = ({ shows, onSave }) => {
  const handleSave = (show, label) => {
    onSave(show, label);
  };

  return (
    <div>
      <h2>Recommendations</h2>
      {shows.map(show => (
        <div key={show.id}>
          <h4>{show.name}</h4>
          {/* add show description */}
          <div className='saveButtonContainer'>
            <button onClick={() => handleSave(show, 'Currently Watching')}>Currently Watching</button>
            <button onClick={() => handleSave(show, 'Want to Watch')}>Want to Watch</button>
            <button onClick={() => handleSave(show, 'Already Watched')}>Already Watched</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;