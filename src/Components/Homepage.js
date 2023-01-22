// import { Route, Routes } from "react-router";
import Specials from "./Specials";
import Testimonials from "./CustomersSay";
import HeroSection from "./HeroSection";
function Homepage() {
  return (
    <>
      <HeroSection />
      <Specials />
      <Testimonials />
    </>
  );
}
export default Homepage;
