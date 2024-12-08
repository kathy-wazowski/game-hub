import React from "react";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";
import { Heading, Spinner } from "@chakra-ui/react";

const GameDetail = () => {
  const { data: game, isLoading, error } = useGameDetail();
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw ?? ""}</ExpandableText>
    </>
  );
};

export default GameDetail;
