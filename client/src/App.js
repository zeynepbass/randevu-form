import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function App() {
  const initialState = {
    title:"",
    message:"",
    creator:"",
    checked:"",
    
    startDate:"",
  };
  const [form, setForm] = useState(initialState);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const gonder = async () => {
 
    await axios.post("/randevu", { ...form, startDate: startDate }).then((response) => {
    
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    gonder();
    console.log(form);
  };
  const [startDate, setStartDate] = useState(new Date());
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setForm({ ...form, startDate: date }); // startDate değerini form nesnesine ekleyin
  };
  
  return (
    
    <div className="container" style={{ paddingTop: "10%" }}>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="title"
            placeholder="Ad"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="message"
            placeholder="Soyad"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="creator"
            onChange={handleChange}
            placeholder="Açıklama"
          ></textarea>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="checked"
            onChange={handleChange}
            id="inlineRadio1"
            value="Kadın"
          />
          <label class="form-check-label" for="inlineRadio1">
            Kadın
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="checked"
            onChange={handleChange}
            id="inlineRadio2"
            value="Erkek"
          />
          <label class="form-check-label" for="inlineRadio2">
          Erkek
          </label>
        </div>

        <div className="form-group pt-4">
        <DatePicker selected={startDate}    className="form-control"   name="startDate"  onChange={handleStartDateChange} />
         
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ display: "block", margin: "auto" }}
        >
          Gönder
        </button>
      </form>
    </div>
  );
}

export default App;
