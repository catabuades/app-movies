import './base.scss';
import Tag from '../Tag/Tag'
import Rating from '../Rating/Rating'

function Poster({ movie }) {
  return (
    <div className="poster">
      <div className="poster__content">
        <img src={movie.image} className="poster__image" alt="logo" />
        <p className="poster__title">{movie.title}</p>
        <p className="poster__director">{movie.director}</p>
        <Rating rating={movie.rate}></Rating>
      </div>
      <div className="poster__categories">
        {movie.categories.map((category) => (
          <Tag key={category} item={category}></Tag>
        ))}
      </div>
    </div>
  );
}

export default Poster;
