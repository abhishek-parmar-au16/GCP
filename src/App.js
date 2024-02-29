import React, { useState } from 'react';
import Header from './Component/Header';
import Login from './Component/Login';
import Upload from './Component/Upload';
import VideoList from './Component/Videolist';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [AllFile, setAllFile] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} />
      {currentPage === 'login' && <Login handlePageChange={handlePageChange} />}
      {currentPage === 'upload' && <Upload handlePageChange={handlePageChange} AllFile={AllFile} setAllFile={setAllFile} />}
      {currentPage === 'list' && <VideoList handlePageChange={handlePageChange} AllFile={AllFile} setAllFile={setAllFile} />}
    </div>
  );
}

export default App;
