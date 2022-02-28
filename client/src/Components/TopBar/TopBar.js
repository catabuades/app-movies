import './base.scss';
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <>
      <div className="topBar">
        <NavLink className={data => `topBar__link ${data.isActive ? "active" : ""}`} to="/login">ACCOUNT</NavLink>
      </div>
    </>
  );
}

export default TopBar;
