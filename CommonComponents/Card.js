
const Card = (props) => {
  return <section className={`card ${props.style}`}>{props.children}</section>;
};

export default Card;
