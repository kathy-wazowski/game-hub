import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre(); //!!!!! 这个必须放到组件内部
  const { data: platforms } = usePlatform();
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
