
import { Link, NavLink } from "react-router-dom";


const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={"nav-link"}>
                Home
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                to="category"
                className={"nav-link" }
              >
                Category
              </NavLink>
            </li>

             */}

            <li className="nav-item">
              <NavLink to="az" className={"nav-link"}>
                A to Z
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="category" className={"nav-link"}>
                Category
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="verb" className={"nav-link"}>
                Verb
              </NavLink>
            </li>

          
          </ul>
        </div>
      </div>
    </nav>
  );
   
}
