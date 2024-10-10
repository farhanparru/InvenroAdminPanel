// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Modal, Input, Select, Button } from 'antd';
import ItemHeader from '../Itemheadr';

const { Option } = Select;

const TaxItem = () => {
  // State for modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taxName, setTaxName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [taxType, setTaxType] = useState('Add Tax to Item Price');

  // State for tax data (table data)
  const [taxData, setTaxData] = useState([
    { name: 'CGST 2.5%', type: 'Exclusive', percentage: 2.5, createdDate: 'Aug 12, 2024' },
    { name: 'SGST 2.5%', type: 'Exclusive', percentage: 2.5, createdDate: 'Aug 12, 2024' },
    { name: 'VAT 10%', type: 'Inclusive', percentage: 10, createdDate: 'Aug 12, 2024' },
    { name: 'VAT 5%', type: 'Inclusive', percentage: 5, createdDate: 'Aug 12, 2024' },
  ]);

  // Show and hide modal functions
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Add the new tax item to the list (you can modify this logic)
    const newTax = {
      name: taxName,
      type: taxType === 'Add Tax to Item Price' ? 'Exclusive' : 'Inclusive',
      percentage: parseFloat(percentage),
      createdDate: new Date().toLocaleDateString(),
    };
    setTaxData([...taxData, newTax]);

    // Clear input fields
    setTaxName('');
    setPercentage('');
    setTaxType('Add Tax to Item Price');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen" style={{ marginLeft: '-238px', marginTop: '-27px' }}>
      {/* Item Header */}
      <div className="mb-6">
        <ItemHeader />
      </div>

      {/* Header with "Create Tax" Button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tax List</h1>
        <button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 focus:outline-none"
          onClick={showModal}
        >
          + Create Tax
        </button>
      </div>

      {/* Modal */}
      <Modal
        title="Create Tax"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} className="bg-purple-600">
            Save
          </Button>,
        ]}
      >
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name *</label>
            <Input
              placeholder="Tax Name"
              value={taxName}
              onChange={(e) => setTaxName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Percentage *</label>
            <Input
              placeholder="0%"
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Type</label>
            <Select
              value={taxType}
              onChange={(value) => setTaxType(value)}
              className="w-full"
            >
              <Option value="Add Tax to Item Price">Add Tax to Item Price</Option>
              <Option value="Include Tax in Item Price">Include Tax in Item Price</Option>
            </Select>
          </div>
        </form>
      </Modal>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-5 text-left">Tax Name</th>
              <th className="py-3 px-5 text-left">Type</th>
              <th className="py-3 px-5 text-left">Percentage</th>
              <th className="py-3 px-5 text-left">Created Date</th>
              <th className="py-3 px-5 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taxData.map((tax, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-5">{tax.name}</td>
                <td className="py-3 px-5">{tax.type}</td>
                <td className="py-3 px-5">{tax.percentage}</td>
                <td className="py-3 px-5">{tax.createdDate}</td>
                <td className="py-3 px-5 flex space-x-2">
                  <button className="bg-purple-100 text-purple-600 py-1 px-3 rounded-lg hover:bg-purple-200">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxItem;
