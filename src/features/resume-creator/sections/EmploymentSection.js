import React, { useState } from "react";
import BasicInput from "../../../common/BasicInput";
import TextArea from "../../../common/TextArea";
import SwitchButton from "../../../common/SwitchButton";
import formSlice from "../state/formSlice";
import { Button, Chip } from "@material-ui/core";

import "./sections.css";

const { addExperience, removeExperience } = formSlice.actions;

function EmploymentSection(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="form-section">
      <span className="title">ניסיון תעסוקתי</span>
      <span className="description">
        תוסיפו לפחות 3 שנות ניסיון רלוונטיות ותאריכים בחלק זה. תציינו את
        התפקידים האחרונים שלכם קודם
      </span>

      {props.experience.length !== 0 ? (
        <div className="chipsGroup">
          {props.experience.map((item, index) => {
            return (
              <div key={index}>
                <Chip
                  className="chip"
                  onDelete={() => {
                    props.dispatcher(removeExperience(index));
                  }}
                  label={item.company + ` - ` + item.title}
                />
              </div>
            );
          })}
        </div>
      ) : null}

      <SwitchButton
        btnText="הוסף תעסוקה +"
        currentState={showForm}
        switchStateFunc={setShowForm}
      />

      {showForm === true ? (
        <AddEmploymentForm
          setButton={setShowForm}
          handleState={(newExpirience) =>
            props.dispatcher(addExperience(newExpirience))
          }
        />
      ) : null}
    </div>
  );
}

function AddEmploymentForm(props) {
  const [company, setCompany] = useState();
  const [title, setJob] = useState();

  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();
  const [summary, setSummary] = useState();

  return (
    <div className="addForm">
      <div className="row-inputs">
        <BasicInput name="חברה/מעסיק" handleState={setCompany} />
        <BasicInput name="שם תפקיד" handleState={setJob} />
      </div>
      <div className="row-inputs">
        <BasicInput name="תאריך סוף תעסוקה" handleState={setstartDate} />
        <BasicInput name="תאריך תחילת תעסוקה" handleState={setendDate} />
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
        onClick={() => {
          props.handleState({ title, company, startDate, endDate, summary });
          props.setButton(false);
        }}
      >
        הוספה
      </Button>
    </div>
  );
}

export default EmploymentSection;
