import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/error-icon.webp";

const ErrorComponent = () => {
  const errorData = useRouteError();
  return (
    <div className="text-center m-4">
      <img src={errorImg} className="img-fluid" alt="Error" />
      <h4 className="mt-4">Oops! Something went wrong!</h4>
      <p className="badge badge-danger">{errorData.statusText}</p>
    </div>
  );
};

export default ErrorComponent;
