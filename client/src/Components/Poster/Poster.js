import './base.css';

function Poster({ poster }) {
  return (
    <div className="Poster">
       <img src={poster.image} className="Poster-image" alt="logo" />
       <p className="Poster-title">{poster.title}</p>
       <ul>
       </ul>
       <p className="Poster-categories">{poster.categories}</p>
       <p className="Poster-rate">{poster.rate}</p>
    </div>
  );
}

export default Poster;
