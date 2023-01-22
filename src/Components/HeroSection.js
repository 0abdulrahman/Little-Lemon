import { Link } from "react-router-dom";
import Image from "../assets/restauranfood.jpg";
function HeroSection() {
  return (
    <section className="hero-section">
      <article className="container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/booking">Reserve a Table</Link>
        </div>
        <div className="img">
          <img src={Image} alt="Restuarant Food" />
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
