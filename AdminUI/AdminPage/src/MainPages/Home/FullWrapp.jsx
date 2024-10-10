// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import DownloadLinks from '../Home/DownloadLinks';
import FunctionalitiesGrid from '../Home/FunctionalitiesGrid';
import Top from '../Home/Top';

const FullWrapp = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex flex-grow h-full">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className="flex-grow p-4" style={{marginLeft:"-275px",marginTop:"-40px"}}>
        <DownloadLinks />
        <Top />
        <div className="mt-6"> {/* Adjust margin for better spacing */}
          <FunctionalitiesGrid />
        </div>
      </main>
    </div>
  );
};

export default FullWrapp;
