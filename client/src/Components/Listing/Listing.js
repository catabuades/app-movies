import './base.scss';
import React, { useState } from 'react'
import Poster from '../Poster/Poster'
import Sidebar from '../Sidebar/Sidebar'

function Listing({ movies }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const sidebarBehavior = () => {
    if (isSideBarOpen === true) {

    }
  }

  return (
    <>
      <div className="listing">
        <Sidebar onOpenSidebar={sidebarBehavior}></Sidebar>
        <div className="listingGrid">
          {movies.map((movie) => (
            <Poster key={movie.title} poster={movie}></Poster>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
