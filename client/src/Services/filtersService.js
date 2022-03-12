const urlMoviesByCategories = "/api/movies/categories"
export async function fetchMoviesCategories() {
  const response = await fetch(urlMoviesByCategories, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  const data = await response.json()

  return data.categories
}

const urlMoviesByCategory = "/api/movies/categories/"
export async function fetchMoviesByCategory(category) {
  const response = await fetch(`${urlMoviesByCategory}${category}`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  const data = await response.json()

  return data.movies
}


const urlMovieByTitle = "/api/movies/search/"
export async function fetchMoviesByTitle(title) {
  const response = await fetch(`${urlMovieByTitle}?title=${title}`, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
  const data = await response.json()

  return data.movie
}
