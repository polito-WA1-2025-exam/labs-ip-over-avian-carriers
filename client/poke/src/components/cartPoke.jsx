import Card from 'react-bootstrap/Card';
import { PiBowlFood } from "react-icons/pi";
import { FaBowlRice } from "react-icons/fa6";
import { IoFishSharp } from "react-icons/io5";
import { GiAvocado } from "react-icons/gi";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

export default function CartPoke({ size, base, proteins, ingredients, price}) {
    return (
        <Card style={{marginBottom: '20px'}}>
            <Card.Header as="h5">
                <PiBowlFood size={50} />
                <b>Poke Bowl:</b> {size}
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <Card.Title>
                                <FaBowlRice size={25} style={{marginRight:'5px'}}/>
                                <b>Base:</b> {base}
                            </Card.Title>
                            <Card.Text>
                                <IoFishSharp size={25} style={{marginRight:'5px'}}/>
                                <b>Proteins:</b> {proteins.map((protein, index) => (
                                    <span key={index}>
                                        {protein}
                                        {index < proteins.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                                <br />
                                <GiAvocado size={25} style={{marginRight:'5px'}}/>
                                <b>Ingredients:</b> {ingredients.map((ingredient, index) => (
                                    <span key={index}>
                                        {ingredient}
                                        {index < ingredients.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </Card.Text>
                        </Col>
                        <Col sm={4}>
                            <h3>Price: <b>{price.toFixed(2)}€</b></h3>
                            <Button variant='danger'>Delete</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}