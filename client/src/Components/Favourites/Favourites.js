import './base.scss';
import React from 'react'
import Listing from '../Listing/Listing'

function Favourites({ movies }) {
  return (
    <Listing movies={movies} />
  );
}

export default Favourites;
