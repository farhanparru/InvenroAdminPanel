// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Modal, Input, Select, Button } from 'antd';
import ItemHeader from '../Itemheadr';
import axios from 'axios';
import { DateTime } from 'luxon'; // Import luxon for date formatting

const { Option } = Select;

const TaxItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // Track if modal is in edit mode
  const [editingTaxId, setEditingTaxId] = useState(null); // Track which tax is being edited
  const [taxName, setTaxName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [taxType, setTaxType] = useState('Add Tax to Item Price');
  const [Tax, setTax] = useState([]);



  const showModal = (isEdit = false, tax = null) => {
    setIsModalVisible(true);
    setIsEditMode(isEdit); // Set whether it's edit mode
    if (isEdit && tax) {
      // Populate form with tax data if editing
      setTaxName(tax.Taxname);
      setPercentage(tax.Percentage.replace(' %', '')); // Strip '%' sign for input
      setTaxType(tax.TaxMode === 'Exclusive' ? 'Add Tax to Item Price' : 'Include Tax in Item Price');
      setEditingTaxId(tax._id);
    } else {
      // Reset form for creating new tax
      setTaxName('');
      setPercentage('');
      setTaxType('Add Tax to Item Price');
      setEditingTaxId(null);
    }
  };



   const handleOk = () => {
    isEditMode ? handleEditTax(editingTaxId) : handleTaxcreate(); // Call the appropriate function
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/getTaxes") // Adjust your API endpoint
      .then((response) => {
        setTax(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);


  const handleTaxcreate = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/admin/CreateTax', {
        Taxname: taxName,
        Percentage: `${percentage} %`,
        TaxType: taxType,
        TaxMode: taxType === 'Add Tax to Item Price' ? 'Exclusive' : 'Inclusive',
      });

      console.log('Tax created:', response.data);
      setTax([...Tax, response.data]); // Add the newly created tax to the list
      setTaxName('');
      setPercentage('');
      setTaxType('Add Tax to Item Price');
      setIsModalVisible(false); // Close modal after successful creation
    } catch (error) {
      console.log(error);
    }
  };


  const handleDeleteTax = async (TaxeID) =>{
    try {
       await axios.delete(`http://localhost:8000/api/admin/DeleteTax/${TaxeID}`)
      setTax(Tax.filter((tax) => tax._id !== TaxeID)); // Update UI after delete
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleEditTax = async (TaxeID) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/admin/editTax/${TaxeID}`, {
        Taxname: taxName,
        Percentage: `${percentage} %`,
        TaxType: taxType,
        TaxMode: taxType === 'Add Tax to Item Price' ? 'Exclusive' : 'Inclusive',
      });

      console.log('Tax editedgg:', response.data);

      const updatedTaxes = Tax.map((myTax) => (myTax._id === TaxeID ? response.data : myTax));

      setTax(updatedTaxes); 

      setIsModalVisible(false); // Close modal after successful edit
    } catch (error) {
      console.log(error);
    }
  };


  // Function to format the date
  const formatDate = (isoDate) => {
    const utcDate = DateTime.fromISO(isoDate, { zone: "utc" });
    const zonedDate = utcDate.setZone("Asia/Kolkata");
    return zonedDate.toFormat("MMM dd, yyyy hh:mm:ss a");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen ml-[-238px] mt-[-28px] mr-[-40px]" >
      {/* Item Header */}
      <div className="mb-6">
        <ItemHeader />
      </div>

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
            {Tax.map((tax, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-5">{tax.Taxname}</td>
                <td className="py-3 px-5">{tax.TaxMode}</td>
                <td className="py-3 px-5">{tax.Percentage}</td>
                <td className="py-3 px-5">{formatDate(tax.TaxcreateDate)}</td> {/* Format the date */}
                <td className="py-3 px-5 flex space-x-2">
                  <button className="bg-purple-100 text-purple-600 py-1 px-3 rounded-lg hover:bg-purple-200"   
                  onClick={() => showModal(true, tax)}> 
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"  
                   onClick={() => handleDeleteTax(tax._id)}>
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
