// import React, { useState } from "react"
// import axios from 'axios';
// import ShowSearchBar from './components/ShowSearchBar';
// import RecommendationsList from './components/RecommendationsList';
// import WatchList from './components/WatchList';
// import Header from './components/Header';
// import GenreSearchBar from './components/GenreSearchBar';
// import './styles.css';

// const App = () => {
//   const [shows, setShows] = useState([]);
//   const [watchlist, setWatchlist] = useState([]);
//   const [wantToWatchList, setWantToWatchList] = useState([]);
//   const [watchedList, setWatchedList] = useState([]);
//   // const [sortBy, setSortBy] = useState('name');

//   const searchShows = async (query) => {
//     try {
//       const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
//       const showsWithDescriptionAndImage = response.data.map(item => ({
//         ...item.show,
//         description: item.show.summary,
//         image: item.show.image ? item.show.image.medium : null
//       }));
//       setShows(showsWithDescriptionAndImage);
//     } catch (error) {
//       console.error("Error fetching data from TVMaze API", error);
//     }
//   };

//   const fetchRandomShow = async (genre) => {
//     try {
//       const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${genre}`);
//       const randomIndex = Math.floor(Math.random() * response.data.length);
//       const randomShow = response.data[randomIndex].show;
//       const showWithDescriptionAndImage = {
//         ...randomShow,
//         description: randomShow.summary,
//         image: randomShow.image ? randomShow.image.medium : null
//       };
//       setShows([showWithDescriptionAndImage]);
//     } catch (error) {
//       console.error("Error fetching data from TVMaze API", error);
//     }
//   };

//   const saveShow = (show, label) => {
//     // Check if the show is already in the watchlist
//     const showExists = watchlist.find(item => item.show.id === show.id);

//     if (showExists) {
//       // If show exists, update its label/category
//       const updatedWatchlist = watchlist.map(item => {
//         if (item.show.id === show.id) {
//           return { ...item, label };
//         }
//         return item;
//       });

//       setWatchlist(updatedWatchlist);
//     } else {
//       // If show doesn't exist, add it to the watchlist
//       setWatchlist([...watchlist, { show, label }]);
//     }
//   };

//   const handleDelete = (showId) => {
//     const updatedWatchlist = watchlist.filter(item => item.show.id !== showId);
//     setWatchlist(updatedWatchlist);
//   };

//   // THIS WAS AN ATTEMPT TO SAVE THE SHOW TO BE ORGANIZED INTO A SPECIFIC CATEGORY
//   // const saveShow = (show, label) => {
//   //   const newShow = { ...show, label };
  
//   //   // Determine the category based on the label
//   //   try {
//   //     switch (label) {
//   //       case 'Currently Watching':
//   //         setWatchlist(prevWatchlist => [...prevWatchlist, newShow]);
//   //         break;
//   //       case 'Want to Watch':
//   //         setWantToWatchList(prevWantToWatchList => [...prevWantToWatchList, newShow]);
//   //         break;
//   //       case 'Already Watched':
//   //         setWatchedList(prevWatchedList => [...prevWatchedList, newShow]);
//   //         break;
//   //       default:
//   //         break;
//   //     }
//   //   } catch (error) {
//   //     console.error("Error saving show:", error);
//   //   }
//   // };

//   return (
//     <div>
//       <Header />
//       <section className='searchSection'>
//         <div className='search'>
//           <h2>Find a TV show!</h2>
//         </div>

//         <div className='searchContainer'>
//           <ShowSearchBar onSearch={searchShows} />
//           <GenreSearchBar onRandom={fetchRandomShow} />
//         </div>
//       </section>

//       <section className='recSection'>
//         <RecommendationsList shows={shows} onSave={saveShow} />
//       </section>


//       <section className='watchListSection'>
//         <WatchList
//           watchlist={watchlist}
//           // wantToWatchList={wantToWatchList}
//           // watchedList={watchedList}
//           onDelete={handleDelete}
//         />
//       </section>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react"
import axios from 'axios';
import ShowSearchBar from './components/ShowSearchBar';
import RecommendationsList from './components/RecommendationsList';
import WatchList from './components/WatchList';
import Header from './components/Header';
import GenreSearchBar from './components/GenreSearchBar';
import './styles.css';

const App = () => {
  const [shows, setShows] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [sortBy, setSortBy] = useState(''); // State for sorting criteria

  const searchShows = async (query) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      const showsWithDescriptionAndImage = response.data.map(item => ({
        ...item.show,
        description: item.show.summary,
        image: item.show.image ? item.show.image.medium : null
      }));
      setShows(showsWithDescriptionAndImage);
    } catch (error) {
      console.error("Error fetching data from TVMaze API", error);
    }
  };

  const fetchRandomShow = async (genre) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${genre}`);
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomShow = response.data[randomIndex].show;
      const showWithDescriptionAndImage = {
        ...randomShow,
        description: randomShow.summary,
        image: randomShow.image ? randomShow.image.medium : null
      };
      setShows([showWithDescriptionAndImage]);
    } catch (error) {
      console.error("Error fetching data from TVMaze API", error);
    }
  };

  const saveShow = (show, label) => {
    // Check if the show is already in the watchlist
    const showExists = watchlist.find(item => item.show.id === show.id);

    if (showExists) {
      // If show exists, update its label/category
      const updatedWatchlist = watchlist.map(item => {
        if (item.show.id === show.id) {
          return { ...item, label };
        }
        return item;
      });

      setWatchlist(updatedWatchlist);
    } else {
      // If show doesn't exist, add it to the watchlist
      setWatchlist([...watchlist, { show, label }]);
    }
  };

  const handleDelete = (showId) => {
    const updatedWatchlist = watchlist.filter(item => item.show.id !== showId);
    setWatchlist(updatedWatchlist);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <div>
      <Header />
      <section className='searchSection'>
        <div className='search'>
          <h2>Find a TV show!</h2>
        </div>

        <div className='searchContainer'>
          <ShowSearchBar onSearch={searchShows} />
          <GenreSearchBar onRandom={fetchRandomShow} />
        </div>
      </section>

      <section className='recSection'>
        <RecommendationsList shows={shows} onSave={saveShow} />
      </section>

      <section className='watchListSection'>
        <WatchList
          watchlist={watchlist}
          onDelete={handleDelete}
          sortBy={sortBy} // Pass sortBy state to WatchList component
          onSort={handleSort}
        />
        {/* <div>
          <span>Sort by: </span>
          <button onClick={() => handleSortBy('name')}>Name</button>
          <button onClick={() => handleSortBy('label')}>Label</button>
        </div> */}
      </section>
    </div>
  );
};

export default App;
