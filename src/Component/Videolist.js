// VideoList.js

import React, { useState } from "react";
import Iframe from 'react-iframe'
import "./Table.css";

function VideoList({handlePageChange, setAllFile, AllFile ,url ,setUrl }) {
  const [VedioSource, setVedioSource] = useState("");
  // Fetch and display video list from JSON here
  const handlePlay = (itemId) => {
    console.log("Play item:", URL.createObjectURL(itemId?.File));
    setVedioSource(url);
    // Implement play action here
  };

  // Delete function
  const handleDelete = (itemId) => {
    setAllFile(AllFile.filter((i) => i.id !== itemId.id));
    // Implement delete action here
  };

  const handleChangeredirect =()=>{
    handlePageChange("upload")
  }
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Vedio Name</th>
              <th>Type</th>
              <th>File Name</th>
              <th>File Size</th>
              <th>Option</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {AllFile.map((item) => (
              <tr key={item.id}>
                <td>{item.Name}</td>
                <td>{item.Type}</td>
                <td>{item.File.name}</td>
                <td>{Math.round(item.File.size/(1024*1024))}{" MB"}</td>
                <td>
                  <button onClick={() => handlePlay(item)}>Play</button>{" "}
                  {/* Play button */}
                  <button onClick={() => handleDelete(item)}>
                    Delete
                  </button>{" "}
                  {/* Delete button */}
                </td>
                {/* Add more table cells for additional data */}
              </tr>
            ))}
          </tbody>
        </table>
        {/* Display video list */}
      </div>
      <div className="vedio" >
        
        <video controls width="40%" height="40%" >
          <source
            src={VedioSource}
            type={"video/mp4"}
          />
          Your browser does not support the video tag.
        </video>
        {/* <Iframe url="https://www.sdrive.app/embed/1ptBQD"
        width="640px"
        height="320px"
        id=""
        className=""
        // display="block"
        position="relative"/> */}
      </div>
      <div className="button-container">
        <button className="button" onClick={handleChangeredirect}>Upload New</button>
      </div>
    </div>
  );
}

export default VideoList;
