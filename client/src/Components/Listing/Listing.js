import './base.scss';
import React, { useState, useEffect } from 'react'
import Poster from '../Poster/Poster'
import Sidebar from '../Sidebar/Sidebar'

function Listing({ movies }) {
  const [isOpen, setOpen] = useState(false);
  const [listingMovies, setListingMovies] = useState([]) 
  const isTablet = window.innerWidth >= 768;

  const toggleSidebar = () => {
    setOpen(!isOpen); 
  };

  useEffect(() => {
    setListingMovies(movies);
  }, [movies]);

  const handleSelectCategory = (event, category) => {
    // Hacer deep copy de la array de productos para así poder modificarla
    const moviesCopy = [...listingMovies]

    category = event.value

    console.log(category)

    /*
    function checkCategory(moviesCopy, category) {
      console.log(moviesCopy)
      console.log(category)
      return moviesCopy.some(function(arrCategory) {
        return category === arrCategory;
      });
    }

    checkCategory(moviesCopy, category)
    console.log(checkCategory(moviesCopy, category))
    */
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
