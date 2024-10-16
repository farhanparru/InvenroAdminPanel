// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const CreateDeviceModal = ({ isOpen, onClose, onSave, device }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [IPAddress, setIPaddress] = useState('');
  const [deviceType, setDeviceType] = useState('KOT');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (device) {
     // eslint-disable-next-line react/prop-types
      setName(device.Name || '');
     // eslint-disable-next-line react/prop-types
      setLocation(device.Location || '');
    // eslint-disable-next-line react/prop-types
      setIPaddress(device.IPAddress || '');
     // eslint-disable-next-line react/prop-types
      setDeviceType(device.Devices || 'KOT');
    }
  }, [device]);

  const handleSave = async () => {
    setLoading(true);
    

    const updatedDevice = {
      Name: name,
      Location: location,
      IPAddress: IPAddress,
      Devices: deviceType,
    };

    

    onSave(updatedDevice);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{device ? 'Edit Device' : 'Create Device'}</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>
        
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700">Name *</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location *</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Location" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">IP Address</label>
          <input type="text" value={IPAddress} onChange={(e) => setIPaddress(e.target.value)} className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="IP Address" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Device Type *</label>
          <select value={deviceType} onChange={(e) => setDeviceType(e.target.value)} className="w-full border border-gray-300 p-2 rounded mt-1">
            <option value="printer">printer</option>
            <option value="Waiter">Waiter</option>
            <option value="KOT">KOT</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-purple-900 text-white px-4 py-2 rounded" onClick={handleSave} disabled={loading}>
            {device ? 'Update Device' : 'Create Device'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDeviceModal;
