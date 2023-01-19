import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header.js";
import Homepage from "./Components/Homepage.js";
import CallToAction from "./Components/CallToAction.js";
import Specials from "./Components/Specials.js";
import CustomersSay from "./Components/CustomersSay.js";
import Chicago from "./Components/Chicago.js";
import BookingPage from "./Components/BookingPage.js";

import Footer from "./Components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hero" element={<CallToAction />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<CustomersSay />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
