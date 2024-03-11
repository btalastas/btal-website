import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/documents/Talastas_Bjorn_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
