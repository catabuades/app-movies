import React from 'react'
import './App.css';
import Listing from './Components/Listing/Listing'

const arrayMovies = [
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX140_CR0,0,140,209_AL_.jpg',
    title: 'Jurassic Park',
    categories: ['action', 'adventure', 'sci-fi'],
    rate: 8.1
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
    title: 'Kill Bill: Volumen 1',
    categories: ['action', 'crime', 'drama'],
    rate: 8.1
  },
  {
    image: 'https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_UY209_CR0,0,140,209_AL_.jpg',
    title: 'Hombres de Negro II',
    categories: ['action', 'adventure', 'comedy'],
    rate: 6.2
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
