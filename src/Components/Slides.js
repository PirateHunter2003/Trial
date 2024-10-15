import React, { useState } from "react";
import "./TrendingNow.css";

const TrendingNow = () => {
  const [country, setCountry] = useState("India");
  const [category, setCategory] = useState("Movies");

  const movies = [
    { id: 1, title: "Sector 36", image: "/img1.png" },
    { id: 2, title: "Mr. Bachchan", image: "/img2.png" },
    { id: 3, title: "Bad Boys", image: "/img3.png" },
    { id: 4, title: "Rebel Ridge", image: "img4.png" },
    { id: 5, title: "Hay", image: "img5.png" },
  ];

  return (
    <div className="trending-now-container">
      <div className="trending-header">
        <h2>Trending Now</h2>
        <div className="filters">
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="India">India</option>
            {/* Add more countries */}
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Movies">Movies</option>
            {/* Add more categories */}
          </select>
        </div>
      </div>
      
      <div className="movie-carousel">
        {movies.map((movie, index) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
              <h3>{index + 1}</h3>
              <h4>{movie.title}</h4>
              <span>Recently added</span>
            </div>
          </div>
        ))}
        <button className="carousel-btn right-btn">{">"}</button>
      </div>
    </div>
  );
};

export default TrendingNow;
