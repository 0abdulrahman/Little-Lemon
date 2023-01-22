import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../style.css";

function Header() {
  return (
    <header className="header container">
      <Link to="/">
        <img className="logo" src={Logo} alt="Little Lemon" />
      </Link>
      <nav>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/specials">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}

export default Header;
