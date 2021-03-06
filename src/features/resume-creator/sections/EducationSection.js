import "./sections.css";
import React, { useState } from "react";
import { Button, Chip } from "@material-ui/core";
import formSlice from "../state/formSlice";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";

const { addEducation, removeEducation } = formSlice.actions;

const EducationSection = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">השכלה</span>
      <span className="description">
        בחלק זה תציינו את ההשכלה שלכם, היכן למדתם וכמה שנים
      </span>

      {props.education.length !== 0 && (
        <div className="chipsGroup">
          {props.education.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onDelete={() => {
                    props.dispatcher(removeEducation(index));
                  }}
                  label={`${item.degree} - ${item.schoolName}`}
                />
              </div>
            )
          })}
        </div>
      )}

      <SwitchButton
        btnText="הוסף לימודים +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm && (
        <AddEducationForm
          setButton={setShowForm}
          handleState={(newEducation) =>
            props.dispatcher(addEducation(newEducation))
          }
        />
      )}

    </div>
  );
}

const AddEducationForm = (props) => {
  const [schoolName, setschoolName] = useState();
  const [degree, setDegree] = useState();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [summary, setSummary] = useState();

  const [degreeError, setDegreeError] = useState('');
  const [schoolNameError, setSchoolNameError] = useState('');
  const [startDateError, setStartDateError] = useState('');

  const validateEducation = () => {
    
    let degreeErrorMsg = ""
    degree ? degreeErrorMsg = "" : degreeErrorMsg = "יש להזין תיאור השלכה"
    setDegreeError(degreeErrorMsg)

    let schoolNameErrorMsg = ""
    schoolName ? schoolNameErrorMsg = "" : schoolNameErrorMsg = "יש להזין שם מוסד"
    setSchoolNameError(schoolNameErrorMsg)

    let startDateErrorMsg = ""
    startDate ? startDateErrorMsg = "" : startDateErrorMsg = "יש להזין שנה לתחילת לימודים"
    setStartDateError(startDateErrorMsg)

    if(schoolNameErrorMsg || degreeErrorMsg || startDateErrorMsg){
      return false
    }
    else{
      return true
    }
  }

  const addEducation = () => {
    let isValid = validateEducation()
    if(isValid){
      props.handleState({
        degree,
        schoolName,
        startDate,
        endDate,
        summary,
      });
      props.setButton(false);
    }
  }

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput 
          name="תיאור ההשכלה" 
          error={!!degreeError} 
          handleState={setDegree} 
        />
        <BasicInput 
          name="שם המוסד" 
          error={!!schoolNameError} 
          handleState={setschoolName} 
        />
      </div>
      <div className="row-inputs">
        <BasicInput 
          name="שנת תחילת הלימודים" 
          error={!!startDateError}
          inputProps={{ maxLength: 4 }}  
          handleState={setStartDate} 
        />
        <BasicInput 
          name="שנת סיום הלימודים"
          inputProps={{ maxLength: 4 }}  
          handleState={setEndDate} 
        />
      </div>
      <div className="row-inputs">
        <TextArea
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={addEducation}
      >
        הוספה
      </Button>
    </div>
  );
}

export default EducationSection;
