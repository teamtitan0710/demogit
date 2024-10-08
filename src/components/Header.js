import React, { useState } from 'react';  // Thêm useState từ React
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';

import logo from '../img/logo.png';  // Import hình ảnh logo

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');  // Sử dụng useState

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };
   
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="PetPal" style={{ width: '150px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-content">
                        <ul className="nav-items">
                            <li>
                        <Nav.Link href="#home" className='nav-item'>SẢN PHẨM CHO CHÓ</Nav.Link>
                           </li>
                           <li>
                        <Nav.Link href="#products" className='nav-item'>SẢN PHẨM CHO MÈO</Nav.Link>
                        <ul className='sub-menu'>
                            <li>
                            <Nav.Link className='sub-menu-item'>
                                chó 1
                            </Nav.Link>
                            </li>
                            <li>
                            <Nav.Link className='sub-menu-item'>
                                chó 2
                            </Nav.Link>
                            </li>
                        </ul>
                           </li>
                        </ul>

                       
                        <Nav.Link href="#about">KHUYẾN MÃI</Nav.Link>
                        <Nav.Link href="#contact">DỊCH VỤ</Nav.Link>
                        <Nav.Link href="#contact">KIỂM TRA ĐƠN HÀNG</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Tìm kiếm sản phẩm tại đây"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                    {/* Các icon đăng nhập, đăng ký, giỏ hàng */}
                    <Nav className="ml-auto icons">
                        <Nav.Link href="#login"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                        <Nav.Link href="#cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
