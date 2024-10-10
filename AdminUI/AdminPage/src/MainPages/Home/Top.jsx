// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

const Top = () => {
  return (
    <div>
      <header className="bg-gray-100 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
      <h3 className="text-black font-semibold mb-4">Share store link</h3>
        <p className="text-gray-600 mb-4">
          Customers can visit the following link and place their orders.
        </p>
        <a
          href="https://demodemo.posbytz.com"
          className="text-blue-500 underline block mb-4"
        >
          https://demodemo.posbytz.com
        </a>
        <button className="border border-green-500 text-green-500 rounded-full px-4 py-2 mb-6 hover:bg-green-50">
          Configure your Custom domain
        </button>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Share via</span>
          <FaWhatsapp className="text-green-500 w-6 h-6 cursor-pointer" />
          <FaFacebook className="text-blue-600 w-6 h-6 cursor-pointer" />
          <FaTwitter className="text-blue-400 w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
    </div>
  )
}

export default Top
