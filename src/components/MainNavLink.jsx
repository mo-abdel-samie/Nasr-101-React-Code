import { NavLink } from "react-router-dom";

export default function MainNavLink({ name, path }) {
  return (
    <NavLink className="nav-link text-success" to={path}>
      {name}
    </NavLink>
  );
}
