const urlMovies = "/api/movies"
export default async function fetchAllMovies() {
  const response = await fetch(urlMovies)
  const data = await response.json()

  return data.movies
}