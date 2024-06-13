import React from 'react';

const handleDelete = (showId) => {
  const updatedWatchlist = watchlist.filter(item => item.show.id !== showId);
  setWatchlist(updatedWatchlist);
};

const WatchList = ({ watchlist, onDelete }) => {

  return (
    <section className='watchList'>
      <header className='sectionHeader'>
        <h2>Watch List</h2>
      </header>
      {watchlist.map(item => (
        <div key={item.show.id} className='savedTVShow'>
          <h3 className='showName'>{item.show.name}</h3>
          <p>{item.label}</p>
          <button onClick={() => onDelete(item.show.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default WatchList;

//ADDING CATEGORIES
// import React from 'react';
// import CompletedWatching from './CompletedWatching';
// import CurrentlyWatching from './CurrentlyWatching';
// import WantToWatch from './WantToWatch';

// const WatchList = ({ watchlist, onSave }) => {
//   return (
//     <div>
//       <section className='watchListSection'>
//         <header className='sectionHeader'>
//           <h2>Watch List</h2> 
//         </header>
//         <CompletedWatching shows={watchlist} />
//         <CurrentlyWatching shows={watchlist} />
//         <WantToWatch shows={watchlist} />
//       </section>
//     </div>
//   );
// };

// export default WatchList;