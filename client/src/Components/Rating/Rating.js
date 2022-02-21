import './base.scss';

function Rating({ rating }) {

  const handleConvertRatingToStars = () => {
    //const starsActive = (5 * rating) / 10
    //return starsActive

    const stars = new Array(rating).fill(1)

    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} class="fa fa-star Rating__star active"></span>)
    }

    return stars
  }
  

  return (
    <div class="Rating">
      <div class="Rating__under">
        <span class="fa fa-star Rating__star"></span>
        <span class="fa fa-star Rating__star"></span>
        <span class="fa fa-star Rating__star"></span>
        <span class="fa fa-star Rating__star"></span>
        <span class="fa fa-star Rating__star"></span>
      </div>
      <div class="Rating__over">
        {handleConvertRatingToStars}
      </div>
    </div>
  );
}

export default Rating;
