import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error.message);
      setError("Error fetching PDFs");
    }
  };

  const showPdf = (pdf) => {
    setPdfFile(`http://localhost:5000/files/1701878837654cristiano.png`);
  };

  return (
    <div className="App">
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => (
              <div className="inner-div" key={data.pdf}>
                <h6>Title: {data.title}</h6>
                <button
                  className="btn btn-primary"
                  onClick={() => showPdf(data.pdf)}
                >
                  Show Pdf
                </button>
              </div>
            ))}
            <img src={`http://localhost:5000/files/1701878837654cristiano.png`}/>
        </div>
      </div>
      <PdfComp pdfFile={pdfFile} />
    </div>
  );
}

export default App;
