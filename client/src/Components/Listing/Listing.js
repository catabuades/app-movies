import './base.scss';
import React, { useState, useEffect } from 'react'
import Poster from '../Poster/Poster'
import Sidebar from '../Sidebar/Sidebar'
import { fetchMoviesByCategory } from '../../Services/filtersService' 

function Listing({ movies }) {
  const [isOpen, setOpen] = useState(false);
  const [listingMovies, setListingMovies] = useState([]) 
  const isTablet = window.innerWidth >= 768;

  const toggleSidebar = () => {
    setOpen(!isOpen); 
  };

  const handleSelectCategory = (category) => {
    async function fetchMoviesFilterCategory() {
      const data = await fetchMoviesByCategory(category)
      setListingMovies(data)
    }

    fetchMoviesFilterCategory(category)
  };

  return (
    <>
      <div className={`listing app-sidebar ${isOpen && isTablet ? "sidebarOpenMoveGrid" : ""}`}>
        <Sidebar movies={listingMovies} isOpen={isOpen} onOpenSidebar={toggleSidebar}
          onChangeCategory={handleSelectCategory}
        ></Sidebar>
        <div className="listingGrid">
          {movies.map((movie) => (
            <Poster key={movie.title} movie={movie}></Poster>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
