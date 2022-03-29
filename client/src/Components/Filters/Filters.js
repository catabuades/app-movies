import './base.scss';
import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import { fetchMoviesByCategory, fetchMoviesCategories } from '../../Services/filtersService';

function Filters({ movies, isOpen, onChangeCategory, onChangeTitle }) {
  const [titles, setTitles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [directors, setDirectors] = useState([]);
  const areMoviesLoaded = useRef(false);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      boder: state.isFocused ? '#d4a373' : 'black'
    }),

    valueContainer: (provided) => ({
      ...provided,
      justifyContent: 'flex-start'
    }),

    menu: (provided) => ({
      ...provided,
      textAlign: 'left'
    })
  }

  async function fetchAllCategories() {
    const data = await fetchMoviesCategories()

    setCategories(
      data.map(category => ({
        value: category,
        label: category
      }))
    )
  }

  const listMoviesTitles = (movies) => {
    const listingMovies = [...movies]

    setTitles(
      listingMovies.map(movie => ({
        value: movie.title,
        label: movie.title
      }))
    )
  }

  useEffect(() => {
    fetchAllCategories()
  }, [])

  useEffect(() => {
    if (movies.length && areMoviesLoaded.current === false) {
      listMoviesTitles(movies)
      areMoviesLoaded.current = true
    }
  }, [movies])

  const handleSelectCategory = (category) => {
    onChangeCategory(category)
  };

  const handleSearchTitleChange = (title) => {
    onChangeTitle(title.value)
  };

  return (
    <>
      <div className={`filters ${isOpen ? "open" : ""}`}>
        <div className="filters__input">
          <label>By Genre</label>
          <Select 
            onChange={handleSelectCategory}
            styles={customStyles} 
            options={categories} 
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              border: '2px solid #000000',
              colors: {
                ...theme.colors,
                primary25: '#faedcd',
                primary: '#d4a373',
              },
            })}
          />
        </div>
        <div className="filters__input">
          <label>By Title</label>
          <Select 
            onChange={handleSearchTitleChange}
            styles={customStyles} 
            options={titles} 
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              border: '2px solid #000000',
              colors: {
                ...theme.colors,
                primary25: '#faedcd',
                primary: '#d4a373',
              },
            })}
          />
        </div>
      </div>
    </>
  );
}

Filters.defaultProps = {
  onChange: () => null
};

export default Filters;
