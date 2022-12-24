import CardComponent from "./CardComponent";

const CardContainerComponent = ({ DataFromAPI }) => {
  return (
    <div className="flex flex-wrap justify-evenly" style={{ textAlign: "center" }}>
      {DataFromAPI.map((details) => <CardComponent key={details.id} details={details} />)}
    </div>
  );
};

export default CardContainerComponent;
