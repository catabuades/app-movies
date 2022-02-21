import './base.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__toggle">
        <span className="sidebar__link">Filters</span>
        <input type="checkbox" />
        <ul className="sidebar__menu">
          <p>hola</p>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
