import './base.scss';

function Poster({ poster }) {
  return (
    <div className="poster">
      <img src={poster.image} className="poster__image" alt="logo" />
      <p className="poster__title">{poster.title}</p>
      <p className="poster__director">{poster.director}</p>
      <ul className="poster__categories">
        {poster.categories.map((category) => (
          <li className="poster__category" key={category}>{category}</li>
        ))}
      </ul>
      <p className="poster__rate">{poster.rate}</p>
    </div>
  );
}

export default Poster;
