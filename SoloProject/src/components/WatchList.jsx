import React from 'react';

const WatchList = ({ watchlist }) => {
  return (
    <section className='watchList'>
      <header className='sectionHeader'>
        <h2>Watch List</h2>
      </header>
      {watchlist.map(item => (
        <div key={item.show.id} className='savedTVShow'>
          <h3 className='showName'>{item.show.name}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default WatchList;