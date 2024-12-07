import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* Wrap aside GridItem with Show for conditional display */}
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"} padding="10px">
        <GameHeading />
        <HStack spacing={5} marginBottom="3">
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;
