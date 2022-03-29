import './base.scss';
import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Score({ rating }) {
  const [score, setScore] = useState("") // initial rating value

  const convertRating = () => {
    const ratingCopy = rating
    const rating100 = ratingCopy * 10;

    setScore(rating100)
  }

  useEffect(() => {
    convertRating(rating)
  }, [])


  return (
    <div className="rating">
      <Rating 
        ratingValue={score}
        size="25"
        allowHalfIcon="true" 
        readonly
      />
    </div>
  );
}

export default Score;
