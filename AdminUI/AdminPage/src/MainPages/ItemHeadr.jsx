// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ItemHeader = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State to store the active button
  const [activeButton, setActiveButton] = useState("Item Library");

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    // Check if the clicked button is "Taxes", then navigate
    if (buttonName === "Taxes") {
      navigate("/ItemTaxes");
    }else{
      buttonName === "Categories"
      navigate("/ItemCategorys");
    }
  };

  return (
    <div className="bg-purple-900 p-4 text-white flex justify-start space-x-6">
   
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Item Library" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Item Library")}
      >
        Item Library
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Variations" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Variations")}
      >
        Variations
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Categories" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Categories")}
      >
        Categories
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Brands" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Brands")}
      >
        Brands
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Discounts" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Discounts")}
      >
        Discounts
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Gift Cards" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Gift Cards")}
      >
        Gift Cards
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Taxes" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Taxes")}
      >
        Taxes
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Charges" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Charges")}
      >
        Charges
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Price Categories" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Price Categories")}
      >
        Price Categories
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Printer Labels" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Printer Labels")}
      >
        Printer Labels
      </button>
      <button
        className={`py-2 px-4 rounded-lg ${
          activeButton === "Attribute Values" ? "bg-purple-500" : ""
        }`}
        onClick={() => handleButtonClick("Attribute Values")}
      >
        Attribute Values
      </button>
    </div>
  );
};

export default ItemHeader;
