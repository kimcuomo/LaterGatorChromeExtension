import React, { useState } from "react"
import axios from 'axios';
import ShowSearchBar from './components/ShowSearchBar';
import RecommendationsList from './components/RecommendationsList';
import WatchList from './components/WatchList';
import './styles.css';

const App = () => {
  const [shows, setShows] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const searchShows = async (query) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setShows(response.data.map(item => item.show));
    } catch (error) {
      console.error("Error fetching data from TVMaze API", error);
    }
  };

  // const fetchRandomShow = async (genre) => {
  //   try {
  //     const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${genre}`);
  //     const randomIndex = Math.floor(Math.random() * response.data.length);
  //     setShows([response.data[randomIndex].show]);
  //   } catch (error) {
  //     console.error("Error fetching data from TVMaze API", error);
  //   }
  // };

  const saveShow = (show, label) => {
    setWatchlist([...watchlist, { show, label }]);
  };

  return (
    <div>
      <h1>Couch Potato</h1>
      <h2>Track all of your TV shows!</h2>
      <section>
        <ShowSearchBar className='showSearchBar' onSearch={searchShows} />
      {/* <h2>Random Show by Genre</h2>
      <GenreSearchBar onRandom={fetchRandomShow} /> */}
        <RecommendationsList shows={shows} onSave={saveShow} />
      </section>
      <section>
        <WatchList watchlist={watchlist} />
      </section>
    </div>
  );
};




export default App;
