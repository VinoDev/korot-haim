import BasicInput from "../BasicInput";
import "./resumeForm.css";
import { addToFirestore } from '../../Hooks/useFirestore';
import React, { useState } from "react";

const ResumeForm = () => {

  const [name, setName] = useState()
  const [laseName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  const handleClick = async (e) => {
    e.preventDefault()
    addToFirestore()
  }
  
  return (
    <form>
      <h3>פרטים אישיים</h3>
      <div className="form-section">
        <div className="row-inputs">
          <BasicInput name={"שם משפחה"} handleState={setLastName} />
          <BasicInput name={"שם פרטי"} handleState={setName} />
        </div>

        <div className="row-inputs">
          <BasicInput name={"מייל"} handleState={setEmail} />
          <BasicInput name={"טלפון"} handleState={setPhoneNumber} />
        </div>
        <button onClick={handleClick}>Test</button>
      </div>
    </form>
  );
}

export default ResumeForm