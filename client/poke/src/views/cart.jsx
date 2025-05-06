import CartPoke from "../components/cartPoke";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

export default function Cart(){
    return (
        <div>
            <h1>Your cart</h1>
            <p>Welcome to the cart page!</p>
            <CartPoke size={"Regular"} base={"Rice"} proteins={["Tuna", "Chicken"]} ingredients={["Avocado", "Ananas", "Kale"]} price={20.00}/>
            <CartPoke size={"Regular"} base={"Rice"} proteins={["Tuna", "Chicken"]} ingredients={["Avocado", "Ananas", "Kale"]} price={20.00}/>
            <Row>
                <Col sm={8}>
                    <h3>Total price: 40.00€</h3>
                </Col>
                <Col sm={4}>
                    <Button variant="primary" style={{marginRight:'10px'}}>Checkout</Button>
                    <Button variant="danger">Clear cart</Button>
                </Col>
            </Row>
            
        </div>
    )
}