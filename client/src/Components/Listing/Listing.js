import './base.scss';
import Poster from '../Poster/Poster'

function Listing({ movies }) {
  return (
    <div className="Listing">
      {movies.map((movie) => (
        <Poster key={movie.title} poster={movie}></Poster>
      ))}
    </div>
  );
}

export default Listing;
