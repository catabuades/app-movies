import './base.scss';
import React, { useState } from 'react'
import Filters from '../Filters/Filters'

function Sidebar({ movies, isOpen, onOpenSidebar, onChangeCategory }) {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <div className={`sidebar ${isOpen && isMobile ? "open" : ""}`} >
        <div className="sidebar--fixed">
          <div className="sidebar__toggle">
            <span className="sidebar__link" onClick={onOpenSidebar}>Filters</span>
          </div>
          <div className="sidebar__filters">
            <Filters movies={movies} isOpen={isOpen} 
              onChangeCategory={onChangeCategory}
            ></Filters>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
