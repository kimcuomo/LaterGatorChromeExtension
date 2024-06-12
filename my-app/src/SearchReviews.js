import React, { useState } from 'react';
import axios from 'axios';

const SearchReviews = () => {
  const [query, setQuery] = useState('');
  const [reviews, setReviews] = useState([]);
  const [savedReviews, setSavedReviews] = useState(() => {
    const saved = localStorage.getItem('savedReviews');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.nytimes.com/svc/theater/v2/reviews/search.json', {
        params: {
          'api-key': '1K3qqseQeqgXqdVNuksVZQBUNDHl7LoE',
          query: query,
        },
      });
      setReviews(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveReview = (review) => {
    const newSavedReviews = [...savedReviews, review];
    setSavedReviews(newSavedReviews);
    localStorage.setItem('savedReviews', JSON.stringify(newSavedReviews));
    alert('Review saved successfully!');
  };

  return (
    <div>
      <h1>Search Theatre Reviews</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for theatre reviews"
      />
      <button onClick={fetchReviews}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.url}>
            <a href={review.url} target="_blank" rel="noopener noreferrer">
              {review.headline}
            </a>
            <button onClick={() => saveReview(review)}>Save</button>
          </li>
        ))}
      </ul>
      <h2>Saved Reviews</h2>
      <ul>
        {savedReviews.map((review) => (
          <li key={review.url}>
            <a href={review.url} target="_blank" rel="noopener noreferrer">
              {review.headline}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchReviews;