import './base.scss';
import { NavLink } from "react-router-dom";
import { useAuthenticator } from "../../Contexts/AuthenticatorProvider";
import { useNavigate } from "react-router-dom";


function TopBar() {
  const { authData } = useAuthenticator();
  const { logout } = useAuthenticator();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate("/", { replace: true });
  };

  const handleFavoruitesClick = () => {
    navigate("/favourites", { replace: true });
  };

  return (
    <>
      {authData === "" && (
        <div className="topBar">
          <NavLink className={data => `topBar__link ${data.isActive ? "active" : ""}`} to="/login">ACCOUNT</NavLink>
        </div>
      )}
      {authData !== "" && (
        <div className="topBar">
          <p>{`Welcome ${authData.name}`}</p>
          <NavLink className="topBar__link" to="/favourites" onClick={handleFavoruitesClick}>FAVOURITES</NavLink>
          <NavLink className={data => `topBar__link ${data.isActive ? "active" : ""}`} to="/" onClick={handleLogoutClick}>LOGOUT</NavLink>
        </div>
      )}
    </>
  );
}

export default TopBar;
