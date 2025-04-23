import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CreatePoke from '../components/CreatePoke';
//import { NavLink } from 'react-router';



export default function LoggedHome() {
    return (
        <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center gap-3 min-vh-100'>
            <h3>Create your poke!</h3>
            <CreatePoke/>
        </Container>
    )
}