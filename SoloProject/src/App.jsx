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

  const searchShows = async (query) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setShows(response.data.map(item => item.show));
    } catch (error) {
      console.error("Error fetching data from TVMaze API", error);
    }
  };

  const fetchRandomShow = async (genre) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${genre}`);
      const randomIndex = Math.floor(Math.random() * response.data.length);
      setShows([response.data[randomIndex].show]);
    } catch (error) {
      console.error("Error fetching data from TVMaze API", error);
    }
  };

  const saveShow = (show, label) => {
    setWatchlist([...watchlist, { show, label }]);
  };

  return (
    <div>
      <Header />
      <section className='searchSection'>
        <div className='searchContainer'>
          <ShowSearchBar onSearch={searchShows} />
          <GenreSearchBar onRandom={fetchRandomShow} />
        </div>
      </section>

      <section className='recSection'>
        <RecommendationsList shows={shows} onSave={saveShow} />
      </section>


      <section className='watchListSection'>
        <WatchList watchlist={watchlist} />
      </section>
    </div>
  );
};




export default App;
