import React, { useState } from 'react';
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
                    <Nav className="me-auto">
                        {/* Sub-menu cho SẢN PHẨM CHO CHÓ */}
                        <div className="nav-item-wrapper">
                            <Nav.Link href="#home" className='nav-item'>SẢN PHẨM CHO CHÓ</Nav.Link>
                            <ul className="sub-menu">
                                <li><Nav.Link href="#dog1" className='sub-menu-item'>Chó 1</Nav.Link></li>
                                <li><Nav.Link href="#dog2" className='sub-menu-item'>Chó 2</Nav.Link></li>
                                <li><Nav.Link href="#dog3" className='sub-menu-item'>Chó 3</Nav.Link></li>
                            </ul>
                        </div>

                        {/* Sub-menu cho SẢN PHẨM CHO MÈO */}
                        <div className="nav-item-wrapper">
                            <Nav.Link href="#products" className='nav-item'>SẢN PHẨM CHO MÈO</Nav.Link>
                            <ul className="sub-menu">
                                <li><Nav.Link href="#cat1" className='sub-menu-item'>Mèo 1</Nav.Link></li>
                                <li><Nav.Link href="#cat2" className='sub-menu-item'>Mèo 2</Nav.Link></li>
                                <li><Nav.Link href="#cat3" className='sub-menu-item'>Mèo 3</Nav.Link></li>
                            </ul>
                        </div>

                        {/* Các mục khác */}
                        <Nav.Link href="#about" className='nav-item'>KHUYẾN MÃI</Nav.Link>
                        <Nav.Link href="#services" className='nav-item'>DỊCH VỤ</Nav.Link>
                        <Nav.Link href="#order-check" className='nav-item'>KIỂM TRA ĐƠN HÀNG</Nav.Link>
                    </Nav>

                    {/* Thanh tìm kiếm */}
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Tìm kiếm"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>

                    {/* Các icon đăng nhập, đăng ký, giỏ hàng */}
                    <Nav className="header-icons">
                        <Nav.Link href="#login" className="icon"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                        <Nav.Link href="#cart" className="icon"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
