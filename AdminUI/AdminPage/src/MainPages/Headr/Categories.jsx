// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Table, Button, Switch, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ItemHeader from '../Itemheadr';

const Categories = () => {
  // Table columns setup
  const columns = [
    {
      title: 'id #',
      dataIndex: 'id',
      key: 'id',
      width: '8%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '18%',
    },
    {
      title: 'Parent Category',
      dataIndex: 'parentCategory',
      key: 'parentCategory',
      width: '12%',
      render: () => '-',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      width: '8%',
      render: (_text, record) => <Switch checked={record.active} />,
    },
    {
      title: 'Online Availability',
      dataIndex: 'onlineAvailability',
      key: 'onlineAvailability',
      width: '10%',
      render: (_text, record) => <Switch checked={record.onlineAvailability} />,
    },
    {
      title: 'POS Availability',
      dataIndex: 'posAvailability',
      key: 'posAvailability',
      width: '10%',
      render: (_text, record) => <Switch checked={record.posAvailability} />,
    },
    {
      title: 'WhatsApp Catalog Availability',
      dataIndex: 'whatsappCatalogAvailability',
      key: 'whatsappCatalogAvailability',
      width: '15%',
      render: (_text, record) => <Switch checked={record.whatsappCatalogAvailability} />,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      width: '7%',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      width: '15%',
    },
    {
      title: 'Actions',
      key: 'actions',
      width: '12%',
      render: (_text, _record) => (
        <>
          <Button type="primary" icon={<EditOutlined />} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  // Sample data (added more rows for better display)
  const data = [
    {
      id: 84706,
      name: 'Paicha Fusion',
      active: true,
      onlineAvailability: false,
      posAvailability: true,
      whatsappCatalogAvailability: true,
      position: 0,
      createdDate: 'Sep 2, 2024 6:57 PM',
    },
    {
      id: 84705,
      name: 'FREAK SHAKE',
      active: true,
      onlineAvailability: true,
      posAvailability: true,
      whatsappCatalogAvailability: false,
      position: 0,
      createdDate: 'Sep 2, 2024 6:57 PM',
    },
    {
      id: 84704,
      name: 'HOT DRINKS',
      active: true,
      onlineAvailability: true,
      posAvailability: true,
      whatsappCatalogAvailability: true,
      position: 0,
      createdDate: 'Sep 2, 2024 6:57 PM',
    },
    {
      id: 84703,
      name: 'PAICHA cafe SIGNATURE',
      active: true,
      onlineAvailability: false,
      posAvailability: true,
      whatsappCatalogAvailability: false,
      position: 0,
      createdDate: 'Sep 2, 2024 6:57 PM',
    },
    {
      id: 84702,
      name: 'MOJITOS',
      active: true,
      onlineAvailability: false,
      posAvailability: true,
      whatsappCatalogAvailability: false,
      position: 0,
      createdDate: 'Sep 2, 2024 6:57 PM',
    },
    {
      id: 84701,
      name: 'MILK SHAKE',
      active: true,
      onlineAvailability: false,
      posAvailability: true,
      whatsappCatalogAvailability: true,
      position: 0,
      createdDate: 'Sep 2, 2024 6:57 PM',
    },
  ];

  return (
    <div className="p-4" style={{marginLeft:"-264px","marginTop":"-44px"}}>
      {/* Custom Header */}
      <ItemHeader />
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Filter by Category Name"
          style={{ width: '300px' }}
        />
        <div>
          <Button type="default" style={{ marginRight: '8px' }}>
            Update Status
          </Button>
          <Button type="primary" icon={<PlusOutlined />}>
            Create Category
          </Button>
        </div>
      </div>
      
      {/* Category Table */}
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey="id" 
        pagination={false} 
        bordered 
      />
    </div>
  );
};

export default Categories;
