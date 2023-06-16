import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css"
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
    <div className="container-fluid rger">


    <div className="container " style={{ paddingTop: "10%",   justifyContent: "center" }}>

      <form onSubmit={handleSubmit}>
        <h2 className="text-center pb-4 " style={{color:"white",textShadow:"2px 2px black"}}>Randevu Oluştur</h2>
        <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="title"
                placeholder="Ad"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="message"
                placeholder="Soyad"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="number"
                name="creator"
                onChange={handleChange}
                placeholder="Telefon"
              />
            </div>
          </div>


          <div className="d-flex justify-content-center">
  <div className="form-check form-check-inline pl-4">
    <input
      className="form-check-input"
      type="radio"
      name="checked"
      onChange={handleChange}
      id="inlineRadio1"
      value="Kadın"
    />
    <label className="form-check-label" htmlFor="inlineRadio1" style={{color:"white"}}>
      Kadın
    </label>
  </div>
  
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="checked"
      onChange={handleChange}
      id="inlineRadio2"
      value="Erkek"
    />
    <label className="form-check-label" htmlFor="inlineRadio2" style={{color:"white"}}>
      Erkek
    </label>
  </div>
</div>


        <div className="d-flex justify-content-center pt-2">
        <div className="form-group col-md-5 col-12">
        <DatePicker selected={startDate}    className="form-control"   name="startDate"  onChange={handleStartDateChange} />
        </div>
        </div>

        <button
          type="submit"
          className="btn btn-success col-2"
          style={{ display: "block", margin: "auto" }}
        >
          Gönder
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
