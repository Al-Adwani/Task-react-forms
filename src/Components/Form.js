import React, { useState } from "react";
import SideInfo from "./SideInfo";

function Form({ createStudent }) {
  const [enroll, setEnroll] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    emailAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent(enroll);
    
  };
  const handleChange = (e) => {
    setEnroll({ ...enroll, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-page">
      <form onSubmit>
        <input onChange={handleChange} name="name" placeholder="Name" />
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="phoneNumber"
          placeholder="Phone Number"
        />
        <input onChange={handleChange} name="power" placeholder="Your Power" />
        <input
          onChange={handleChange}
          name="emailAddress"
          placeholder="Email"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
