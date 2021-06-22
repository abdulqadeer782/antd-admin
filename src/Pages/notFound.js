import { Col, Row, Layout, Divider, Button, Result } from 'antd'
import React from 'react'

export default function PageNotFound() {

    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
            />
        </>
    )
}
