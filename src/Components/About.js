import image1 from "../assets/Mario and Adrian A.jpg";
import image2 from "../assets/Mario and Adrian b.jpg";
function About() {
  return (
    <section className="about">
      <article className="container">
        <div className="text">
          <div className="main">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="images">
          <div className="image-container">
            <img src={image2} alt="Mario and Adrian"></img>
          </div>
          <div className="image-container">
            <img src={image1} alt="Mario and Adrian"></img>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
