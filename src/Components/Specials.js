import { Link } from "react-router-dom";
import Image from "../assets/greek salad.jpg";
import delivery_image from "../assets/delivery_black.png";

function Specials() {
  return (
    <section className="specials">
      <article className="container">
        <div>
          <h2>Week's specials:</h2>
          <Link to="">Online Menu</Link>
        </div>
        <div>
          <div className="card">
            <img src={Image} alt="Food" />
            <div className="text">
              <div className="head">
                <h3>Greek Salad</h3>
                <span>$12.99</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="delivery">
                <p>Order for delivery</p>
                <img src={delivery_image} alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Image} alt="Food" />
            <div className="text">
              <div className="head">
                <h3>Greek Salad</h3>
                <span>$12.99</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="delivery">
                <p>Order for delivery</p>
                <img src={delivery_image} alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Image} alt="Food" />
            <div className="text">
              <div className="head">
                <h3>Greek Salad</h3>
                <span>$12.99</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="delivery">
                <p>Order for delivery</p>
                <img src={delivery_image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Specials;
