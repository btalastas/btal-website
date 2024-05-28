import * as React from "react";
import Button from "@mui/material/Button";

function Resume() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        href={`${process.env.PUBLIC_URL}Talastas_Bjorn_Resume.pdf`}
        download
      >
        Download PDF
      </Button>
    </div>
  );
}

export default Resume;
