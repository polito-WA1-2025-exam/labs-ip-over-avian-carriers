import Container from 'react-bootstrap/Container';
import ControlledCarousel from '../components/ControlledCarousel';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router';



export default function Home() {
    return (
        <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center gap-3 min-vh-100'>
            <h1>Welcome to The Lord of the Bowl – where epic flavor quests begin.</h1>
            <ControlledCarousel />
            <p> From the freshest seafood to legendary toppings and house-made sauces, every poke bowl is crafted to rule your tastebuds. Your journey to the perfect bowl starts here.<br></br>
                Choose one of our signature creations or forge your own path with fully customizable ingredients. One bowl to rule them all 
                and it's made just for you.</p>
            <Button variant="dark" size="lg"><NavLink to="/register" className="text-white text-decoration-none"> Start your quest now!</NavLink></Button>    
            </Container>
    )
}