import React, { useEffect, useState } from "react";
import Modal from "react-modal"; // Make sure you import Modal from react-modal
import { FaMobileAlt, FaDesktop, FaSync } from "react-icons/fa";

Modal.setAppElement("#root");

const EditModal = () => {
  const [itemModalIsOpen, setItemModalIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState("down");

  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [condition, setCondition] = useState("");
  const [id, setId] = useState("");
  const [itemVariation, setItemVariation] = useState("");
  const [category, setCategory] = useState("");
  const [itemPosition, setItemPosition] = useState("");
  const [price, setPrice] = useState(0);
  const [link, setLink] = useState("");
  const [brand, setBrand] = useState("");
  const [step, setStep] = useState(1); // Tracks which page the user is on

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openItemModal = () => {
    setItemModalIsOpen(true);
  };

  const closeItemModal = () => {
    setItemModalIsOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen) {
      const buttonElement = document.querySelector("button");
      const { bottom, top } = buttonElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - bottom;
      const spaceAbove = top;

      // Set direction based on available space
      setDropdownDirection(spaceBelow < 160 && spaceAbove > 160 ? "up" : "down");
    }
  }, [dropdownOpen]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "auto",
      padding: "20px",
      borderRadius: "16px",
      backgroundColor: "#f7fafc", // Lighter background for a softer look
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for focus
    },
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <Modal
        isOpen={itemModalIsOpen}
        onRequestClose={closeItemModal}
        contentLabel="Create Item Modal"
        style={customStyles}
      >
        <h2 className="text-2xl mb-4">Create Item</h2>

        <form>
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                ID <span className="text-red-600 text-1xl">*</span>
                <input
                  type="text"
                  name="id"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Item ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Item Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="p-2 border rounded w-full"
                  placeholder="Item Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Alternate Name
                </label>
                <input
                  type="text"
                  name="alternateName"
                  placeholder="Translate Alternate Name"
                  className="p-2 border rounded w-full"
                  value=""
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Item Variation
                </label>
                <input
                  type="text"
                  name="itemVariation"
                  placeholder="Enter Item Variation"
                  className="p-2 border rounded w-full"
                  value={itemVariation}
                  onChange={(e) => setItemVariation(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Alternate Variation
                </label>
                <input
                  type="text"
                  name="alternateVariation"
                  placeholder="Translate Item Variation"
                  className="p-2 border rounded w-full"
                  value=""
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Description
                </label>
                <textarea
                  name="description"
                  className="p-2 border rounded w-full"
                  placeholder="Enter a detailed description of the item."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Alternate Description
                </label>
                <textarea
                  name="alternateDescription"
                  className="p-2 border rounded w-full"
                  placeholder="Translate description of the item."
                  value=""
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Item Position
                </label>
                <input
                  type="text"
                  name="itemPosition"
                  placeholder="Enter Item Position"
                  className="p-2 border rounded w-full"
                  value={itemPosition}
                  onChange={(e) => setItemPosition(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Category <span className="text-red-600 text-1xl">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="p-2 border rounded w-full text-left bg-white focus:outline-none focus:ring focus:border-blue-300"
                    onClick={toggleDropdown}
                  >
                    {category?.categoryName || "Select Category"}
                  </button>

                  {dropdownOpen && (
                    <ul
                      className={`absolute ${
                        dropdownDirection === "up"
                          ? "bottom-full mb-2"
                          : "top-full mt-2"
                      } w-full max-h-40 overflow-y-auto border rounded bg-white shadow-lg z-10`}
                      style={{ maxHeight: "160px" }}
                    >
                      {/* Replace `categories` with your actual category array */}
                      {categories.map((cat, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            setCategory(cat);
                            setDropdownOpen(false);
                          }}
                        >
                          {cat.categoryName}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Select Device
                </label>
                <select
                  name="device"
                  className="p-2 border rounded w-full"
                  value={""} // Replace with your logic to get selected device
                  onChange={() => {}}
                  required
                >
                  <option value="">Select Device</option>
                  {/* Replace `devices` with your actual device array */}
                  {devices.length > 0 &&
                    devices.map((device, index) => (
                      <option key={index} value={device._id}>
                        {device.Name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Condition
                </label>
                <select
                  name="condition"
                  className="p-2 border rounded w-full"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                >
                  <option value="">Select Condition</option>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                  <option value="refurbished">Refurbished</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Price <span className="text-red-600 text-1xl">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Link <span className="text-red-600 text-1xl">*</span>
                </label>
                <input
                  type="text"
                  name="link"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Product Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Brand <span className="text-red-600 text-1xl">*</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                className="bg-gray-300 text-gray-800 p-2 rounded"
                onClick={handlePrevStep}
              >
                Back
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleNextStep}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </Modal>

      <button
        className="bg-blue-500 text-white p-2 rounded mt-4"
        onClick={openItemModal}
      >
        Open Edit Modal
      </button>
    </div>
  );
};

export default EditModal;
