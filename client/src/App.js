import React from 'react'
import './App.scss';
import Listing from './Components/Listing/Listing'

const arrayMovies = [
  {
    image: 'https://static.filmin.es/images/media/35488/1/poster_0_3_1000x1500.png',
    title: 'Días del Cielo',
    director: 'Terrence Malick',
    categories: ['Drama', 'Romance'],
    año: '1978',
    rate: 7.8
  },
  {
    image: 'https://static.filmin.es/images/media/17230/1/poster_0_3_1000x1500.png',
    title: 'La Tortuga Roja',
    director: 'Michael Dudok de Wit',
    categories: ['Animación', 'Aventuras', 'Drama', 'Fantástico'],
    año: '2016',
    rate: 8.1
  },
  {
    image: 'https://static.filmin.es/images/media/12027/1/poster_0_3_1000x1500.png',
    title: 'La Novia Vestía de Negro',
    director: 'François Truffaut',
    categories: ['Clásicos', 'Thriller'],
    año: 1967,
    rate: 7.0
  },
]

function App() {
  return (
    <div className="App">
      <Listing movies={arrayMovies}></Listing>
    </div>
  );
}

export default App;
