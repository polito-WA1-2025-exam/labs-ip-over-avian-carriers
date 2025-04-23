import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Menu() {
    return (
        <Container className='mt-5'>
            <h1>Menu</h1>
            <p>In this page you can check poke bowl's availability and which bases, proteins and ingredients are available!</p>
            <Container>
                <h2>Poke Bowl's availability</h2>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Poke bowl</div>
                            Regular
                        </div>
                        <Badge bg="primary" pill>
                            14
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Poke bowl</div>
                            Medium
                        </div>
                        <Badge bg="primary" pill>
                            14
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Poke bowl</div>
                            Large
                        </div>
                        <Badge bg="primary" pill>
                            14
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col>
                        <h2>Bases</h2>
                        <ListGroup>
                            <ListGroupItem>Rice</ListGroupItem>
                            <ListGroupItem>Black rice</ListGroupItem>
                            <ListGroupItem>Salad</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h2>Proteins</h2>
                        <ListGroup>
                            <ListGroupItem>Tuna</ListGroupItem>
                            <ListGroupItem>Chicken</ListGroupItem>
                            <ListGroupItem>Salmon</ListGroupItem>
                            <ListGroupItem>Tofu</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h2>Ingredients</h2>
                        <ListGroup>
                            <ListGroupItem>Avocado</ListGroupItem>
                            <ListGroupItem>Ananas</ListGroupItem>
                            <ListGroupItem>Cashew nuts</ListGroupItem>
                            <ListGroupItem>kale</ListGroupItem>
                            <ListGroupItem>Mango</ListGroupItem>
                            <ListGroupItem>Peppers</ListGroupItem>
                            <ListGroupItem>Corn</ListGroupItem>
                            <ListGroupItem>Wakame</ListGroupItem>
                            <ListGroupItem>Tomatoes</ListGroupItem>
                            <ListGroupItem>Carrot</ListGroupItem>
                            <ListGroupItem>Salad</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}