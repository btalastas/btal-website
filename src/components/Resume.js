import * as React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/documents/Talastas_Bjorn_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
