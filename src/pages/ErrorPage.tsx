import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <h1>Oops</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "This Page does not exist"
          : "Sorry an Unexpected Error"}
      </p>
    </>
  );
};

export default ErrorPage;
