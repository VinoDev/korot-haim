import React, { useState } from "react";
import { Button } from "@material-ui/core";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import "./displayResume.css";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDoc } from "./templates/ResumeDoc";

function DisplayResume(props) {
  const [link, setLink] = useState();

  return (
    <div>
      <PDFViewer
        style={{
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          borderRadius: "50px",
        }}
        id="resume-capture"
        id="pdf-viewer"
      >
        <ResumeDoc />
      </PDFViewer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          style={{
            fontSize: "22px",
            marginTop: "14px",
            alignContent: "center",
            fontWeight: "bold",
            width: "250px",
            textDecoration: "none",
            color: "white",
          }}
          href={link}
          target="_blank"
        >
          <PDFDownloadLink
            id="pdf-download-link"
            document={<ResumeDoc />}
            fileName="cv.pdf"
          >
            {({ blob, url, loading, error }) => {
              if (loading) {
                return <div>Loading document...</div>;
              } else {
                setLink(url);
                return <div>הורד</div>;
              }
            }}
          </PDFDownloadLink>
          <GetAppRoundedIcon style={{ marginTop: "4px" }} />
        </Button>
      </div>
    </div>
  );
}

export default DisplayResume;
