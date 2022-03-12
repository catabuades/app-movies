import './base.scss';
import React, { useState } from 'react'
import Poster from '../Poster/Poster'
import Sidebar from '../Sidebar/Sidebar'

function Listing({ movies, onChangeCategory, onChangeTitle }) {
  const [isOpen, setOpen] = useState(false);
  const isTablet = window.innerWidth >= 768;

  const toggleSidebar = () => {
    setOpen(!isOpen); 
  };

  return (
    <>
      <div className={`listing app-sidebar ${isOpen && isTablet ? "sidebarOpenMoveGrid" : ""}`}>
        <Sidebar movies={movies} isOpen={isOpen} onOpenSidebar={toggleSidebar}
          onChangeCategory={onChangeCategory}
          onChangeTitle={onChangeTitle}
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
