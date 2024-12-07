import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occured"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
