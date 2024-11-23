import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {gameQuery.genre?.name} {gameQuery.platform?.name} Game
    </Heading>
  );
};

export default GameHeading;
