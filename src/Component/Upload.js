// Upload.js

import React, { useState, useEffect } from "react";
import "./Upload.css";
import { v4 as uuidv4 } from "uuid";
import UploadList from "./Videolist";

function Upload({ handlePageChange, setAllFile, AllFile }) {
  const [videoName, setVideoName] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [typeVdo, settypeVdo] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 40);
    }
  }, [filled, isRunning]);

  const handleFileUpload = (e) => {
    console.log("ee", e);
    if (e.target.files[0].size > 200 * 1024 * 1024) {
      setError("File size exceeds the limit of 200MB");
      return;
    } else {
      setFile(e.target.files[0]);
      console.log("URL ", URL.createObjectURL(e.target.files[0]));
      setIsRunning(true);
      //   URL.createObjectURL(event.target.files[0])
    }
  };

  const handleUpload = () => {
    if (!videoName) {
      setError("Please enter a video name");
      return;
    } else if (!file) {
      setError("Please select a video file");
      return;
    } else {
      const obj = {
        Name: videoName,
        Type: typeVdo,
        File: file,
        id: uuidv4(),
      };
      console.log(videoName, typeVdo, file);
      setAllFile((oldArray) => [...oldArray, obj]);
      console.log(AllFile);
      setVideoName("");
      setFile(null);
      settypeVdo("");
      setFilled(0);
    }
  };

  const HandleNext = () => {
    handlePageChange("list");
  };
  const handleBack = () => {
    handlePageChange("login");
  };
  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <form>
        <div style={{ display: "flex" }}>
          <p style={{ width: "calc(60% - 90px)" }}>Video Name : </p>
          <input
            type="text"
            placeholder="Video Name"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ width: "calc(60% - 90px)" }}>Type : </p>
          <select
            value={typeVdo}
            name="Select Type"
            onChange={(e) => settypeVdo(e.target.value)}
          >
            <option value="Poetic">Select</option>
            <option value="Poetic">Poetic</option>
            <option value="Expository">Expository</option>
            <option value="Observational">Observational</option>
            <option value="Participatary">Participatary</option>
            <option value="Performative">Performative</option>
            <option value="Reflexive">Reflexive</option>
          </select>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ width: "calc(60% - 90px)" }}>File : </p>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        {file && (
          <div className="progressbar">
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "rgb(0 255 74)",
                transition: "width 0.5s",
              }}
            ></div>
            <span className="progressPercent">{filled}%</span>
          </div>
        )}
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
      <div style={{ display: "flex", marginTop: "13px" }}>
        <button
          type="button"
          onClick={handleBack}
          style={{ marginRight: "5px" }}
        >
          Back
        </button>
        <button type="button" onClick={HandleNext}>
          Next
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      
      <div>
        {/* <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button> */}
      </div>
    </div>
  );
}

export default Upload;
