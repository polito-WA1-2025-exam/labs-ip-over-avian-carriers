import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Ingredient from './Ingredient';
import '../../public/assets/styles/app.css'
import Button from 'react-bootstrap/Button';

export default function LoggedSelectBase({onNext, onBack}){
    return(<Card>
        <Card.Header>
            <div>Progress:</div>
            <ProgressBar now={40}/>
        </Card.Header>

        <Card.Body>
          <Card.Title>Select your base</Card.Title>
          <Card.Text>
            {/*TODO: rendering availability con chiamata a db*/}
            <div className='poke-size-row'>
                <Ingredient onNext={onNext} ingredient={{ingredientName:"Rice"}}/>
                <Ingredient onNext={onNext} ingredient={{ingredientName:"Black Rice"}}/>
                <Ingredient onNext={onNext} ingredient={{ingredientName:"Salad"}}/>
            </div>
          </Card.Text>
        <p class="totalPrice">Price: €0,00</p>
        <Button variant="secondary" onClick={onBack}>Back</Button>

        </Card.Body>

      </Card>);
}