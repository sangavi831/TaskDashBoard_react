import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      

      <nav className="sidebar-nav">
        <Link
          to="/"
          className={`sidebar-link ${isActive("/") ? "active" : ""}`}
        >
           Home
        </Link>
        <Link
          to="/add-task"
          className={`sidebar-link ${isActive("/add-task") ? "active" : ""}`}
        >
          Add Task
        </Link>
        <Link
          to="/about"
          className={`sidebar-link ${isActive("/about") ? "active" : ""}`}
        >
           About
        </Link>
      </nav>
    </aside>
  );
}

