import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductList.css";

const ProductList = (props) => {
  return (
    <Card className="product-list-li">
      <div className="card-img">
        <Card.Img variant="top" src={props.image} />
      </div>
      <Card.Body key={props.id}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{`₹ ${props.price}`}</Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
