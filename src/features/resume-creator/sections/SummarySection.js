import React from "react";
import TextArea from "../../../common/TextArea"

function SummarySection(props) {
  return (
    <div className="form-section">
      <h1>סיכום מקצועי</h1>
      <p>תרשמו 2-3 משפטים ברורים לגבי הניסיון הכללי שלכם</p>
      <div className="row-inputs">
        <TextArea
          onChange={(e) => {
            props.dispatcher(props.reducer(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default SummarySection;
