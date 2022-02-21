import './base.scss';
import Tag from '../Tag/Tag'
import Rating from '../Rating/Rating'

function Poster({ poster }) {
  return (
    <div className="poster">
      <div className="poster__content">
        <img src={poster.image} className="poster__image" alt="logo" />
        <a href="" className="poster__title">{poster.title}</a>
        <a href="" className="poster__director">{poster.director}</a>
        <Rating rating={poster.rate}></Rating>
      </div>
      <div className="poster__categories">
        {poster.categories.map((category) => (
          <Tag key={category} item={category}></Tag>
        ))}
      </div>
    </div>
  );
}

export default Poster;
