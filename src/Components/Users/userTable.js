import React, { useState, useEffect } from 'react'
import { Table, Button } from 'antd';
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import axios from 'axios';


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: 'Post Id',
        dataIndex: 'postId',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Body',
        dataIndex: 'body'
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record, index) => (
            <div className="btn-wrap" style={{ width: "200px" }}>
                <Button style={{ marginRight: '10px' }} onClick={() => {
                    console.log('eee', record)
                }
                }>
                    <EditOutlined />
                </Button>

                <Button style={{ color: 'red' }} onClick={(e) => {
                    console.log('eee', record)
                }}> <DeleteOutlined /></Button>

            </div>)
    }]

const getRandomuserParams = params => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
});

export default function UserTable() {

    const [newData, setNewData] = useState(columns)
    console.log('before', newData)


    const [hasSelected, setHasSelected] = useState()

    const [data, setData] = useState([])
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10
    })
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetch({ pagination })
    }, [])



    const handleTableChange = (pagination, filters, sorter) => {
        fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    const fetch = (params = {}) => {
        setLoading(true)
        axios({
            url: 'https://jsonplaceholder.typicode.com/comments',
            method: 'get',
            type: 'json',
            data: getRandomuserParams(params),
        }).then(data => {
            console.log(data.data[0]);
            setLoading(false)
            setData(data.data)
            setPagination({
                ...params.pagination,
                total: data.data.length
            })
        });
    };


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setHasSelected(selectedRows.length)
        },

    };

    return (
        <>
            <span style={{ marginLeft: 8, fontSize: '1.5rem' }}>
                {hasSelected ? <>{hasSelected} record has been selected
                    <Button type='danger' style={{ marginLeft: '10px' }}>Delete</Button></>
                    : ''}

            </span>
            <Table
                columns={newData}
                scroll={{ x: 1000 }}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
                rowKey={(record, index) => index + 1}
                rowSelection={rowSelection}
            />
        </>
    );
}
