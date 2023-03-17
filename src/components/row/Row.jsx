import React, { useEffect, useState } from 'react';
import axios from '../axios/Axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="">{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movi) =>
            ((isLargeRow && movi.poster_path) || (!isLargeRow && movi.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={movi.id}
                src={`${base_url}${isLargeRow ? movi.poster_path : movi.backdrop_path}`}
                alt={movi.name}
              />
            ),
        )}
      </div>
    </div>
  );
}

export default Row;
