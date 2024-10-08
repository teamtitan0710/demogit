import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductCategories = () => {
    const categories = [
        { id: 1, name: 'Food', img: 'food.jpg' },
        { id: 2, name: 'Toys', img: 'toys.jpg' },
        { id: 3, name: 'Accessories', img: 'accessories.jpg' },
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
