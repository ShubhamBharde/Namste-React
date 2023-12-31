import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  // useRouteError() hook gives more error info about routing
  const err = useRouteError();

  return (
    <div>
      <h1>OOPS Something Went Wrong!!!</h1>
      <h2>{err.status + " : " + err.statusText}</h2>
      <h3>{err.error.message}</h3>
    </div>
  );
};

export default ErrorElement;
