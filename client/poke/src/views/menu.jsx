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
import { getProteins, getIngredients, getSizes } from '../../APIs/API';
import { useState, useEffect} from 'react';

export default function Menu() {

    const [proteins, setProteins] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [bowlsSizeAvailability, setBowlsSizeAvailability ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch proteins
          const proteinsData = await getProteins();
          setProteins(proteinsData);
    
          // Fetch ingredients
          const ingredientsData = await getIngredients();
          setIngredients(ingredientsData);

          const bowlsSizes = await getSizes();
          setBowlsSizeAvailability(bowlsSizes);

          setIsLoading(false);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData(); // Call the async function
    },[]); // Empty dependency array ensures this runs only once


    return (
        <Container className='mt-5'>
            <h1>Menu</h1>
            <p>In this page you can check poke bowl's availability and which bases, proteins and ingredients are available!</p>
            { isLoading ? (<Container><div>Loading...</div> </Container>) : (
            <>
            <Container>
            <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                <PiBowlFood size={50} />
                <h2 className="mb-0">Poke Bowl's availability</h2>
            </div>
                <ListGroup as="ol" numbered>
                  {bowlsSizeAvailability.map((bowl, index) => (
                    <ListGroup.Item
                      as="li"
                      key={index}
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          {bowl.sizeId === 0
                            ? 'Poke Bowl - Regular'
                            : bowl.sizeId === 1
                            ? 'Poke Bowl - Medium'
                            : 'Poke Bowl - Large'} from {bowl.price} €
                        </div>
                        <p className="mb-0">
                          {bowl.sizeId === 0
                            ? 'Regular bowls include one protein and up to 4 ingredients (minimum 1, optionally repeated).'
                            : bowl.sizeId === 1
                            ? 'Medium bowls include two proteins and up to 4 ingredients (minimum 1, optionally repeated).'
                            : 'Large bowls include three proteins and up to 6 ingredients (minimum 1, optionally repeated).'}
                        </p>
                      </div>
                      <Badge bg="primary" pill>
                        {bowl.maxDayQty}
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
            </Container>
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start gap-3 mb-2'><FaBowlRice size={20}/><h2>Bases</h2></div>
                        <ListGroup>
                            <ListGroupItem>Rice</ListGroupItem>
                            <ListGroupItem>Black Rice</ListGroupItem>
                            <ListGroupItem>Salad</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start gap-3 mb-2'><IoFishSharp size={20} /><h2>Proteins</h2></div>
                        <ListGroup>
                            {proteins.map((p, index) => (
                              <ListGroupItem key={index}>{p.name}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-start gap-3 mb-2'><GiAvocado size={20} /><h2>Ingredients</h2></div>
                        <ListGroup>
                            {ingredients.map((i, index) => (
                                <ListGroupItem key={index}>{i.name}</ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            </>
            )}

        </Container>
    )
}