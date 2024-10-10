// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaWindows, FaAndroid, FaGlobe } from "react-icons/fa";

const DownloadLinks = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
      <div className="flex space-x-4">
        {/* Windows POS Application Download Button */}
        <button className="bg-gray-100 text-black px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaWindows className="text-blue-500" />
          <span className="text-black">Windows POS Application</span>
          <span className="bg-purple-900 text-white px-2 py-1 rounded ml-4">
            Download
          </span>
        </button>

        {/* Android POS Application Download Button */}
        <button className="bg-gray-100 text-black px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaAndroid className="text-green-500 text-3xl" />{" "}
          {/* Ensure larger size */}
          <span className="text-black">Android POS Application</span>
          <span className="bg-green-700 text-white px-2 py-1 rounded ml-4">
            Download
          </span>
        </button>

        {/* POS Web Application Button */}
        <button className="bg-gray-100 text-black px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaGlobe className="text-blue-500" />
          <span className="text-black">POS Web Application</span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded ml-4">
            Open
          </span>
        </button>
      </div>
    </div>
  );
};

export default DownloadLinks;
