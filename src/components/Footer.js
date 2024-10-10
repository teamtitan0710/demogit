import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css'; // Import CSS cho Footer

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Về Chúng Tôi</h5>
                        <p>PetPal là nơi cung cấp sản phẩm và dịch vụ cho thú cưng với chất lượng tốt nhất.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Liên Kết Nhanh</h5>
                        <ul className="footer-links">
                            <li><a href="#home">Trang Chủ</a></li>
                            <li><a href="#products">Sản Phẩm</a></li>
                            <li><a href="#about">Giới Thiệu</a></li>
                            <li><a href="#contact">Liên Hệ</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Liên Hệ</h5>
                        <p>Email: contact@petpal.com</p>
                        <p>Điện thoại: 0123 456 789</p>
                        <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="copyright">© 2024 PetPal - Bản quyền thuộc về PetPal</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
