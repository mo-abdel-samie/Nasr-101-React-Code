import { Link, Outlet } from "react-router-dom";

export default function StudentLayout({ children }) {
  return (
    <div>
      <div className="d-flex gap-2">
        <Link
          className="nav-link bg-success text-white rounded p-2"
          to="/student/courses"
        >
          Courses
        </Link>
        <Link
          className="nav-link bg-success text-white rounded p-2"
          to="/student/profile"
        >
          Profile
        </Link>
      </div>
      {/* {children} */}
      <Outlet />
    </div>
  );
}
