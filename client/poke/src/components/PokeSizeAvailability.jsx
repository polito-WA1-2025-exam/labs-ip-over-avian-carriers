import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokeSizeAvailability({onNext, size}) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={`../../assets/imgs/${size.sizeName}.png`}/>
      <Card.Body>
        <Card.Title>{size.sizeName}</Card.Title>
        <Card.Text>
          <div>
            <p className="nLeft">Only N left!</p>
            {/*TODO: Togliere la s quando ho solo una protein */}
            <p>{size.nProteins} Proteins, {size.nIngredients} Ingredients</p>
            <p>€{size.price}</p>
          </div>
        </Card.Text>
        <Button variant="primary" onClick={onNext}>Next</Button>
      </Card.Body>
    </Card>
  );
}

export default PokeSizeAvailability;