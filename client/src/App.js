import React from 'react'
import './App.scss';
import './mixins.scss'
import TopBar from './Components/TopBar/TopBar'
import FormAccount from './Components/FormAccount/FormAccount';
import Listing from './Components/Listing/Listing'
import Sidebar from './Components/Sidebar/Sidebar';

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
  {
    image: 'https://static.filmin.es/images/media/35726/3/poster_0_3_1500x2250.png',
    title: 'Lola',
    director: 'Laurent Micheli',
    categories: ['Drama'],
    año: '2020',
    rate: 7.7
  },
  {
    image: 'https://static.filmin.es/images/media/19306/1/poster_0_3_1500x2250.png',
    title: 'Júlia Ist',
    director: 'Elena Martín',
    categories: ['Drama'],
    año: '2017',
    rate: 6.9
  },
  {
    image: 'https://static.filmin.es/images/media/26437/5/poster_0_3_1500x2250.png',
    title: 'Los Días Que Vendrán',
    director: 'Carlos Marques-Marcet',
    categories: ['Drama', 'Comedia'],
    año: 2019,
    rate: 7.9
  },
]

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <FormAccount></FormAccount>
      <main className="App__main">
        <Sidebar></Sidebar>
        <Listing movies={arrayMovies}></Listing>
      </main>
    </div>
  );
}

export default App;
