// import { Route, Routes } from "react-router";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
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
