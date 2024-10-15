// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import SettingsNavbar from "../SettingsNavbar/CreateDeviceModal";
import axios from "axios";
import { FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";
import CreateDeviceModal from "./CreateDeviceModal";

const Devices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [devices, setDevices] = useState([]);
  const [editDevice, setEditDevice] = useState(null); // For editing a device
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user/AllDevices");
        setDevices(response.data);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };
    fetchDevices();
  }, []);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleAddDevice = () => {
    setEditDevice(null); // Reset editDevice to null when adding a new device
    setIsModalOpen(true);
  };

  const handleEditDevice = (device) => {
    setEditDevice(device); // Set the device data to be edited
    setIsModalOpen(true); // Open modal for editing
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveDevice = async (deviceData) => {
    if (editDevice) {
      // If editing an existing device
      try {
        const response = await axios.put(
          `http://localhost:8000/api/admin/EditDevices/${editDevice._id}`,
          deviceData
        );
        console.log("Device updated:", response.data);

        // Update the devices list with the edited device
        setDevices((prevDevices) =>
          prevDevices.map((device) =>
            device._id === editDevice._id ? response.data : device
          )
        );
      } catch (err) {
        console.error("Error updating device:", err);
      }
    } else {
      // Handle new device creation here if needed
    }

    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col flex-grow">
        <SettingsNavbar />
        <div className="p-6" style={{ marginLeft: "-275px", marginTop: "-28px" }}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <select className="border border-gray-300 rounded p-2">
                <option>Filter by Location</option>
                <option>Paicha</option>
                <option>BRANCH 1</option>
              </select>
              <select className="border border-gray-300 rounded p-2">
                <option>Select Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <button className="bg-purple-900 text-white px-4 py-2 rounded" onClick={handleAddDevice}>
              + Add Device
            </button>
          </div>

          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-gray-600">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left text-gray-600">Code</th>
                  <th className="px-4 py-2 text-left text-gray-600">Device Type</th>
                  <th className="px-4 py-2 text-left text-gray-600">Location</th>
                  <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device._id} className="border-b">
                    <td className="px-4 py-2">{device.ID}</td>
                    <td className="px-4 py-2">{device.Name}</td>
                    <td className="px-4 py-2">{device.Code}</td>
                    <td className="px-4 py-2">{device.Devices}</td>
                    <td className="px-4 py-2">{device.Location}</td>
                    <td className="px-4 py-2">
                      <button onClick={() => toggleDropdown(device._id)} className="text-gray-600 hover:text-gray-900">
                        <FaEllipsisV />
                      </button>
                      {dropdownOpen === device._id && (
                        <div className="absolute left-68 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleEditDevice(device)}>
                            <FaEdit /> Edit
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <FaTrash /> Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CreateDeviceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveDevice}
            device={editDevice} // Pass the selected device for editing
          />
        </div>
      </div>
    </div>
  );
};

export default Devices;
