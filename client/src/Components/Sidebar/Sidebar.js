import './base.scss';

function Sidebar({ onOpenSidebar }) {
  return (
    <>
      <div className="sidebar app-sidebar" onClick={onOpenSidebar}>
        <div className="sidebar--fixed">
          <div className="sidebar__toggle">
            <span className="sidebar__link">Filters</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
