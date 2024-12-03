import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useSelectedPlatform from "../hooks/useSelectedPlatform";
import useSelectedGenre from "../hooks/useSelectedGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useSelectedGenre(gameQuery.genreId);
  const selectedPlatform = useSelectedPlatform(gameQuery.platformId);
  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
