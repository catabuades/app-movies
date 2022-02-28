import './base.scss';

function Rating({ rating }) {

  const handleConvertRatingToStars = () => {
    //const starsActive = (5 * rating) / 10
    //return starsActive

    const stars = new Array(rating).fill(1)

    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="fa fa-star Rating__star active"></span>)
    }

    return stars
  }
  

  return (
    <div className="Rating">
      <div className="Rating__under">
        <span className="fa fa-star Rating__star"></span>
        <span className="fa fa-star Rating__star"></span>
        <span className="fa fa-star Rating__star"></span>
        <span className="fa fa-star Rating__star"></span>
        <span className="fa fa-star Rating__star"></span>
      </div>
      <div className="Rating__over">
        {handleConvertRatingToStars}
      </div>
    </div>
  );
}

export default Rating;
