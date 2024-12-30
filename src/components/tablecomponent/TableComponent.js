import React, { useState } from 'react'
import { Button, Col, Form, Row, Select, Table } from 'antd'
import { Input} from 'antd';

export default function TableComponent() {

    const { Option } = Select;
    const [currency, setCurrency] = useState('User1');
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ]

    return (
        <div>
            <h1 style={{ fontSize: '18px', fontWeight: '300' }}>Table3</h1>
            <div style={{ border: '1px solid #bdc3c7', padding: '15px' }}>
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col className="gutter-row">
                        <div>
                            <Form
                                layout={formLayout}
                                form={form}
                                initialValues={{ layout: formLayout, }}
                                onValuesChange={onFormLayoutChange}
                                style={{ maxWidth: formLayout === 'inline' ? 'none' : 600, }}>
                                <Form.Item label="Create User:">
                                    <Input addonBefore="Name" defaultValue="User5" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" style={{ width: '100%' }}>Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col className="gutter-row">
                        <div>
                            <Form
                                layout={formLayout}
                                form={form}
                                initialValues={{ layout: formLayout, }}
                                onValuesChange={onFormLayoutChange}
                                style={{ maxWidth: formLayout === 'inline' ? 'none' : 600, }}>
                                <Form.Item label="Create Status:">
                                    <Input addonBefore="Label" defaultValue="Close" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" style={{ width: '100%' }}>Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col className="gutter-row">
                        <div>
                            <Form
                                layout={formLayout}
                                form={form}
                                initialValues={{ layout: formLayout, }}
                                onValuesChange={onFormLayoutChange}
                                style={{ maxWidth: formLayout === 'inline' ? 'none' : 600, }}>
                                <Form.Item label="Create Task:">
                                    <Input addonBefore="Label" defaultValue="Task1" />
                                </Form.Item>
                                <Form.Item>
                                <Select
                                        style={{
                                            width: 80,
                                        }}
                                        value={currency}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Select
                                        style={{
                                            width: 80,
                                            margin: '0 8px',
                                        }}
                                        value={currency}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Button type="primary" style={{ width: '30%' }}>Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col className="gutter-row">
                        <div>
                            <Form
                                layout={formLayout}
                                form={form}
                                initialValues={{ layout: formLayout, }}
                                onValuesChange={onFormLayoutChange}
                                style={{ maxWidth: formLayout === 'inline' ? 'none' : 600, }}>
                                <Form.Item label="Update Task:">
                                    <Input addonBefore="Label" defaultValue="" />
                                </Form.Item>
                                <Form.Item>
                                    <Select disabled
                                        style={{
                                            width: 80,
                                        }}
                                        value={currency}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Select disabled
                                        style={{
                                            width: 80,
                                            margin: '0 8px',
                                        }}
                                        value={currency}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Button type="primary" style={{ width: '30%' }}>Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}
