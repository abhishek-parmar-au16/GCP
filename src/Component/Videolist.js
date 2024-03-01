// VideoList.js

import React, { useState ,useRef ,useEffect} from "react";
import "./Table.css";
import firstVdo from "./Videos/13 - Views  Layouts Part A.mp4"
import secondVdo from "./Videos/19 - Logout  Access Control Part A.mp4"
import thirdVdo from "./Videos/intod.mp4"


const VideoPlayer = ({ src }) => {
  return (
    <video controls width="40%" height="40%" autoplay>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};


function VideoList({handlePageChange, setAllFile, AllFile ,url ,setUrl }) {
  const [VedioSource, setVedioSource] = useState(thirdVdo);


  // Fetch and display video list from JSON here
  const handlePlay = (itemId) => {
    console.log("Play item:", itemId);
    if(VedioSource ==true){

      setVedioSource(false);
    }else{

      setVedioSource(true);
    }
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
  console.log("vedio" ,VedioSource);
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
      {VedioSource===true && (
      <div className="vedio">
        <VideoPlayer  src={firstVdo} />
      </div>
      )}
      {VedioSource=== false && (
      <div className="vedio" >
        <VideoPlayer src={secondVdo} />
      </div>
      )}
      {VedioSource=== thirdVdo && (
      <div className="vedio" >
        <VideoPlayer src={thirdVdo} />
      </div>
      )}
      <div className="button-container">
        <button className="button" onClick={handleChangeredirect}>Upload New</button>
      </div>
    </div>
  );
}

export default VideoList;
