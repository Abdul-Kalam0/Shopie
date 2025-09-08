import { NavLink } from "react-router";

const Header = () => {
  return (
    <main className="bg-dark text-light py-1">
      <div className="container">
        <h1>Shopie</h1>
        <nav className="">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};
export default Header;
