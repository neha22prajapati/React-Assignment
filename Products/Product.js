import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Product.css";

const Product = () => {
  return (
    <Card className="product-section">
      <Card.Body className="container-1">
        <Card.Img
          variant="top"
          className="product-img"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="image"
        />
      </Card.Body>
      <Card.Body className="container-2">
        <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
        <Card.Text>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </Card.Text>
        <Card.Text>
          <strong>Category:</strong> Men's clothing
        </Card.Text>
        <table className="product-rating-table">
          <tbody>
            <tr>
              <td>
                4.2 <span>⭐</span>
              </td>
              <td>25 Ratings</td>
            </tr>
          </tbody>
        </table>

        <Card.Title>₹ 200</Card.Title>
        <Card.Text><small>Inclusive of all taxes</small></Card.Text>

        <Button variant="primary">ADD TO BAG</Button>
        {' '}
        <Button variant="outline-secondary">
          WISHLIST <span>❤</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
