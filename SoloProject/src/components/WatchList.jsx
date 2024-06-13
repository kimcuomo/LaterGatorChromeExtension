// import React from 'react';

// const handleDelete = (showId) => {
//   const updatedWatchlist = watchlist.filter(item => item.show.id !== showId);
//   setWatchlist(updatedWatchlist);
// };

// const WatchList = ({ watchlist, onDelete }) => {

//   return (
//     <section className='watchList'>
//       <header className='sectionHeader'>
//         <h2>Watch List</h2>
//       </header>
//       {watchlist.map(item => (
//         <div key={item.show.id} className='savedTVShow'>
//           <h3 className='showName'>{item.show.name}</h3>
//           <p>{item.label}</p>
//           <button onClick={() => onDelete(item.show.id)}>Delete</button>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default WatchList;

//ADDING CATEGORIES
// import React from 'react';
// import CompletedWatching from './CompletedWatching';
// import CurrentlyWatching from './CurrentlyWatching';
// import WantToWatch from './WantToWatch';

// const WatchList = ({ watchlist, wantToWatchList, watchedList, onDelete }) => {
//   return (
//     <div>
//       <section className='watchListSection'>
//         <header className='sectionHeader'>
//           <h2>Watch List</h2> 
//         </header>
//         <CompletedWatching shows={watchlist} onDelete={onDelete} />
//         <CurrentlyWatching shows={watchlist} onDelete={onDelete} />
//         <WantToWatch shows={watchlist} onDelete={onDelete}  />
//       </section>
//     </div>
//   );
// };

// export default WatchList;

// import React, { useState } from 'react';

// const WatchList = ({ watchlist, onDelete, sortByProp }) => {
//   const [sortBy, setSortBy] = useState('name');

//   useEffect(() => {
//     if (sortByProp) {
//       setSortBy(sortByProp);
//     }
//   }, [sortByProp]);

//   // Function to handle sorting
//   const handleSort = (criteria) => {
//     setSortBy(criteria);
//   };

//   // Sort the watchlist based on the selected criteria
//   let sortedWatchlist = [...watchlist];
//   if (sortBy === 'label') {
//     sortedWatchlist.sort((a, b) => a.label.localeCompare(b.label));
//   } else {
//     // Default sorting (by show name or any other criteria)
//     sortedWatchlist.sort((a, b) => a.show.name.localeCompare(b.show.name));
//   }

//   return (
//     <section className='watchList'>
//       <header className='sectionHeader'>
//         <h2>Watch List</h2>
//         <div>
//           <span>Sort by: </span>
//           <button onClick={() => handleSort('name')}>Name</button>
//           <button onClick={() => handleSort('label')}>Label</button>
//         </div>
//       </header>
//       {sortedWatchlist.map(item => (
//         <div key={item.show.id} className='savedTVShow'>
//           <h3 className='showName'>{item.show.name}</h3>
//           <p>{item.label}</p>
//           <button onClick={() => onDelete(item.show.id)}>Delete</button>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default WatchList;

import React from 'react';

const WatchList = ({ watchlist, sortBy, onDelete, onSort }) => {
  // Function to handle deleting a show from watchlist
  const handleDelete = (showId) => {
    onDelete(showId);
  };

  // Sort the watchlist based on the selected criteria
  let sortedWatchlist = [...watchlist];
  if (sortBy === 'label') {
    sortedWatchlist.sort((a, b) => a.label.localeCompare(b.label));
  } else {
    // Default sorting (by show name or any other criteria)
    sortedWatchlist.sort((a, b) => a.show.name.localeCompare(b.show.name));
  }

  return (
    <section className='watchList'>
      <header className='sectionHeader'>
        <h2>Watch List</h2>
        <div className='sortButtonContainer' >
          <span className='sortSpan'>Sort by: </span>
          <button onClick={() => onSort('name')}>Name</button>
          <button onClick={() => onSort('label')}>Label</button>
        </div>
      </header>
      {sortedWatchlist.map(item => (
        <div key={item.show.id} className='savedTVShow'>
          <h3 className='showName'>{item.show.name}</h3>
          <p>{item.label}</p>
          <button onClick={() => handleDelete(item.show.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default WatchList;