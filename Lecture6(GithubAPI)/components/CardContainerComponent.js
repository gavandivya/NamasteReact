import CardComponent from "./CardComponent";

const CardContainerComponent = ({ DataFromAPI }) => {
  return (
    <div className="container">
      <div className="row" style={{ textAlign: "center" }}>
        {DataFromAPI.map((details) => <CardComponent key={details.id} details={details} />)}
      </div>
    </div>
  );
};

export default CardContainerComponent;
