import React, { useEffect, useState } from 'react';
import axios from '../axios/Axios';
import requests from '../axios/Reduests'; 
import './Banner.css';

function Banner() {
  const [movi, setMovi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovi(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movi?.backdrop_path}')`,
        backgroundPosition: 'center cente',
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">{movi?.title || movi?.name || movi?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movi.overview || movi.name, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
