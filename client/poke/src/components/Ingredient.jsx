import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Ingredient({ingredient, onNext}) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={`../../assets/imgs/${ingredient.ingredientName}.jpg`}/>
      <Card.Body>
        <Card.Title>{ingredient.ingredientName}</Card.Title>
        <Button variant="primary" onClick={onNext}>Next</Button>
      </Card.Body>
    </Card>
  );
}

export default Ingredient;