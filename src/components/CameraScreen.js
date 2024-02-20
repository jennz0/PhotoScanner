import React, { useState } from "react";
import Webcam from "react-webcam";
import Tesseract from "tesseract.js";
import "../CameraScreen.css";

function CameraScreen() {
  const webcamRef = React.useRef(null);
  const [licenseInfo, setLicenseInfo] = useState("");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    Tesseract.recognize(
      imageSrc,
      'eng', // Language code for English
      { logger: m => console.log(m) } // Optional logger
    ).then(({ data: { text } }) => {
      console.log(text);
      setLicenseInfo(text); // Set recognized text to state
    });
  }, [webcamRef]);

  return (
    <>
        <h1>Photo Scanner</h1>
        <div className="camera-container">
        <Webcam
            audio={false}
            height={480}
            width={480}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
        />
        <button onClick={capture} className="capture-button">Capture photo</button>
        <div className="license-info-container">
            <h4>Extracted Information:</h4>
            {licenseInfo ? (                                        // If licenseInfo is not empty, display it
            <p className="license-info">{licenseInfo}</p>
            ) : (
            <p className="no-photo-message">No photo captured</p> // If licenseInfo is empty, display this message
            )}
        </div>
        </div>
    </>
    
  );
}

export default CameraScreen;
