import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = (props) => {
  const navigate = useNavigate();

  function goToProduct() {
      navigate("/product");
  }

  return (
    <Card className="product-list-li">
      <div onClick={goToProduct}>
      <div className="card-img">
        <Card.Img variant="top" src={props.image} />
      </div>
      <Card.Body key={props.id}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{`₹ ${props.price}`}</Card.Text>
      </Card.Body>
      </div>
      <div  className="d-grid gap-2">
      <Button 
        variant="light"
        onClick={() => navigate("/cart")}>
        Add to Card
      </Button>
      </div>
    </Card>
  );
};

export default ProductList;
