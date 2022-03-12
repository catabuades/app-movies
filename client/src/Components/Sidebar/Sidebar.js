import './base.scss';
import React from 'react'
import Filters from '../Filters/Filters'

function Sidebar({ movies, isOpen, onOpenSidebar, onChangeCategory, onChangeTitle }) {
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
              onChangeTitle={onChangeTitle}
            ></Filters>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
