// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ExcelImportModal from "./ExcelModel";

import Modal from "react-modal";
import AddCategory from "./AddCategory"; // Import the AddCategory component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AiFillFileExcel } from "react-icons/ai";
import ItemHeader from "./Itemheadr";

Modal.setAppElement("#root");

const Item = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [devices, setDevices] = useState([]); // State to store the list of devices
  const [itemModalIsOpen, setItemModalIsOpen] = useState(false);
  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);
  const [excelModalIsOpen, setExcelModalIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState("down");
  const [isOnlineAvailable, setIsOnlineAvailable] = useState(false);
  const [isPosAvailable, setIsPosAvailable] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [deviceName, setDeviceName] = useState(""); // State for selected device name
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [condition, setCondition] = useState("");
  const [Itemcode, setItemcode] = useState("");
  const [ItemVariation, setItemVariation] = useState("");
  const [category, setCategory] = useState("");
  const [ItemPosition, setItemPosition] = useState("");
  const [AlternateName, setAlternateName] = useState("");
  const [FoodType, setFoodType] = useState("");
  const [ShortCode, setShortCode] = useState("");
  const [BarCode, setBarCode] = useState("");
  const [price, setPrice] = useState(0);
  const [link, setLink] = useState("");
  const [brand, setBrand] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [id, setId] = useState(""); // Add a new state for the id
  const [step, setStep] = useState(1); // Tracks which page the user is on

  const handleDeviceChange = (e) => {
    const selectedDeviceId = e.target.value;
    const selectedDevice = devices.find(
      (device) => device._id === selectedDeviceId
    );
    setDeviceName(selectedDevice ? selectedDevice.Name : ""); // Store only the device name
  };

  const openItemModal = () => {
    setItemModalIsOpen(true);
  };

  const closeItemModal = () => {
    setItemModalIsOpen(false);
  };

  const openCategoryModal = () => {
    setCategoryModalIsOpen(true);
  };

  const closeCategoryModal = () => {
    setCategoryModalIsOpen(false);
  };

  useEffect(() => {
    if (dropdownOpen) {
      const buttonElement = document.querySelector("button");
      const { bottom, top } = buttonElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - bottom;
      const spaceAbove = top;

      // Set direction based on available space
      if (spaceBelow < 160 && spaceAbove > 160) {
        setDropdownDirection("up");
      } else {
        setDropdownDirection("down");
      }
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

  const openExcelModal = () => setExcelModalIsOpen(true);
  const closeExcelModal = () => setExcelModalIsOpen(false);

  const handleExcelUpload = (data) => {
    console.log("Uploaded Excel Data:", data);
    // Process the data as needed, for example:
  };

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/ExcelItems"
        );
        const items = response.data;

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(items.map((item) => item.category)),
        ];

        // Set the categories in state
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/ExcelItems") // Adjust your API endpoint
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  useEffect(() => {
    if (itemModalIsOpen) {
      axios
        .get("http://localhost:8000/api/user/getCategory")
        .then((response) => {
          setCategories(response.data.categories);
        })
        .catch((error) => {
          console.error("There was an error fetching the categories!", error);
        });
    }
  }, [itemModalIsOpen]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Online Availability
    if (isOnlineAvailable) {
      formData.append("id", id);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("availability", availability);
      formData.append("condition", condition);
      formData.append("price", price);
      formData.append("link", link);
      formData.append("brand", brand);
      formData.append("imageFile", imageFile);

      axios
        .post("http://localhost:8000/api/user/addItem", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Online item added successfully:", response.data);
          setItems([...items, response.data]); // Update items list
          closeItemModal(); // Close modal
          clearForm(); // Clear the form after submission
          toast.success("Online item added successfully!");
        })
        .catch((error) => {
          console.error("Error adding online item:", error);
          toast.error("Error adding online item.");
        });

      // POS Availability
    } else if (isPosAvailable) {
      formData.append("title", title);
      formData.append("price", price);
      formData.append("itemcode", Itemcode); // Ensure exact field names match
      formData.append("itemVariation", ItemVariation);
      formData.append("itemPosition", ItemPosition);
      formData.append("alternateName", AlternateName);
      formData.append("foodType", FoodType);
      formData.append("shortCode", ShortCode);
      formData.append("barCode", BarCode);
      formData.append("category", category);
      formData.append("device", deviceName);

      console.log("Form Data: ", {
        title,
        price,
        Itemcode,
        category,
        deviceName,
      });

      axios
        .post("http://localhost:8000/api/user/POSItems", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("POS item added successfully:", response.data);
          setItems([...items, response.data]); // Update items list
          closeItemModal(); // Close modal
          clearForm(); // Clear the form after submission
          toast.success("POS item added successfully!");
        })
        .catch((error) => {
          console.error("Error adding POS item:", error);
          toast.error("Error adding POS item.");
        });
    } else {
      alert("Please select at least one availability option (Online or POS).");
    }
  };

  // Helper function to clear the form fields
  const clearForm = () => {
    setId("");
    setTitle("");
    setDescription("");
    setAvailability("");
    setCondition("");
    setPrice("");
    setLink("");
    setBrand("");
    setImageFile(null);
    setItemcode("");
    setCategory("");
    setDeviceName("");
    setItemVariation("");
    setItemPosition("");
    setAlternateName("");
    setFoodType("");
    setShortCode("");
    setBarCode("");
  };

  // File input change handler
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Store the selected file
  };

  // Fetch all devices when the component mounts
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/AllDevices"
        );
        setDevices(response.data); // Assuming the response is an array of devices
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    fetchDevices();
  }, []);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };



  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="flex flex-grow">
        <div
          className="flex flex-col flex-grow p-4"
          style={{ marginLeft: "-275px", marginTop: "-48px" }}
        >
       <ItemHeader/>

          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Filter by Item Name"
              className="p-2 border rounded"
            />
            <select className="p-2 border rounded">
              <option>Select Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </option>
              ))}
            </select>
            <select className="p-2 border rounded">
              <option>Select Brand</option>
            </select>
            <select className="p-2 border rounded">
              <option>Select Price Categories</option>
            </select>
            <button className="p-2 bg-purple-500 text-white rounded">
              More Filters
            </button>
            <button
              className="p-2 bg-purple-500 text-white rounded"
              onClick={openItemModal}
            >
              Create Item
            </button>
            <button
              className="p-2 bg-purple-500 text-white rounded"
              onClick={openCategoryModal}
            >
              Add Category
            </button>
            <button
              className="p-2 bg-gray-500 text-white rounded flex items-center"
              onClick={openExcelModal}
            >
              <AiFillFileExcel
                className="mr-2"
                size={20}
                style={{ color: "gray" }}
              />
              Import Excel
            </button>
          </div>

          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ItemId</th>
                <th className="py-2 px-4 border-b">ItemName</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{item.Id}</td>
                  <td className="py-2 px-4 border-b">{item.ItemName}</td>
                  <td className="py-2 px-4 border-b">{item.category}</td>
                  <td className="py-2 px-4 border-b">{item.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={itemModalIsOpen}
        onRequestClose={closeItemModal}
        contentLabel="Create Item Modal"
        style={customStyles}
      >
        <h2 className="text-2xl mb-4">Create Item</h2>

        <form onSubmit={handleFormSubmit}>
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* ID Field */}
              <div className="mb-4">
                <label className="block text-gray-700">ID *</label>
                <input
                  type="text"
                  name="id"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Item ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>

              {/* Title Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Item Name *</label>
                <input
                  type="text"
                  name="title"
                  className="p-2 border rounded w-full"
                  placeholder="Item Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* Description Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Description *</label>
                <textarea
                  name="description"
                  className="p-2 border rounded w-full"
                  placeholder="Enter a detailed description of the item."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* Availability Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Availability *</label>
                <select
                  name="availability"
                  className="p-2 border rounded w-full"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                >
                  <option value="">Select Availability</option>
                  <option value="in_stock">in_stock</option>
                  <option value="outofstock">Out of Stock</option>
                  <option value="preorder">Pre-order</option>
                </select>
              </div>

              {/* Condition Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Condition *</label>
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

              {/* Price Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Price *</label>
                <input
                  type="number"
                  name="price"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Price"
                  min="0"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {/* Link Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Link</label>
                <input
                  type="url"
                  name="link"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Item Link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  pattern="https://.*"
                  title="Please enter a valid URL"
                />
              </div>

              {/* Brand Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Brand</label>
                <input
                  type="text"
                  name="brand"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>

              {/* Image Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Image *</label>
                <input
                  type="file"
                  name="imageFile"
                  className="p-2 border rounded w-full"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Page 2 fields */}
              <div className="mb-4">
                <label className="block text-gray-700">Item Variation</label>
                <input
                  type="text"
                  name="itemVariation"
                  placeholder="Enter itemVariation"
                  className="p-2 border rounded w-full"
                  value={ItemVariation}
                  onChange={(e) => setItemVariation(e.target.value)}
                />
              </div>
              {/* Other fields for page 2 */}
              <div className="mb-4">
                <label className="block text-gray-700">Item Position</label>
                <input
                  type="text"
                  name="itemPosition"
                  placeholder="Enter itemPosition "
                  className="p-2 border rounded w-full"
                  value={ItemPosition}
                  onChange={(e) => setItemPosition(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Food Type</label>
                <input
                  type="text"
                  name="FoodType"
                  placeholder="Enter FoodType"
                  className="p-2 border rounded w-full"
                  value={FoodType}
                  onChange={(e) => setFoodType(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Barcode </label>
                <input
                  type="text"
                  name="Barcode "
                  placeholder="Enter Barcode"
                  className="p-2 border rounded w-full"
                  value={BarCode}
                  onChange={(e) => setBarCode(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">
                  Included tax / Exclude
                </label>
                <select
                  name="tax"
                  className="p-2 border rounded w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Tax
                  </option>
                  <option value="cgst">CGST 2.5%</option>
                  <option value="sgst">SGST 2.5%</option>
                  <option value="igst">IGST 5%</option>
                  <option value="no_tax">No Tax</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Item Code *</label>
                <input
                  type="text"
                  name="Itemcode"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Item Code"
                  value={Itemcode}
                  onChange={(e) => setItemcode(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Stock Restricted *
                </label>
                <input
                  type="text"
                  name="stockRestricted"
                  className="p-2 border rounded w-full"
                  placeholder="Enter Stock Restricted"
                  value=""
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Alternate name</label>
                <input
                  type="text"
                  name="Alternatename"
                  placeholder="Tanslate Alternate name"
                  className="p-2 border rounded w-full"
                  value=""
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Short code </label>
                <input
                  type="text"
                  name="Shortcode"
                  placeholder="Enter Shortcode"
                  className="p-2 border rounded w-full"
                  value=""
                />
              </div>

              <div className="mb-4">
                {/* Select Device Field */}
                <label className="block text-gray-700">Select Device *</label>
                <select
                  name="Device"
                  className="p-2 border rounded w-full"
                  value={
                    devices.find((device) => device.Name === deviceName)?._id ||
                    ""
                  }
                  onChange={handleDeviceChange}
                  required
                >
                  <option value="">Select Device</option>
                  {devices.length > 0 &&
                    devices.map((device, index) => (
                      <option key={index} value={device._id}>
                        {device.Name}
                      </option>
                    ))}
                </select>
              </div>

              {/* Select Category Field */}
              <div className="mb-4">
                <label className="block text-gray-700">Select Category *</label>
                <div className="relative">
                  <button
                    type="button"
                    className="p-2 border rounded w-full text-left bg-white focus:outline-none focus:ring focus:border-blue-300"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
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
                      {categories.map((cat, index) => (
                        <li
                          key={index}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            setCategory(cat); // Store the full category object if needed
                            setDropdownOpen(false);
                          }}
                        >
                          {cat.categoryName}{" "}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Enter Note</label>
                <input
                  type="text"
                  name="EnterNote"
                  placeholder="EnterNote"
                  className="p-2 border rounded w-full"
                  value=""
                />
              </div>

              {/* isOnlineAvailable Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name="isOnlineAvailable"
                  checked={isOnlineAvailable}
                  onChange={() => setIsOnlineAvailable(!isOnlineAvailable)}
                  className="h-4 w-4"
                />
                <label className="ml-2 block text-gray-700 flex items-center">
                  {isOnlineAvailable && (
                    <span
                      className="material-icons text-green-500 transition-transform transform scale-0 inline-block"
                      style={{
                        transition: "transform 0.3s ease, color 0.3s ease",
                        transform: "scale(1)",
                      }}
                    >
                      check_circle
                    </span>
                  )}
                  <span className="ml-2">Is Online Available</span>
                </label>
              </div>

              {/* isPosAvailable Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name="isPosAvailable"
                  checked={isPosAvailable}
                  onChange={() => setIsPosAvailable(!isPosAvailable)}
                  className="h-4 w-4"
                />
                <label className="ml-2 block text-gray-700 flex items-center">
                  {isPosAvailable && (
                    <span
                      className="material-icons text-green-500 transition-transform transform scale-0 inline-block"
                      style={{
                        transition: "transform 0.3s ease, color 0.3s ease",
                        transform: "scale(1)",
                      }}
                    >
                      check_circle
                    </span>
                  )}
                  <span className="ml-2">Is POS Available</span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-4 flex justify-end">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="p-2 bg-gray-500 text-white rounded mr-2"
              >
                Previous
              </button>
            )}
            {step === 1 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="p-2 bg-purple-500 text-white rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="p-2 bg-purple-500 text-white rounded"
              >
                Save
              </button>
            )}
          </div>
        </form>
      </Modal>
      <ToastContainer />
      <AddCategory
        modalIsOpen={categoryModalIsOpen}
        closeModal={closeCategoryModal}
      />
      <ExcelImportModal
        modalIsOpen={excelModalIsOpen}
        closeModal={closeExcelModal}
        onUpload={handleExcelUpload}
      />
    </div>
  );
};

export default Item;
