import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PokeSizeAvailability from './PokeSizeAvailability';
import '../../public/assets/styles/app.css'

export default function CreatePoke(){
    return(<Card>
        <Card.Header>
            <div>Progress:</div>
            <ProgressBar now={20}/>
        </Card.Header>

        <Card.Body>
          <Card.Title>Select your size</Card.Title>
          <Card.Text>
            {/*TODO: rendering availability con chiamata a db*/}
            <div className='poke-size-row'>
                <PokeSizeAvailability size={{sizeName:"Small", price:"10,50", nProteins:1, nIngredients: 4}}/>
                <PokeSizeAvailability size={{sizeName:"Regular", price:"12,50", nProteins:2, nIngredients: 4}}/>
                <PokeSizeAvailability size={{sizeName:"Large", price:"14,00", nProteins:3, nIngredients: 6}}/>
            </div>
          </Card.Text>
        <p class="totalPrice">Price: €0,00</p>
        </Card.Body>

      </Card>);
}