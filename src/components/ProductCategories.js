import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import hatmeo  from '../img/hatmeo.webp';
import xuongcho  from '../img/xuongho.webp';
import patemeo  from '../img/patemeo.webp';
const ProductCategories = () => {
    const categories = [
        { id: 1,  img: hatmeo},
        { id: 2,  img: xuongcho },
        { id: 3,  img: patemeo },
    ];

    return (
        <Container>
            <Row>
                {categories.map(category => (
                    <Col md={4} key={category.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={category.img} />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductCategories;
