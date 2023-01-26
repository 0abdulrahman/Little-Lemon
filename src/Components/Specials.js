import { Link } from "react-router-dom";
import GreekSalad from "../assets/greek salad.jpg";
import Bruschetta from "../assets/bruchetta.jpg";
import LemonDessert from "../assets/lemon dessert.jpg";
import delivery_image from "../assets/delivery_black.png";

function Specials() {
  return (
    <section className="specials">
      <article className="container">
        <div>
          <h2>Week's specials:</h2>
          <Link to="./order-online">Online Menu</Link>
        </div>
        <div>
          <div className="card">
            <img src={GreekSalad} alt="Food" />
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
            <img src={Bruschetta} alt="Food" />
            <div className="text">
              <div className="head">
                <h3>Bruschetta</h3>
                <span>$5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <div className="delivery">
                <p>Order for delivery</p>
                <img src={delivery_image} alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={LemonDessert} alt="Food" />
            <div className="text">
              <div className="head">
                <h3>Lemon Dessert</h3>
                <span>$5.00</span>
              </div>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
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
