import { Heading } from "@chakra-ui/react";
import useSelectedPlatform from "../hooks/useSelectedPlatform";
import useSelectedGenre from "../hooks/useSelectedGenre";
import useGameStore, { GameQuery } from "../store";

const GameHeading = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const selectedGenre = useSelectedGenre(genreId);
  const selectedPlatform = useSelectedPlatform(platformId);
  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
