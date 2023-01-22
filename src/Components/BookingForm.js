import { React, useState } from "react";
import { useNavigate } from "react-router";
import Image from "../assets/restaurant chef B.jpg";

// import GenerateTimes from "./GenerateTimes";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [diners, setDiners] = useState(1);
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    if (props.submitForm(formData)) {
      navigate("/confirmed-booking");
    }
  }
  return (
    <main>
      <section className="container form-section">
        <article className="booking">
          <div className="image">
            <p>Reserve a Table</p>
            <div>
              <img src={Image} alt="Reservation" />
            </div>
          </div>
          <form className="form" onSubmit={submitHandler}>
            <div>
              <p>Please customize your reservation:</p>
              <label htmlFor="res-date" aria-roledescription="date-picker">
                <i className="fa-regular fa-calendar"></i>
                <input
                  type="date"
                  id="res-date"
                  value={date}
                  name="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                    props.setAvailableTimes({ selectedDate: e.target.value });
                  }}
                />
              </label>
              <label htmlFor="res-time" aria-roledescription="time-picker">
                <i className="fa-regular fa-clock"></i>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                >
                  {typeof props.availableTimes === "function"
                    ? props
                        .availableTimes()
                        .map((el) => <option key={el}>{el}</option>)
                    : props.availableTimes.map((el) => (
                        <option key={el}>{el}</option>
                      ))}
                </select>
              </label>
              <label htmlFor="guests" aria-roledescription="diners-picker">
                <i className="fa-solid fa-user"></i>
                <input
                  type="number"
                  placeholder="0"
                  min="1"
                  max="10"
                  id="guests"
                  value={diners}
                  onChange={(e) => setDiners(e.target.value)}
                />
              </label>
              <label htmlFor="occasion" aria-roledescription="occasion-picker">
                <i className="fa-solid fa-champagne-glasses"></i>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option>Engagement</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </label>
            </div>
            <input
              type="submit"
              value="Make your reservation"
              id="submit-button"
            />
          </form>
        </article>
      </section>
    </main>
  );
}

// function BookingForm(props) {
//   return (
//     <section className="container form-section">
//       <article className="booking">
//         <div className="image">
//           <p>Reserve a Table</p>
//           <div>
//             <img src={Image} alt="Reservation" />
//           </div>
//         </div>
//         <form className="form" onSubmit={submitHandler}>
//           <div>
//             <p>Please customize your reservation:</p>
//             <label htmlFor="res-date" aria-roledescription="date-picker">
//               <i className="fa-regular fa-calendar"></i>
//               <input
//                 type="date"
//                 id="res-date"
//                 value={props.data.date ?? ""}
//                 onChange={(e) =>
//                   props.function({ type: "change-date", value: e.target.value })
//                 }
//               />
//             </label>
//             <label htmlFor="res-time" aria-roledescription="time-picker">
//               <i className="fa-regular fa-clock"></i>
//               <select
//                 id="res-time"
//                 value={props.data.time ?? "17:00"}
//                 onChange={(e) => {
//                   props.function({
//                     type: "change-time",
//                     value: e.target.value,
//                   });
//                 }}
//               >
//                 <GenerateTimes />
//               </select>
//             </label>
//             <label htmlFor="guests" aria-roledescription="diners-picker">
//               <i className="fa-solid fa-user"></i>
//               <input
//                 type="number"
//                 placeholder="0"
//                 min="1"
//                 max="10"
//                 id="guests"
//                 value={props.data.diners ?? 1}
//                 onChange={(e) =>
//                   props.function({
//                     type: "change-diners",
//                     value: e.target.value,
//                   })
//                 }
//               />
//             </label>
//             <label htmlFor="occasion" aria-roledescription="occasion-picker">
//               <i className="fa-solid fa-champagne-glasses"></i>
//               <select
//                 id="occasion"
//                 value={props.data.occasion ?? "Birthday"}
//                 onChange={(e) =>
//                   props.function({
//                     type: "change-occasion",
//                     value: e.target.value,
//                   })
//                 }
//               >
//                 <option>Birthday</option>
//                 <option>Engagement</option>
//                 <option>Anniversary</option>
//               </select>
//             </label>
//           </div>
//           <input
//             type="submit"
//             value="Make your reservation"
//             id="submit-button"
//           />
//         </form>
//       </article>
//     </section>
//   );
// }

export default BookingForm;
