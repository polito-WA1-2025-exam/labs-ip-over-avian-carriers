import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/esm/Container';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiBowlFood } from "react-icons/pi";
import { FaBowlRice } from "react-icons/fa6";
import { IoFishSharp } from "react-icons/io5";
import { GiAvocado } from "react-icons/gi";


export default function Menu() {
    return (
        <Container className='mt-5'>
            <h1>Menu</h1>
            <p>In this page you can check poke bowl's availability and which bases, proteins and ingredients are available!</p>
            <Container>
            <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                <PiBowlFood size={50} />
                <h2 className="mb-0">Poke Bowl's availability</h2>
            </div>
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
                        <div className='d-flex align-items-center justify-content-start gap-3 mb-2'><FaBowlRice size={20}/><h2>Bases</h2></div>
                        <ListGroup>
                            <ListGroupItem>Rice</ListGroupItem>
                            <ListGroupItem>Black rice</ListGroupItem>
                            <ListGroupItem>Salad</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start gap-3 mb-2'><IoFishSharp size={20} /><h2>Proteins</h2></div>
                        <ListGroup>
                            <ListGroupItem>Tuna</ListGroupItem>
                            <ListGroupItem>Chicken</ListGroupItem>
                            <ListGroupItem>Salmon</ListGroupItem>
                            <ListGroupItem>Tofu</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start gap-3 mb-2'><GiAvocado size={20} /><h2>Ingredients</h2></div>
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