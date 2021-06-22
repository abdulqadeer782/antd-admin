import React, { useState } from 'react'
import { Row, Col, Button, Divider ,Modal} from 'antd'
import Layout from 'antd/lib/layout/layout';
import { useHistory } from 'react-router-dom';
import icon from '../Assets/img/icons2.png'
import UserTable from '../Components/Users/userTable'
import Dragable from '../Components/Users/Dragable';


export default function Users() {
   

    const history = useHistory()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    
    const handleCancel = () => {
      setIsModalVisible(false);
    };    

    const AddNewUser = () => {
        history.push('/User/AddUser')
    }

    return (
        <Layout> 
            <Col style={{marginBottom:'10px'}}>
                <Button onClick={showModal}>
                    <img src={icon}/>
                </Button>
                <Button onClick={AddNewUser} type='primary' style={{float:'right'}}>Add New User</Button>
            </Col>
            <Divider/>
            <UserTable/>

            {/* Modal For Dragable  */}
            <Modal visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <Dragable/>
            </Modal>

        </Layout>
    )
}
