import './base.scss';
import React, { useState } from 'react'

function AddFavorite(id, onSaveAsFavorite) {
  const [favorite, setFavorite] = useState({
    id: id,
    src: "/favorite/love.png",
    alt: "Add favourite",
    saved: false
  })

  const handleAddFavorite = (id) => {
    if (setFavorite === false) {
      setFavorite({
        id: id,
        src: "/favorite/love.png",
        alt: "Add favorite",
        saved: false
      })
    } else {
      setFavorite({
        id: id,
        src: "/favorite/heart.png",
        alt: "Remove favorite",
        saved: true
      })
    }
    onSaveAsFavorite(favorite.id)
  }

  return (
    <>
      <div className="favorite" onClick={handleAddFavorite}>
        <img className="favorite__icon" src={favorite.src} alt={favorite.alt} />
      </div>
    </>
  );
}

export default AddFavorite;
