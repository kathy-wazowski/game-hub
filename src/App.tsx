import React, { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onChangeSearch={(search) => setGameQuery({ ...gameQuery, search })}
        />
      </GridItem>

      {/* Wrap aside GridItem with Show for conditional display */}
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"} padding="10px">
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} marginBottom="3">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector
            selectedOrder={gameQuery.ordering}
            onSelect={(ordering) => setGameQuery({ ...gameQuery, ordering })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;