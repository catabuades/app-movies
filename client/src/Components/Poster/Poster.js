import './base.scss';
import Tag from '../Tag/Tag'
import Score from '../Score/Score'
import AddFavorite from '../AddFavorite/AddFavorite';
import { useAuthenticator } from "../../Contexts/AuthenticatorProvider";

function Poster({ movie }) {
  const { authData } = useAuthenticator();

  const handleSaveFavorite = (id) => {
    console.log(id)
  }

  return (
    <>
      <div className="poster">
        <div className="poster__content">
          <div className="poster__imageContainer">
          {authData !== "" && (
            <AddFavorite id={movie.id} onSaveAsFavorite={handleSaveFavorite}></AddFavorite>
          )}
            <img src={movie.image} className="poster__image" alt="logo" />
          </div>
          <p className="poster__title">{movie.title}</p>
          <p className="poster__director">{movie.director}</p>
          <Score rating={movie.rate}></Score>
        </div>
        <div className="poster__categories">
          {movie.categories.map((category) => (
            <Tag key={category} item={category}></Tag>
          ))}
        </div>
      </div>
    </>
  );
}

export default Poster;
