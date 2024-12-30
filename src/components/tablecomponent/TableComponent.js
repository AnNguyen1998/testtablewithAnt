import React from 'react'
import {Table} from 'antd'

export default function TableComponent() {
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
            <h1 style={{fontSize:'18px', fontWeight:'300'}}>Table3</h1>
            <div style={{border:'1px solid #bdc3c7', padding:'15px'}}>
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        </div>
    )
}
