import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';


 function Header() {


  return (

    <>
     
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
           <h1 style={{fontSize: '3rem'}}>
         <span style={{color:'#9B001A'}}>R</span><span style={{color:"#03026f"}}>T</span> Family
      </h1>
        
      
          </Navbar.Brand>
          <span style={{ float: 'right' }}>   
            <h2>
                <Nav>
            <Nav.Link href="#home" style={{color:"green"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color:"green"}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"green"}}>Pricing</Nav.Link>

            <Avatar
      style={{
        fontSize: '1rem',backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
      </Nav> 
          </h2>
        </span>

        </Container>
      </Navbar>
      </>
  );
}

export default Header;