import Logo from "../assets/FooterLogoGreen.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="f-nav">
          <p>Doormat Navigation</p>
          <ul>
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
          </ul>
        </div>
        <div className="f-contact">
          <p>Contact</p>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="f-social">
          <p>Social Media Links</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
