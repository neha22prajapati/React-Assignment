import { Card, Form } from "react-bootstrap";
import "./CartComponent.css";

const CartComponent = () => {
    return (
       <div className="cart-section">
         <Card>
            <Card.Body className="cart-container-1">
                <Form.Check aria-label="option 1" />
            </Card.Body>
            <Card.Body className="cart-container-2">
                <Card.Img
                variant="top"
                className="cart-product-img"
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="image"
                />
            </Card.Body>
            <Card.Body className="cart-container-3">
                <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
                <Card.Text>
                Your perfect pack for everyday use and walks in the forest. Stash your
                laptop (up to 15 inches) in the padded sleeve, your everyday
                </Card.Text>
                <Form>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Select size="sm" aria-label="Quantity">
                        <option>1</option>
                        <option>2</option>
                    </Form.Select>
                </Form>
                <Card.Title>₹ 200</Card.Title>
                <Card.Text><small>Inclusive of all taxes</small></Card.Text>
            </Card.Body>
            <Card.Body className="cart-container-4">
                <i class="bi bi-x-lg"></i>
            </Card.Body>
        </Card>
       </div>
    );
};

export default CartComponent;